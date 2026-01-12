import React from "react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen  py-16 px-4 md:px-20 lg:px-40">
      <h1 className="text-4xl font-bold text-center mb-8">Terms of Service</h1>

      <div className=" rounded-xl shadow-lg p-8 space-y-6">
        <p className="text-gray-700">
          Welcome to <span className="font-semibold">LocalChefBazaar</span>! By
          using our services, you agree to these Terms of Service. Please read
          them carefully.
        </p>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
          <p className="text-gray-700">
            By accessing or using LocalChefBazaar, you agree to comply with
            these terms and all applicable laws. If you do not agree, do not use
            our services.
          </p>

          <h2 className="text-2xl font-semibold">2. Services</h2>
          <p className="text-gray-700">
            LocalChefBazaar connects home cooks (chefs) with customers for
            homemade meals. We provide a platform for ordering, payment, and
            order tracking.
          </p>

          <h2 className="text-2xl font-semibold">3. User Accounts</h2>
          <p className="text-gray-700">
            You must create an account to use certain features. You are
            responsible for keeping your account secure and providing accurate
            information.
          </p>

          <h2 className="text-2xl font-semibold">4. Ordering & Payments</h2>
          <p className="text-gray-700">
            Orders are subject to confirmation by the chef. Prices and
            availability may change. Payments are processed securely; refunds
            follow our refund policy.
          </p>

          <h2 className="text-2xl font-semibold">5. User Conduct</h2>
          <p className="text-gray-700">
            Users must not use the service for illegal activities, post harmful
            or false information, or harass others.
          </p>

          <h2 className="text-2xl font-semibold">6. Intellectual Property</h2>
          <p className="text-gray-700">
            All content, logos, and designs on LocalChefBazaar are owned by the
            platform or its partners. Do not use without permission.
          </p>

          <h2 className="text-2xl font-semibold">7. Limitation of Liability</h2>
          <p className="text-gray-700">
            LocalChefBazaar is not responsible for food quality, disputes
            between users and chefs, or losses/damages from using the platform.
          </p>

          <h2 className="text-2xl font-semibold">8. Termination</h2>
          <p className="text-gray-700">
            We may suspend or terminate your account if you violate these terms.
          </p>

          <h2 className="text-2xl font-semibold">9. Changes to Terms</h2>
          <p className="text-gray-700">
            We may update these Terms of Service at any time. Continued use
            means acceptance.
          </p>

          <h2 className="text-2xl font-semibold">10. Contact</h2>
          <p className="text-gray-700">
            For questions, contact us at{" "}
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

export default TermsOfService;
