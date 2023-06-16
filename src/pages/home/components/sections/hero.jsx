import videoHome from "assets/videos/video.mp4";
export default function HeroSection() {
  return (
    <section className="header relative md:h-auto lg:overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-50 lg:opacity-100">
        <video
          src={videoHome}
          autoPlay
          loop
          className="h-full w-full object-cover"
        ></video>
      </div>
      <div className="container mx-auto px-4 py-4 pt-16 md:pt-20 lg:mt-56 lg:px-16">
        <div className="border-white md:border-l md:pl-8">
          <p className="text-base font-light leading-none tracking-wide text-white">
            Out now
          </p>
          <h1 className="m-0 font-sans text-2xl font-bold text-white md:text-6xl md:leading-none">
            Knights of Wales
          </h1>
          <p className="w-full text-lg text-white md:my-4 md:max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
            laboriosam quae mollitia voluptatibus placeat. Libero adipisci
            ipsam, nobis, corrupti nesciunt id beatae laudantium quis dolorum
            aliquam impedit quae recusandae ad.
          </p>
          <a
            href="/"
            className="my-2 inline-block rounded-md bg-red-700 px-5 py-2 text-sm text-white md:px-10 md:py-3 md:text-lg"
          >
            Steam/Buy
          </a>
        </div>
      </div>
    </section>
  );
}
