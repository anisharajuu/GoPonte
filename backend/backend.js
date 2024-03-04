import express from "express";
import mysql from "mysql";
import dotenv from "dotenv";
import cors from "cors";
// import bcrypt from "bcrypt";

dotenv.config();

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());

// connect to mysql database --> tested that connection works
// make sure to send credentials to .env
const connection = mysql.createConnection({
  host: "198.12.246.179",
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: "Ponte",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL: " + err.stack);
    return;
  }

  console.log("Connected to MySQL as ID " + connection.threadId);
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
  // Handle the error, log it, or exit the process if necessary
});


app.post("/studentLogIn", function (req, res) {
  const { email, password } = req.body;

  const userData = {
    email,
    password,
  };

  connection.query(
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

app.post("/studentSignUp", function (req, res) {
  const { firstName, lastName, email, password } = req.body;

  const userData = {
    firstName,
    lastName,
    email,
    password,
  };

  connection.query(
    "INSERT INTO students SET ?",
    userData,
    function (err, result) {
      if (err) {
        console.error("Error inserting into the database:", err);
        res.status(500).send();
      } else {
        console.log("1 record inserted");
        res.status(201).send();
      }
    }
  );
});

app.post("/businessSignUp", function (req, res) {
  const { name, email, password } = req.body;

  const userData = {
    BusName: name,
    email,
    password,
  };

  connection.query(
    "INSERT INTO Businesses SET ?",
    userData,
    function (err, result) {
      if (err) {
        console.error("Error inserting into the database:", err);
        res.status(500).send();
      } else {
        console.log("1 record inserted");
        res.status(201).send();
      }
    }
  );
});

app.get("/activeJobs", (req, res) => {
  const query = `
    SELECT JobPostings.job_title, Businesses.BusName, JobPostings.startDate, JobPostings.Duration, LEFT(JobPostings.job_desc, 100) as short_desc
    FROM JobPostings
    JOIN Businesses ON JobPostings.business = Businesses.BusId
    LIMIT 100;
  `;

  connection.query(query, (err, results) => {
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

  connection.query(query, [jobId], (err, results) => {
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

app.post("/apply", function (req, res) {
  const { name, email, address, education, experience } = req.body;

  if (!name || !email || !address || !education || !experience) {
    return res.status(400).json({ error: "Incomplete data provided." });
  }

  const userData = {
    fullName: name,
    email,
    street: address.street,
    city: address.city,
    state: address.state,
    zip: address.zip,
    education,
    experience,
  };

  connection.query(
    "INSERT INTO Applications SET ?",
    userData,
    function (err, result) {
      if (err) {
        console.error("Error inserting into the database:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      } else {
        console.log("1 record inserted");
        return res
          .status(201)
          .json({ message: "Record inserted successfully" });
      }
    }
  );
});

app.get("/job/:id");


app.post("/addJob", (req, res) => {
  const { jobTitle, busName, startDate, duration, jobDesc } = req.body;

  console.log("Business value:", busName); // Log the business value
  console.log("Start Date:", startDate);

  connection.query(
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

      connection.query(
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

app.get("/jobPostings", (req, res) => {
  const query =
    "SELECT jp.*, b.BusName FROM JobPostings jp JOIN Businesses b ON jp.business = b.BusId;";
  connection.query(query, (error, results) => {
    if (error) {
      console.error("Error fetching job postings:", error);
      res.status(500).json({ message: "Internal server error" });
    } else {
      // Return the fetched job postings as JSON response
      res.status(200).json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
