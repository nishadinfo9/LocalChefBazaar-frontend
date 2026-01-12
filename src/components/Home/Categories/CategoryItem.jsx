export const CategoryItem = ({ color, image, title, description }) => {
  return (
    <div className="flex  gap-5">
      <div
        className={`${color} w-20 h-20 rounded-full flex items-center justify-center text-white`}
      >
        <img className="w-10" src={image} alt="" />
      </div>

      <div className="w-2xs mx-auto">
        <h4 className="font-semibold text-2xl">
          {title || "Grab Your Delicious Food"}
        </h4>
        <p className="text-md text-gray-600 ">
          {description || " We prepare delicious Food For you we are always"}
        </p>
      </div>
    </div>
  );
};
