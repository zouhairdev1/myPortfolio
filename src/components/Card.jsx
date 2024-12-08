export default function Card(){
    return(
      <section className="bg-gray-50 dark:bg-dark-background py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-voile  dark:text-white mb-12">
          How We Analyze the Perfect Domain Name
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 text-white p-3 rounded-full">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 16l-4-4m0 0l4-4m-4 4h16"
                  ></path>
                </svg>
              </div>
              <h3 className="ml-4 text-xl font-semibold text-gray-800 dark:text-white">
                Research & Discovery
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              We analyze market trends, niches, and relevant keywords to identify
              domains that align with your business goals.
            </p>
          </div>
    
          {/* Card 2 */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="bg-green-600 text-white p-3 rounded-full">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 10h11M9 21H4a2 2 0 01-2-2v-5a2 2 0 012-2h5m10 0a2 2 0 00-2-2h-5a2 2 0 00-2 2m0 0a2 2 0 002 2h5m2 0a2 2 0 002-2v-5a2 2 0 00-2-2h-5m2 0h-5"
                  ></path>
                </svg>
              </div>
              <h3 className="ml-4 text-xl font-semibold text-gray-800 dark:text-white">
                Quality Assessment
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Each domain undergoes rigorous testing for length, brandability, and
              SEO potential to ensure it's high-quality.
            </p>
          </div>
    
          {/* Card 3 */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-600 text-white p-3 rounded-full">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16s2 2 8 2 8-2 8-2"
                  ></path>
                </svg>
              </div>
              <h3 className="ml-4 text-xl font-semibold text-gray-800 dark:text-white">
                Risk Evaluation
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              We ensure there are no trademark issues or prior misuse, giving you a
              safe and valuable digital asset.
            </p>
          </div>
        </div>
      </div>
    </section>

    )
}