import React from "react";
import Review from "../Review/Review";
import FoodList from "../FoodCard/FoodList";
import Collapse from "../Collapse/Collapse";
import { FoodSlider } from "../../../components/Home/Menu/Menu";
import Hero from "../../../components/Home/Hero/Hero";
import { CategoriesSection } from "../../../components/Home/Categories/Categories";

const Home = () => {
  return (
    <div>
      <Hero />
      <FoodSlider />
      <CategoriesSection />
      <FoodList />
      <Review />
      <div className="my-10 mb-20 md:mt-30 md:w-3xl mx-auto">
        <h2 className="mb-10 text-xl text-center md:text-3xl font-bold text text-secondary">
          Frequandly Ask Queation
        </h2>
        <Collapse
          question={"How do I register an account in LocalChefBazaar?"}
          answer={
            "To register, go to the Register page and enter your name, email, profile image, password, and confirm password. After submitting, your account will be created, and you can log in to start using the app."
          }
        />
        <Collapse
          question={"How does the product ordering process work?"}
          answer={
            "Browse your favorite foods, add them to the cart, and go to the checkout page. After confirming your order, it will be processed, and you can track its status from your dashboard."
          }
        />
        <Collapse
          question={"How do I update my profile information?"}
          answer={
            "Go to the Profile page after logging in. You can update your name, email, and profile image. Save the changes, and your profile will be updated instantly."
          }
        />
      </div>
    </div>
  );
};

export default Home;
