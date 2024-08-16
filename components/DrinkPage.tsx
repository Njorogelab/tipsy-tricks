import { FC } from "react";
import { Card } from "./ui/card";
import Image from "next/image";
import TypeIndicator from "./TypeIndicator";
import Link from "next/link";
import { Button } from "./ui/button";

interface DrinkPageProps {
  name: string;
  image: string;
  type: string;
  category: string;
  ingredients: string;
  ingredientsArray: string[];
  glass: string;
  id: string;
  instructions: string[];
}

const DrinkPage: FC<DrinkPageProps> = ({
  name,
  image,
  type,
  category,
  ingredients,
  glass,
  ingredientsArray,
  instructions,
  id,
}) => {
  return (
    <Card className="flex min-h-[100dvh] flex-col bg-background">
      <div className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              {name}
            </h1>
            <div className="flex flex-wrap items-center md:gap-2 sm:text-xs md:text-base">
              <TypeIndicator type={type}></TypeIndicator>
              <p className="hover:text-slate-400">{type}</p>
              <span className="hidden md:block">-</span>
              <p className="hidden md:block hover:text-slate-400">{category}</p>
            </div>
            <p className="pt-3 text-muted-foreground md:text-xl">
              Serving glass: {glass}
            </p>
          </div>
          <Image
            src={image}
            width={500}
            height={300}
            alt={name}
            priority={true}
            className="overflow-hidden border rounded-l"
          />
        </div>
      </div>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-24">
          <div>
            <h2 className="mb-6 text-2xl font-bold">Ingredients</h2>
            <ul className="pl-4 space-y-2 list-disc text-muted-foreground">
              {ingredientsArray.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-2xl font-bold ">Instructions</h2>
            <ol className="pl-4 space-y-4 list-decimal text-muted-foreground">
              {instructions.map((instruction, index) => {
                return <li key={index}>{instruction}</li>;
              })}
            </ol>
          </div>
        </div>
      </section>
    </Card>
  );
};

export default DrinkPage;
