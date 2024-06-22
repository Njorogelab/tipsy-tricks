import { Balancer } from "react-wrap-balancer";
import * as fs from "fs"




export function DrinkNames() {

    return (
        <>
            <div className="items-center block w-full ">
                 <p className="text-3xl font-extrabold text-center md:text-5xl lg:text-7xl"> {makeArray()} </p> 
            </div>
        </>
    )
}


function makeArray() {
    let randomName = new Array();
    randomName = fs.readFileSync('./lib/drink-names.txt',).toString('utf8').split('\r\n')
    console.log(randomName)
    let RANDOM_NAME_ARRAY_LENGTH = randomName.length
    console.log(RANDOM_NAME_ARRAY_LENGTH)
    let randomNumber = Math.floor(Math.random() * RANDOM_NAME_ARRAY_LENGTH)
    let drinkName = randomName[randomNumber].toString()

    return drinkName
}