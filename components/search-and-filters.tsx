import { Input } from "./ui/input";
import { Button } from "./ui/button";

export function SearchandFilter(){
    return(
        <div className="gap-3 p-3 grid justify-items-center w-full">
        <div className="w-1/2">
            <Input type="search" placeholder="Search..."/>
        </div>
        <div className="flex gap-3 p-3">
            <Button variant={"secondary"}>Popular</Button>
            <Button variant={"outline"}>Latest</Button>
            <Button variant={"secondary"}>Random</Button>
        </div>
        </div>
    )
}