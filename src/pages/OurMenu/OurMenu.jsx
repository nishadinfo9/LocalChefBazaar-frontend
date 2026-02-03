import React, { useMemo, useState } from "react";
import MenuCard from "./MenuCard";
import Button from "../../utils/Button";

const foodMenu = [
  {
    id: 1,
    name: "Chicken Biryani",
    category: "main-dish",
    price: 180,
    rating: 4.7,
    image: "/images/chicken-biryani.png",
    description: "Spicy and flavorful chicken biryani with basmati rice",
  },
  {
    id: 2,
    name: "Beef Burger",
    category: "fast-food",
    price: 250,
    rating: 4.5,
    image: "/images/beef-burger.png",
    description: "Juicy beef burger with cheese and fresh vegetables",
  },
  {
    id: 3,
    name: "Vegetable Pizza",
    category: "fast-food",
    price: 420,
    rating: 4.3,
    image: "/images/veg-pizza.png",
    description: "Cheesy pizza topped with fresh vegetables",
  },
  {
    id: 4,
    name: "Fried Rice",
    category: "main-dish",
    price: 160,
    rating: 4.2,
    image: "/images/fried-rice.png",
    description: "Classic fried rice with eggs and vegetables",
  },
  {
    id: 5,
    name: "Chicken Curry",
    category: "main-dish",
    price: 200,
    rating: 4.6,
    image: "/images/chicken-curry.png",
    description: "Traditional chicken curry with rich spices",
  },
  {
    id: 6,
    name: "French Fries",
    category: "snacks",
    price: 120,
    rating: 4.1,
    image: "/images/french-fries.png",
    description: "Crispy golden french fries",
  },
  {
    id: 7,
    name: "Grilled Chicken",
    category: "healthy",
    price: 300,
    rating: 4.8,
    image: "/images/grilled-chicken.png",
    description: "Healthy grilled chicken with herbs",
  },
  {
    id: 8,
    name: "Pasta Alfredo",
    category: "italian",
    price: 350,
    rating: 4.4,
    image: "/images/pasta.png",
    description: "Creamy Alfredo pasta with cheese",
  },
  {
    id: 9,
    name: "Vegetable Salad",
    category: "healthy",
    price: 140,
    rating: 4.0,
    image: "/images/salad.png",
    description: "Fresh vegetable salad with olive oil dressing",
  },
  {
    id: 10,
    name: "Chocolate Cake",
    category: "dessert",
    price: 220,
    rating: 4.9,
    image: "/images/chocolate-cake.png",
    description: "Soft and rich chocolate cake",
  },
];

const categories = [
  {
    id: 11,
    name: "All",
    slug: "all",
  },
  {
    id: 12,
    name: "Main Dish",
    slug: "main-dish",
  },
  {
    id: 13,
    name: "Fast Food",
    slug: "fast-food",
  },
  {
    id: 14,
    name: "Snacks",
    slug: "snacks",
  },
  {
    id: 15,
    name: "Healthy",
    slug: "healthy",
  },
  {
    id: 16,
    name: "Italian",
    slug: "italian",
  },
  {
    id: 17,
    name: "Dessert",
    slug: "dessert",
  },
  {
    id: 18,
    name: "Drinks",
    slug: "drinks",
  },
];

const Foods = () => {
  const [current, setCurrent] = useState("all");

  const filterFood = useMemo(() => {
    if (current === "all") return foodMenu;
    return foodMenu.filter((food) => food.category === current);
  }, [current]);

  return (
    <div>
      <h2 className="hidden md:block text-3xl font-bold text-primary my-5">
        Top <span className="text-secondary">Categories</span>
      </h2>
      <div className="hidden md:flex items-center justify-between">
        {categories.map((category) => (
          <Button
            key={category.id}
            onClick={() => setCurrent(category.slug)}
            className={`
            px-10 rounded-md border-none shadow-none
            ${
              category.slug === current
                ? "bg-primary text-white"
                : "bg-white text-black"
            }
          `}
          >
            {category.name}
          </Button>
        ))}
      </div>
      <h2 className="text-3xl font-bold text-primary mt-10 my-5">
        Todays <span className="text-secondary">Menu</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {filterFood.map((menu) => (
          <MenuCard key={menu.id} menu={menu} />
        ))}
      </div>
    </div>
  );
};

export default Foods;
