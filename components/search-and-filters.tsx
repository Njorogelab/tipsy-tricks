import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Award, BellPlus, Heart, Shuffle } from "lucide-react";
import Link from "next/link";

export function SearchandFilter() {
  return (
    <div className="grid w-full gap-3 p-3 justify-items-center">
      <div className="w-1/2">
        <Input type="search" placeholder="Search..." />
      </div>
      <div className="flex gap-3 p-3">
        <Button variant={"secondary"} className="gap-1">
          <Award />
          <p className="hidden md:block">Popular</p>
        </Button>
        <Button variant={"outline"} className="gap-1">
          <BellPlus />
          <p className="hidden md:block">Latest</p>
        </Button>
        <Button variant={"secondary"} className="gap-1">
          <Shuffle />
          <p className="hidden md:block" >Random</p>
        </Button>
        <Link href={'/favourites'}>
        <Button variant={"outline"} className="gap-1">
          <Heart />
          <p className="hidden md:block">Saved</p>
        </Button>
        </Link>
        
      </div>
    </div>
  );
}
