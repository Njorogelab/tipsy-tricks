"use client";
import { useEffect, useState } from "react";
import DrinkPage from "@/components/DrinkPage";
import { Drink } from "@/lib/class";

interface pageProps {
  slug: string;
}

function Page({ params }: { params: { slug: string } }) {
  const id = params.slug;
  const [drink, setDrink] = useState<Drink>();
  useEffect(() => {
    fetch(`/api/drinkpage/`, {
      method: "POST",
      body: JSON.stringify({ id }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setDrink(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!drink) {
    return <div>No drink data available</div>;
  }

  const ingredients = [];
  const ingredientsArray = [];

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

  console.log(ingredients)

  const separatedInstructions = drink.strInstructions
    .split(". ")
    .map((instruction) => instruction.trim())
    .filter(Boolean);

  return (
    <>
      <DrinkPage
        name={drink.strDrink}
        image={drink.strDrinkThumb}
        type={drink.strAlcoholic}
        category={drink.strCategory}
        ingredients={ingredients.join(', ')}
        ingredientsArray={ingredientsArray}
        glass={drink.strGlass}
        id={drink.idDrink}
        instructions={separatedInstructions}
      />
    </>
  );
}

export default Page;
