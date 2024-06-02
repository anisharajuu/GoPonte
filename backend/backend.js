import express from "express";
import mysql from "mysql";
import dotenv from "dotenv";
import cors from "cors";
import multer from "multer";
import fs from "fs";

// import bcrypt from "bcrypt";

dotenv.config();

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());

// connect to mysql database --> tested that connection works
// make sure to send credentials to .env
const pool = mysql.createPool({
  connectionLimit: 10,
  host: "198.12.246.179",
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: "Ponte",
});

pool.on("connection", (connection) => {
  /*
  if (err) {
    console.error("Error connecting to MySQL: " + err.stack);
    return;
  }
*/
  console.log("Connected to MySQL as ID " + connection.threadId);
  // connection.release();
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
  // Handle the error, log it, or exit the process if necessary
});

const uploadDir = "./uploads";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + ".pdf");
  },
});

const upload = multer({ storage: storage });

app.post("/studentLogIn", function (req, res) {
  const { email, password } = req.body;

  const userData = {
    email,
    password,
  };

  pool.query(
    "SELECT * FROM students WHERE email COLLATE latin1_general_cs = ? AND password COLLATE latin1_general_cs = ?",
    [userData.email, userData.password],
    function (err, result) {
      if (err) {
        console.error("Error querying the database:", err);
        res.status(500).send();
      } else {
        if (result.length > 0) {
          const studentData = result[0];
          console.log("Login successful");
          res.status(200).json(studentData);
        } else {
          console.log("Invalid credentials");
          res.status(401).send("Invalid credentials");
        }
      }
    }
  );
});

app.post("/businessLogin", function (req, res) {
  const { email, password } = req.body;

  const userData = {
    email,
    password,
  };

  pool.query(
    "SELECT * FROM Businesses WHERE email COLLATE latin1_general_cs = ? AND password COLLATE latin1_general_cs = ?",
    [userData.email, userData.password],
    function (err, result) {
      if (err) {
        console.error("Error querying the database:", err);
        res.status(500).send();
      } else {
        if (result.length > 0) {
          const studentData = result[0];
          console.log("Login successful");
          res.status(200).json(studentData);
        } else {
          console.log("Invalid credentials");
          res.status(401).send("Invalid credentials");
        }
      }
    }
  );
});

app.post("/studentSignUp", function (req, res) {
  const { firstName, lastName, email, password } = req.body;

  const userData = {
    firstName,
    lastName,
    email,
    password,
  };

  pool.query("INSERT INTO students SET ?", userData, function (err, result) {
    if (err) {
      console.error("Error inserting into the database:", err);
      res.status(500).send();
    } else {
      console.log("1 record inserted");
      res.status(201).send();
    }
  });
});

app.get("/fetchStudent/:studentId", async (req, res) => {
  const { studentId } = req.params;

  if (!studentId) {
    return res.status(400).json({ error: "Missing student ID" });
  }

  const query = "SELECT * FROM students WHERE id = ?";

  pool.query(query, [studentId], (err, results) => {
    if (err) {
      console.error("Error querying the database:", err);
      return res
        .status(500)
        .json({ error: "Internal Server Error", details: err.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: "Student not found" });
    } else {
      console.log("Student data retrieved successfully");
      return res.status(200).json(results[0]); // assuming only one result should be returned
    }
  });
});

app.post("/businessSignUp", function (req, res) {
  const { name, email, password } = req.body;

  const userData = {
    BusName: name,
    email,
    password,
  };

  pool.query("INSERT INTO Businesses SET ?", userData, function (err, result) {
    if (err) {
      console.error("Error inserting into the database:", err);
      res.status(500).send();
    } else {
      console.log("1 record inserted");
      res.status(201).send();
    }
  });
});

app.get("/activeJobs", (req, res) => {
  const query = `
    SELECT JobPostings.job_id, JobPostings.job_title, Businesses.BusName, JobPostings.startDate, JobPostings.Duration, LEFT(JobPostings.job_desc, 100) as short_desc
    FROM JobPostings
    JOIN Businesses ON JobPostings.business = Businesses.BusId
    LIMIT 100;
  `;

  pool.query(query, (err, results) => {
    if (err) {
      console.error("Error executing the query:", err);
      res.status(500).send("Internal Server Error");
      return;
    }

    res.json(results);
  });
});

app.get("/activeJobs/:jobId", (req, res) => {
  const jobId = req.params.jobId;

  const query = `
    SELECT JobPostings.job_title, Businesses.BusName, JobPostings.startDate, JobPostings.Duration, JobPostings.job_desc
    FROM JobPostings
    JOIN Businesses ON JobPostings.business = Businesses.BusId
    WHERE JobPostings.job_id = ?;
  `;

  pool.query(query, [jobId], (err, results) => {
    if (err) {
      console.error("Error executing the query:", err);
      res.status(500).send("Internal Server Error");
      return;
    }

    if (results.length === 0) {
      res.status(404).send("Job not found");
    } else {
      res.json(results[0]);
    }
  });
});

