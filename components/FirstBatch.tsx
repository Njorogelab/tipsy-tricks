"use client";
import { FC, useEffect, useState } from "react";
import DrinkCard from "./DrinkCard";
import { Drink } from "@/lib/class";

const FirstBatch = () => {
  const [drinks, setDrinks] = useState<Drink[]>([]);
  useEffect(() => {
    // Fetch data directly without useState
    fetch("/api/firstbatch")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setDrinks(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  // const fetchDrinks = await fetch(`/api/firstbatch`) 
  // console.log(fetchDrinks)

  return (
    <>
      {drinks.map((drink) => {
        // Filter out null ingredients and measurements
        const ingredients = [];
        for (let i = 1; i <= 15; i++) {
          const ingredient = drink[`strIngredient${i}` as keyof Drink];
          if (ingredient ) {
            ingredients.push(`${ingredient.trim()}`);
          } else if (ingredient) {
            ingredients.push(ingredient.trim());
          }
        }

        return (
          <div key={drink.idDrink} className="flex-1 gap-6 wrap">
            <DrinkCard
              name={drink.strDrink}
              image={drink.strDrinkThumb}
              type={drink.strAlcoholic}
              category={drink.strCategory}
              ingredients={ingredients.join(', ')} // Join ingredients into a string
              glass={drink.strGlass}
            />
          </div>
        );
      })}
    </>
  );
};

export default FirstBatch;
