"use client";

import DrinkCard from "@/components/DrinkCard";
import { Drink } from "@/lib/class";
import { Main } from "next/document";
import { FC, useEffect, useState } from "react";

const Page = () => {
  const savedDrinksKey = "savedDrinks";
  const [savedDrinks, setSavedDrinks] = useState<string[]>([]);
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const [isStorageEmpty, setIsStorageEmpty] = useState<boolean>(false);

  useEffect(() => {
    const storedDrinks = JSON.parse(
      localStorage.getItem(savedDrinksKey) || "[]"
    );
    if (storedDrinks.length === 0) {
      setIsStorageEmpty(true);
    } else {
      setSavedDrinks(storedDrinks);
      console.log("favourites", storedDrinks);
    }
  }, []);

  useEffect(() => {
    if (savedDrinks.length > 0) {
      fetch("/api/favourites", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ savedDrinks }),
        cache: "no-store",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          return response.json();
        })
        .then((data) => {
          console.log("data", data);
          setDrinks(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [savedDrinks]);

  console.log("drinks", drinks);

  return (
    <>
      {isStorageEmpty ? (
        <p>LocalStorage is empty</p>
      ) : (
        drinks.map((drink) => {
          const ingredients = [];
          const ingredientsArray =[]
          for (let i = 1; i <= 15; i++) {
            const ingredient = drink[`strIngredient${i}` as keyof Drink];
            const measure = drink[`strMeasure${i}` as keyof Drink];
            
            if (ingredient) {
                ingredients.push(ingredient.trim());
                if (measure) {
                  ingredientsArray.push(`${ingredient.trim()} - ${measure.trim()}`);
                } else {
                  ingredientsArray.push(ingredient.trim());
                }
              }
            }

          const separatedInstructions = drink.strInstructions
            .split(". ")
            .map((instruction) => instruction.trim())
            .filter(Boolean);

          return (
            <main className="flex flex-col items-center ">
              <div key={drink.idDrink} className="flex-1 gap-6 wrap">
                <DrinkCard
                  name={drink.strDrink}
                  image={drink.strDrinkThumb}
                  type={drink.strAlcoholic}
                  category={drink.strCategory}
                  ingredients={ingredients.join(", ")}
                  ingredientsArray={ingredientsArray}
                  glass={drink.strGlass}
                  id={drink.idDrink}
                  instructions={separatedInstructions}
                  // instructions={[]}
                />
              </div>
            </main>
          );
        })
      )}
    </>
  );
};

export default Page;
