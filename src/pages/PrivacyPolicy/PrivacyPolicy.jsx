import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen  py-16 px-4 md:px-20 lg:px-40">
      <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>

      <div className=" rounded-xl shadow-lg p-8 space-y-6">
        <p className="text-gray-700">
          At <span className="font-semibold">LocalChefBazaar</span>, your
          privacy is important. This policy explains what information we
          collect, how we use it, and your rights.
        </p>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
          <p className="text-gray-700">
            We collect information such as your name, email, phone number,
            address, and payment details when you create an account or place
            orders.
          </p>

          <h2 className="text-2xl font-semibold">
            2. How We Use Your Information
          </h2>
          <p className="text-gray-700">
            Your information is used to process orders, communicate with you,
            improve our services, and provide a personalized experience.
          </p>

          <h2 className="text-2xl font-semibold">
            3. Sharing Your Information
          </h2>
          <p className="text-gray-700">
            We do not sell your personal information. We may share it with
            chefs, payment processors, and service providers as necessary to
            fulfill orders.
          </p>

          <h2 className="text-2xl font-semibold">4. Security</h2>
          <p className="text-gray-700">
            We implement reasonable security measures to protect your data.
            However, we cannot guarantee complete security.
          </p>

          <h2 className="text-2xl font-semibold">5. Cookies & Tracking</h2>
          <p className="text-gray-700">
            We may use cookies and analytics tools to improve your experience on
            our platform.
          </p>

          <h2 className="text-2xl font-semibold">6. Your Rights</h2>
          <p className="text-gray-700">
            You can access, update, or request deletion of your personal
            information by contacting us.
          </p>

          <h2 className="text-2xl font-semibold">
            7. Changes to Privacy Policy
          </h2>
          <p className="text-gray-700">
            We may update this Privacy Policy from time to time. Your continued
            use of our services indicates acceptance.
          </p>

          <h2 className="text-2xl font-semibold">8. Contact</h2>
          <p className="text-gray-700">
            For questions about privacy, contact{" "}
            <span className="font-medium text-blue-600">
              support@localchefbazaar.com
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
