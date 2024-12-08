export default function ServicesSection   (){
    return(
        <section id='services' className="py-16 dark:bg-gray-800 dark:border-gray-600">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-voile">
            Our Services
          </h2>
          <div className="grid gap-8 mt-8 md:grid-cols-3">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center dark:bg-dark-background dark:text-dark-text">
              <h3 className="text-xl font-semibold text-gray-500"><i class="fa-solid fa-code"></i> Web Development</h3>
              <p className="mt-2 text-gray-600 dark:text-dark-text">
                Full-stack web solutions tailored to your business needs.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center dark:bg-dark-background dark:text-dark-text">
              <h3 className="text-xl text-gray-500 font-semibold"><i class="fas fa-globe"></i> Domain Consulting</h3>
              <p className="mt-2 text-gray-600 dark:text-dark-text">
                Premium domain acquisition for strong digital branding.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center dark:bg-dark-background dark:text-dark-text">
              <h3 className="text-xl text-gray-500 font-semibold"><i class="fas fa-lightbulb"></i> Digital Branding</h3>
              <p className="mt-2 text-gray-600 dark:text-dark-text">
                Enhance your online presence with strategic branding.
              </p>
            </div>
          </div>
        </div>

      </section>
  
    )
}