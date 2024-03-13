import React from "react";

const FAQ = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h1>
            <div className="grid gap-6">
                <div className="border p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-2">How do I reset my password?</h2>
                    <p className="text-gray-700">
                        You can reset your password by clicking on the "Forgot Password" link on the login page. Follow the instructions sent to your email to reset your password.
                    </p>
                </div>
                <div className="border p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-2">How do I update my profile information?</h2>
                    <p className="text-gray-700">
                        To update your profile information, navigate to the "Edit Profile" section on your dashboard. Make the necessary changes and save them.
                    </p>
                </div>
                <div className="border p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-2">Is there a mobile app available?</h2>
                    <p className="text-gray-700">
                        Currently, we do not have a mobile app available. Our platform is accessible via web browsers on both desktop and mobile devices.
                    </p>
                </div>
                {/* Add more FAQ here */}
            </div>
        </div>
    );
};

export default FAQ;
