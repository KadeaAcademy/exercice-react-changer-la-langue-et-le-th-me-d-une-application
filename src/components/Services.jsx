const Services = ({ icon, title, text, color }) => {
  return (
    <div className="text-center mb-10 xl:mb-0">
      <div className="flex items-center justify-center">
        <div
          className={`w-20 py-7 flex justify-center bg-${color}-50 text-${color}-500 rounded-md mb-5 md:mb-10`}
        >
          <i>{icon}</i>
        </div>
      </div>

      <h2 className="font-semibold text-gray-700 text-xl md:text-3xl mb-5">
        {title}
      </h2>

      <p className="font-normal text-gray-400 text-sm md:text-lg">{text}</p>
    </div>
  );
};

export default Services;
