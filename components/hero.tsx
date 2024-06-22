import { DrinkNames } from "./drink-names";
import { SearchandFilter } from "./search-and-filters";
import { Skeleton } from "./ui/skeleton";
import Image from "next/image";

export function Herosection(){

return (
    <>
    <div className="w-full h-[350px] relative flex flex-col place-items-center justify-center  rounded-lg">
        <div className="flex-col w-full place-items-center justify-items-center">
        {/* <Skeleton className="w-full h-full rounded-2xl"/> */}
        <DrinkNames/>
        <SearchandFilter/>
        </div>
    </div>


    </>
)
}