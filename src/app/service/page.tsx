import React from "react";
import PageWrapper from "../../components/PageWrapper";

const page = () => {
  return (
    <div className=" w-full">
      <PageWrapper>
        <div className=" bg-black flex flex-col items-center justify-center gap-10 py-10 px-4">
          <h2 className="text-4xl font-semibold text-white mb-10">
            My Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: eCommerce Site Development */}
            <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">
                eCommerce Site Development
              </h3>
              <p className="text-gray-300 mb-6">
                I specialize in building fully functional and responsive
                eCommerce websites tailored to your business needs, using the
                latest technologies.
              </p>
              <button className="bg-green-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-green-600">
                Learn More
              </button>
            </div>

            {/* Card 2: Business Planning */}
            <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">Business Planning</h3>
              <p className="text-gray-300 mb-6">
                Offering comprehensive business planning services to ensure your
                eCommerce venture has a clear and effective strategy for
                success.
              </p>
              <button className="bg-green-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-green-600">
                Learn More
              </button>
            </div>

            {/* Card 3: Business Statistics */}
            <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">Business Statistics</h3>
              <p className="text-gray-300 mb-6">
                Analyze and interpret data to optimize business processes,
                improve sales, and increase profitability through accurate
                statistics.
              </p>
              <button className="bg-green-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-green-600">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </PageWrapper>
    </div>
  );
};

export default page;
