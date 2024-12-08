export default function Testimonials(){
    return(
        <section className="bg-gray-100 border-t border-gray-200 dark:bg-dark-background py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-voile">
            What Our Clients Say
          </h2>
          <div className="grid gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white shadow-lg rounded-lg p-6 dark:bg-dark-background dark:text-dark-text">
              <p className="italic text-gray-600 dark:text-dark-text">
                "Amazing service! They built a fantastic website for our business."
              </p>
              <h4 className="mt-4 font-semibold">- John D</h4>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 dark:bg-dark-background dark:text-dark-text">
              <p className="italic text-gray-600 dark:text-dark-text">
                "Their domain expertise helped us secure a premium name!"
              </p>
              <h4 className="mt-4 font-semibold">- Sarah L</h4>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 dark:bg-dark-background dark:text-dark-text">
              <p className="italic text-gray-600 dark:text-dark-text">
                "Highly recommend for anyone looking to build a strong brand."
              </p>
              <h4 className="mt-4 font-semibold">- Michael B</h4>
            </div>
          </div>
        </div>
      </section>
    )
}