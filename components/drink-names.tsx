'use client'
import { useState, useEffect } from 'react';

export function DrinkNames() {
  const [drinkName, setDrinkName] = useState<string>();

  useEffect(() => {
    async function fetchDrinkName() {
      try {
        const response = await fetch(`/api/drinkname?timestamp=${new Date().getTime()}`, {cache: 'no-store'});
        const data = await response.json();
        console.log(data)
        setDrinkName(data);
      } catch (error) {
        console.error('Error fetching random drink name:', error);
      }
    }

    fetchDrinkName();
  }, []);

  return (
    <div className="items-center block w-full">
      <p className="text-3xl font-extrabold text-center md:text-5xl lg:text-7xl">
        {drinkName || 'Loading...'}
      </p>
    </div>
  );
}