app.post("/apply", upload.single("resume"), function (req, res) {
  const { name, gradYear, university, experience, jobId, userId } = req.body;
  const resumePath = req.file.path;

  if (
    !name ||
    !gradYear ||
    !university ||
    !experience ||
    !jobId ||
    !userId ||
    !resumePath
  ) {
    return res.status(400).json({ error: "Incomplete data provided." });
  }

  const userData = {
    name,
    gradYear,
    university,
    experience,
    jobId,
    userId,
    resume: resumePath,
  };

  pool.query(
    "INSERT INTO applications SET ?",
    userData,
    function (err, result) {
      if (err) {
        console.error("Error inserting into the database:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      } else {
        console.log("1 record inserted");
        return res.status(201).json({
          message: "Record inserted successfully",
          applicationId: result.insertId,
        });
      }
    }
  );
});

app.get("/studentApplications/:userId", function (req, res) {
  const userId = req.params.userId;

  if (!userId) {
    return res.status(400).json({ error: "Missing userId parameter" });
  }

  const query = `
      SELECT a.*, j.job_title, j.job_desc, j.startDate, j.Duration, b.BusName
      FROM applications a
      JOIN JobPostings j ON a.jobId = j.job_id
      JOIN Businesses b ON j.business = b.BusId
      WHERE a.userId = ?`;

  pool.query(query, [userId], function (err, results) {
    if (err) {
      console.error("Error querying the database:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    if (results.length === 0) {
      // No applications found for the user
      return res
        .status(404)
        .json({ message: "No applications found for the user" });
    } else {
      //console.log("Applications retrieved successfully");
      return res.status(200).json(results);
    }
  });
});

app.post("/updateLastId", function (req, res) {
  const { studentId, lastId } = req.body;

  if (!studentId || !lastId) {
    return res.status(400).json({ error: "Missing studentId or lastId" });
  }

  const query = "UPDATE students SET lastId = ? WHERE id = ?";

  pool.query(query, [lastId, studentId], function (err, result) {
    if (err) {
      console.error("Error updating the database:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    if (result.affectedRows === 0) {
      // No rows were updated, which means no student was found with the provided ID
      return res.status(404).json({ error: "Student not found" });
    } else {
      console.log("Student lastId updated successfully");
      return res
        .status(200)
        .json({ message: "Student lastId updated successfully" });
    }
  });
});

app.get("/getApplicationById/:applicationId", function (req, res) {
  const application_id = req.params.applicationId;

  if (!application_id) {
    return res.status(400).json({ error: "Missing application_id parameter" });
  }

  const query = "SELECT * FROM applications WHERE application_id = ?";

  pool.query(query, [application_id], function (err, results) {
    if (err) {
      console.error("Error querying the database:", err);
      return res
        .status(500)
        .json({ error: "Internal Server Error", details: err.message });
    }
    if (results.length === 0) {
      // No application found with the given ID
      return res.status(404).json({ message: "Application not found" });
    } else {
      console.log("Application retrieved successfully");
      return res.status(200).json(results[0]); // Send back the first result
    }
  });
});

app.get("/job/:id");

app.post("/addJob", (req, res) => {
  const { jobTitle, busName, startDate, duration, jobDesc } = req.body;

  console.log("Business value:", busName); // Log the business value
  console.log("Start Date:", startDate);

  pool.query(
    "SELECT BusId FROM Businesses WHERE BusName = ?",
    [busName],
    (error, results) => {
      if (error) {
        console.error("Error retrieving business ID: ", error);
        res.status(500).json({ message: "Error retrieving business ID" });
        return;
      }

      if (results.length === 0) {
        console.error("Business not found");
        res.status(404).json({ message: "Business not found" });
        return;
      }

      // Extract the business ID from the query results
      const businessId = results[0].BusId;

      console.log("BusID:", businessId);
      const duration_fl = parseFloat(duration);
      // const userData = {
      //   jobTitle,
      //   businessId,
      //   startDate,
      //   jobDesc,
      //   duration_fl,
      // };

      pool.query(
        "INSERT INTO JobPostings (job_title, business, startDate, job_desc, Duration) VALUES (?, ?, ?, ?, ?)",
        [jobTitle, businessId, startDate, jobDesc, duration_fl],
        (error, result) => {
          if (error) {
            console.error("Error inserting data: ", error);
            res.status(500).json({ message: "Error inserting data" });
          } else {
            console.log("Data inserted successfully");
            res.status(200).json({ message: "Data inserted successfully" });
          }
        }
      );
    }
  );
});

app.get("/jobPostings/:businessId", (req, res) => {
  const businessId = req.params.businessId;
  if (!businessId) {
    return res.status(400).json({ error: "Missing businessId parameter" });
  }

  const query =
    `SELECT jp.*, b.BusName 
    FROM JobPostings jp 
    JOIN Businesses b ON jp.business = b.BusId  
    WHERE jp.businessId = ?`;
  pool.query(query,[businessId], function (err, results) {
  if (err) {
      console.error("Error querying the database:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    if (results.length === 0) {
      // No applications found for the business
      return res
        .status(404)
        .json({ message: "No applications found for the business" });
    } else {
      //console.log("Applications retrieved successfully");
      return res.status(200).json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
