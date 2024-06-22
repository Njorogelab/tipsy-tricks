import { FC } from "react";
import { Card } from "./ui/card";
import Image from "next/image";
import { Drink } from "@/lib/class";
import TypeIndicator from "./TypeIndicator";

interface DrinkCardProps {
  name: string;
  image: string;
  type: string;
  category: string;
  ingredients: string;
  glass: string;
}

const DrinkCard: FC<DrinkCardProps> = ({
  name,
  image,
  type,
  category,
  ingredients,
  glass,
}) => {
  return (
    <>
      <Card className="md:w-[600px] h-[200px] grid grid-cols-[200px_auto] col-auto my-4">
        <div className="border rounded">
          <Image src={image} width={200} height={200} alt={name} className="border rounded-l"/>
        </div>
        <div className="flex flex-col p-3 text-balance">
          <p className="text-3xl font-semibold ">{name}</p>
          <div className="flex items-center gap-2">
            <TypeIndicator type={type}></TypeIndicator>
            <p>{type}</p>
            <p>{category}</p>
          </div>
          <p className="font-semibold text-slate-400">Ingredients</p>
          <p className="text-ellipsis">{ingredients}</p>
          <p className="font-semibold text-slate-400">Glass</p>
          <p>{glass}</p>
        </div>
      </Card>
    </>
  );
};

export default DrinkCard;
