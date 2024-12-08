import Link from "next/link";

export default function HeroSection (){
    return(
<section className="bg-voile dark:bg-dark-background text-white py-16">
  <div className="container mx-auto text-center px-4 md:px-0">
    <h1 className="text-3xl md:text-5xl text-violet-100 font-bold">
      Build Your Digital Future
    </h1>
    <p className="mt-4 text-base md:text-lg">
      Web Development & Domain Solutions to elevate your online presence.
    </p>
    <button className="mt-6 bg-white text-voile font-bold px-4 py-2 md:px-6 md:py-3 rounded-full shadow-lg hover:bg-gray-100 dark:text-voile">
      
      <Link href={'/about'} >
      About me
          </Link>
    </button>
  </div>
</section>
    )
}