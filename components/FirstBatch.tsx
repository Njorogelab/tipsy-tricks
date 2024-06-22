"use client";
import { useEffect, useState } from "react";
import DrinkCard from "./DrinkCard";
import { Drink } from "@/lib/class";

const FirstBatch = () => {
  const [drinks, setDrinks] = useState<Drink[]>([]);
  useEffect(() => {
    // Fetch data directly without useState
    fetch("/api/firstbatch", {cache:'no-store'})
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
        const ingredients = [];
        
        for (let i = 1; i <= 15; i++) {
          const ingredient = drink[`strIngredient${i}` as keyof Drink];
          if (ingredient ) {
            ingredients.push(`${ingredient.trim()}`);
          } else if (ingredient) {
            ingredients.push(ingredient.trim());
          }
        }
        
        const separatedInstructions = drink.strInstructions.split('. ').map(instruction => instruction.trim()).filter(Boolean);

        return (
          <div key={drink.idDrink} className="flex-1 gap-6 wrap">
            <DrinkCard
              name={drink.strDrink}
              image={drink.strDrinkThumb}
              type={drink.strAlcoholic}
              category={drink.strCategory}
              ingredients={ingredients.join(', ')} 
              ingredientsArray={ingredients}// Join ingredients into a string
              glass={drink.strGlass}
              id={drink.idDrink}
              instructions={separatedInstructions}
            />
          </div>
        );
      })}
    </>
  );
};

export default FirstBatch;
