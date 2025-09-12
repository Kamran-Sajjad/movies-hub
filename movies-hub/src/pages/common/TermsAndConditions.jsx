import HeaderFooterWrapper from "../../components/layout/HeaderFooterWrapper";

const TermsAndConditions = () => {
  return (
    <HeaderFooterWrapper>
      <section className="min-h-screen bg-gray-50 text-gray-800 py-12 px-6">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-900">
            Terms and Conditions
          </h1>
          <p className="text-center text-gray-600 mb-10">
            Please read these terms and conditions carefully before using our
            services.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-800">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing or using our website, you agree to be bound by
                these Terms and Conditions. If you disagree with any part of
                these terms, please discontinue using our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-800">
                2. Use of Service
              </h2>
              <p className="text-gray-600 leading-relaxed">
                You agree to use the service only for lawful purposes and in a
                way that does not infringe the rights of others or restrict
                their use and enjoyment of the website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-800">
                3. Intellectual Property
              </h2>
              <p className="text-gray-600 leading-relaxed">
                All content, features, and functionality on this website are the
                exclusive property of the company and are protected by
                copyright, trademark, and other laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-800">
                4. Limitation of Liability
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We are not liable for any damages arising from your use of our
                services. Use of the website is at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-800">
                5. Changes to Terms
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to update or modify these Terms and
                Conditions at any time. Continued use of our website after
                changes constitutes your acceptance of the new terms.
              </p>
            </section>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm">
              Last updated: September 8, 2025
            </p>
          </div>
        </div>
      </section>
    </HeaderFooterWrapper>
  );
};

export default TermsAndConditions;
