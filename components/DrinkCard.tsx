import { FC } from "react";
import { Card } from "./ui/card";
import Image from "next/image";
import TypeIndicator from "./TypeIndicator";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerClose,
  DrawerFooter,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

interface DrinkCardProps {
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

const DrinkCard: FC<DrinkCardProps> = ({
  name,
  image,
  type,
  category,
  ingredients,
  glass,
  ingredientsArray,
  instructions,
}) => {
  return (
    <>
      <Card className="md:w-[600px] h-[200px] grid grid-cols-[200px_auto] content-around col-auto my-4">
        <div className="rounded ">
          <Drawer>
            <DrawerTrigger>
              <Image
                src={image}
                width={200}
                height={200}
                alt={name}
                priority={true}
                className="overflow-hidden border rounded-l"
              />
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader className="hidden">
                <DrawerTitle>Drinks popup</DrawerTitle>
                <DrawerDescription>
                  See list of ingredients and instructions.
                </DrawerDescription>
              </DrawerHeader>
              <main className="flex-1 px-4 py-12 md:py-24 md:px-6">
                <div className="grid max-w-3xl gap-12 mx-auto">
                  <div>
                    <h1 className="mb-4 text-3xl font-bold">{name}</h1>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <img
                          src={image}
                          alt={name}
                          width={600}
                          height={400}
                          className="object-cover rounded-lg"
                        />
                        <div className="pt-3 text-muted-foreground">
                          <p>Serving glass: {glass}</p>
                        </div>
                      </div>

                      <div>
                        <h2 className="mb-4 text-2xl font-bold">Ingredients</h2>
                        <ul className="pl-4 space-y-2 list-disc text-muted-foreground">
                          {ingredientsArray.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                          ))}
                        </ul>
                        <h2 className="mt-8 mb-4 text-2xl font-bold">
                          Instructions
                        </h2>
                        <ol className="pl-4 space-y-2 list-decimal text-muted-foreground">
                          {instructions.map((instruction, index) => (
                            <li key={index}>{instruction}</li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
        <div className="flex flex-col content-around justify-around p-3 truncate text-balance">
          <Drawer>
            <DrawerTrigger className="flex p-0 place-content-start w-fit">
              <p className="font-semibold md:text-3xl hover:text-slate-400 ">
                {name}
              </p>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader className="hidden">
                <DrawerTitle>Drinks popup</DrawerTitle>
                <DrawerDescription>
                  See list of ingredients and instructions.
                </DrawerDescription>
              </DrawerHeader>
              <main className="flex-1 px-4 py-12 md:py-24 md:px-6">
                <div className="grid max-w-3xl gap-12 mx-auto">
                  <div>
                    <h1 className="mb-4 text-3xl font-bold">{name}</h1>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <img
                          src={image}
                          alt={name}
                          width={600}
                          height={400}
                          className="object-cover rounded-lg"
                        />
                        <div className="pt-3 text-muted-foreground">
                          <p>Serving glass: {glass}</p>
                        </div>
                      </div>

                      <div>
                        <h2 className="mb-4 text-2xl font-bold">Ingredients</h2>
                        <ul className="pl-4 space-y-2 list-disc text-muted-foreground">
                          {ingredientsArray.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                          ))}
                        </ul>
                        <h2 className="mt-8 mb-4 text-2xl font-bold">
                          Instructions
                        </h2>
                        <ol className="pl-4 space-y-2 list-decimal text-muted-foreground">
                          {instructions.map((instruction, index) => (
                            <li key={index}>{instruction}</li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>

          <div className="flex flex-wrap items-center md:gap-2 sm:text-xs md:text-base">
            <TypeIndicator type={type}></TypeIndicator>
            <p className="hover:text-slate-400">{type}</p>
            <span className="hidden md:block">-</span>
            <p className="hidden md:block hover:text-slate-400">{category}</p>
          </div>
          <div>
            <p className="font-semibold text-slate-400">Ingredients</p>
            <p className="text-ellipsis sm:truncate line-clamp-1">
              {ingredients}
            </p>
          </div>
          <div>
            <p className="font-semibold text-slate-400">Glass</p>
            <p className="hover:text-slate-400">{glass}</p>
          </div>
        </div>
      </Card>
    </>
  );
};

export default DrinkCard;
