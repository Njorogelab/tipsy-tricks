'use client';

import { useEffect, useState } from 'react';

const drinkNames = [
    'Lord of the Drinks',
    'Tequila Mockingbird',
    'Stranger Sips',
    'Harry Pinter and the Order of the Phoenix',
    'Gin of Thrones',
    'The Shots-shank Redemption',
    'The Whiskey of Oz',
    'Booze to the Future',
    'The Gincredibles',
    'The Great Gin-sby',
    'Orange is the New Black Label',
    'Captain Morgan Phillips',
    'Inglourious Blasters',
    'The Bourbon Supremacy',
    'The Drink Knight Rises',
    'The Irishmanhattan',
    'Mai Tai-nic',
    'Alice in Wine-derland',
    'Gindependence Day',
    'Harry Potter and the Half-Pint Prince'
];

export function DrinkNames() {
    const [drinkName, setDrinkName] = useState('');

    useEffect(() => {
        function getRandomDrinkName() {
            const randomIndex = Math.floor(Math.random() * drinkNames.length);
            return drinkNames[randomIndex];
        }

        setDrinkName(getRandomDrinkName());
    }, []);

    return (
        <div className="items-center block w-full">
            <p className="text-3xl font-extrabold text-center md:text-5xl lg:text-7xl">
                {drinkName || "Loading..."}
            </p>
        </div>
    );
}
