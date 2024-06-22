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
      <Card className="md:w-[600px] h-[200px] grid grid-cols-[200px_auto] content-around col-auto my-4">
        <div className="rounded ">
          <Image
            src={image}
            width={200}
            height={200}
            alt={name}
            priority={true}
            className="overflow-hidden border rounded-l"
          />
        </div>
        <div className="flex flex-col content-around justify-around p-3 truncate text-balance">
          <p className="font-semibold md:text-3xl ">{name}</p>
          <div className="flex flex-wrap items-center md:gap-2 sm:text-xs md:text-base">
            <TypeIndicator type={type}></TypeIndicator>
            <p>{type}</p>
            <p className="hidden md:block">{category}</p>
          </div>
          <div>
            <p className="font-semibold text-slate-400">Ingredients</p>
            <p className="text-ellipsis sm:truncate line-clamp-1">
              {ingredients}
            </p>
          </div>
          <div>
            <p className="font-semibold text-slate-400">Glass</p>
            <p>{glass}</p>
          </div>
        </div>
      </Card>
    </>
  );
};

export default DrinkCard;
