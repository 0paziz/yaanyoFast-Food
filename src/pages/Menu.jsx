import React from "react";
import MenuCard from "../Components/MenuCard";

const menuItems = [
  {
    name: "Classic Cheeseburger",
    description: "Grilled beef patty with cheese, lettuce, and tomato",
    image: "./images/cheeseburger.webp",
    price: "12.99",
    rating: "4.9",
  },
    {
    name: "Chicken Shawarma",
    description: "Marinated chicken wrapped in flatbread with veggies",
    image: "./images/shawarma.webp",
    price: "5.99",
    rating: "5.0",
  },


  {
    name: "Crispy French Fries",
    description: "Golden, crispy potato fries with seasoning",
    image: "./images/frenchfries.webp",
    price: "3.00",
    rating: "5.0",
  },
    {
    name: "Grilled Chicken Plate",
    description: "Tender grilled chicken with herbs and spices",
    image: "./images/chicken.webp",
    price: "7.49",
    rating: "4.8",
  },
    {
    name: "Pepperoni Pizza",
    description: "Cheesy pizza topped with spicy pepperoni",
    image: "./images/pizza.webp",
    price: "6.99",
    rating: "5.0",
  },

];


export default function Menu() {
  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-6xl px-4 mx-auto flex flex-col justify-center items-center">
        <p className="pb-2 text-lg text-rose-600 font-semibold">Our Menu</p>
        <h2 className="text-3xl text-center font-serif font-semibold mb-10 text-black">
          Choose Your Best Food
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, index) => (
            <MenuCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
