import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserSupport = () => {
    const [formData, setFormData] = useState("");

    const handleChange = (e) => {
        setFormData(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted with data:", formData);
        setFormData("");
    };

    return (
        <div
            data-aos="zoom-in"
            className="py-[130px] bg-[#087f65;] rounded hover:shadow-xl my-5"
        >
            <h1 className=" text-5xl text-center text-gray-50 font-bold font-serif">
                How can we help?{" "}
            </h1>
            <p className="text-center text-slate-200 text-xl mt-2 mb-7">
                {" "}
                Feel free to reach out with any questions you have below!{" "}
            </p>

            <div className="text-center">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Write here"
                        className="h-[48px] input-[white] rounded-xl w-full rounded-r-none max-w-xs border-r-0 px-3 input input-bordered"
                        value={formData}
                        onChange={handleChange}
                    />
                    <button className="bg-slate-700 h-[48px] text-slate-100 px-5 rounded-r-md">
                        Message{" "}
                    </button>
                </form>
            </div>

            <div className="mt-10">
                <h2 className="text-3xl text-center text-gray-50 font-bold font-serif mb-4">
                    Frequently Asked Questions
                </h2>
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    <div className="p-4 bg-gray-800 rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-200 mb-2">
                            How do I reset my password?
                        </h3>
                        <p className="text-sm text-gray-300">
                            You can reset your password by clicking on the "Forgot Password" link on the login page. Follow the instructions sent to your email to reset your password.
                        </p>
                    </div>
                    <div className="p-4 bg-gray-800 rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-200 mb-2">
                            How do I update my portal information?
                        </h3>
                        <p className="text-sm text-gray-300">
                            To update your profile information, navigate to the "Edit Profile" section on your dashboard. Make the necessary changes and save them.
                        </p>
                    </div>
                    <div className="p-4 bg-gray-800 rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-200 mb-2">
                            Is there a mobile app available?
                        </h3>
                        <p className="text-sm text-gray-300">
                            Currently, we do not have a mobile app available. Our platform is accessible via web browsers on both desktop and mobile devices.
                        </p>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <Link to="/FAQ" className="bg-slate-700 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded">
                        Visit FAQ Page
                    </Link>
                </div>
            </div>
            <div className="mt-10">
                <h2 className="text-3xl text-center text-gray-50 font-bold font-serif mb-4">
                    Contact Information
                </h2>
                <p className="text-lg text-center text-gray-200">
                    For further assistance, you can reach us via email at{" "}
                    <span className="font-semibold">example@example.com</span> or go to our Contact page.
                </p>
            </div>
        </div>
    );
};

export default UserSupport;
