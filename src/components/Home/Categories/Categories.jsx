import { CategoryItem } from "./CategoryItem";

export const CategoriesSection = () => {
  return (
    <section className="py-25">
      <h2 className="text-4xl font-bold my-5">
        Our <span className="text-orange-500">Categories</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 ">
        {/* LEFT – BIG CARD */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-yellow-400 to-orange-400 h-[420px] flex items-center justify-center">
          <img
            src="/images/burger.png"
            alt="Burger"
            className="mt-60 drop-shadow-xl"
          />

          <div className="absolute top-10 flex flex-col gap-8 items-center text-white justify-center">
            <h3 className="text-6xl text-center font-extrabold leading-none">
              Tasty <br /> Burger
            </h3>
            <span className="text-lg font-semibold">NEW!</span>
          </div>
        </div>

        {/* MIDDLE – SMALL CARDS */}
        <div className="grid grid-rows-2 gap-6">
          {/* Dessert */}
          <div className="relative rounded-3xl overflow-hidden h-[200px]">
            <img
              src="/images/dessert.jpg"
              alt="Dessert"
              className="w-full h-full object-cover"
            />
            <button className="absolute bottom-4 left-4 bg-white hover:bg-primary hover:text-white transition-all ease-in cursor-pointer px-4 py-1.5 rounded-full text-sm font-semibold shadow">
              Order Now
            </button>
          </div>

          {/* Snacks */}
          <div className="relative rounded-3xl overflow-hidden h-[200px]">
            <img
              src="/images/snacks.jpg"
              alt="Snacks"
              className="w-full h-full object-cover"
            />

            <button className="absolute bottom-4 left-4 bg-white hover:bg-primary hover:text-white transition-all ease-in cursor-pointer px-4 py-1.5 rounded-full text-sm font-semibold shadow">
              Order Now
            </button>
          </div>
        </div>

        {/* RIGHT – TEXT CONTENT */}

        <div className="flex flex-col justify-between">
          <CategoryItem image={"/images/fast-food.png"} color="bg-red-500" />
          <CategoryItem image={"/images/delivery.png"} color="bg-blue-500" />
          <CategoryItem image={"/images/restaurant.png"} color="bg-green-500" />
        </div>
      </div>
    </section>
  );
};
