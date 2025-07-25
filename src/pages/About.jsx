import Gallery from "../Components/Gellery";
import Testimonial from "../Components/Testimonial";

export default function AboutUs() {
  return (
    <>
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-16 mt-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        <div className="w-full md:w-1/2">
          <img
            src="./images/bg3.webp" 
            alt="Qalanjo Fast Food kitchen"
            className="rounded-2xl shadow-xl w-full object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-extrabold text-rose-600 mb-4">
            Welcome to Yaanyo Fast Food
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            At Yaanyo Fast Food, we blend flavor, culture, and speed to serve you the best bites in town. Whether you’re craving crispy fries, spicy shawarma, or our signature burgers — we’ve got something for every appetite.
          </p>
          <p className="text-gray-700 text-lg mb-4">
            Founded with love and local pride, Yaanyo is more than just fast food — it’s a place where friends meet, families laugh, and taste buds celebrate.
          </p>
          <p className="text-gray-700 text-lg">
            Visit us today and discover why we’re the heartbeat of good food in your neighborhood.
          </p>
        </div>
      </div>
    </section>

    <Testimonial/>
    <Gallery/>


      </>
  );
}
