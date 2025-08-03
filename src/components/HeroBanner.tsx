import Event_banner_1 from '../assets/images/event_banner_1.jpg';

const HeroBanner = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('event-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToEvents = () => {
  const eventList = document.getElementById('event-cards');
  if (eventList) {
    eventList.scrollIntoView({ behavior: 'smooth' });
  }
};


  return (
    <div className="relative w-full h-[600px] overflow-hidden bg-[#01287a]">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={Event_banner_1}
          alt="Event celebration"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-[#5800a0] opacity-70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-white">Event</span>  <span className="text-amber-300">Management</span>   System Organize Events Effortlessly
        </h2>

        <p className="text-sm md:text-lg max-w-3xl md:mb-8 md:mt-4 mb-9 mt-2">
          Plan, schedule, and manage events all in one place. Whether you're hosting a corporate seminar, a music fest, 
          or a local workshop, our platform makes it seamless and efficient.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <button className="relative bg-white text-[#5800a0] py-3 px-8 rounded-lg font-bold text-lg 
                              transition-all duration-300 ease-in-out 
                              hover:scale-105 hover:shadow-2xl hover:bg-[#f0f0f0]"
                              onClick={scrollToEvents}>
            <span className="relative z-10">Explore Upcoming Events</span>
          </button>

           <button
            className="relative bg-white text-[#5800a0] py-3 px-8 rounded-lg font-bold text-lg 
                       transition-all duration-300 ease-in-out 
                       hover:scale-105 hover:shadow-2xl hover:bg-[#f0f0f0]"
            onClick={scrollToForm}
          >
            <span className="relative z-10">Create Event</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
