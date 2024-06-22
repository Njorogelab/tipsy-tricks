import * as fs from 'fs';
import path from 'path';
export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store';


export async function GET(req: Request) {
    console.log('getting drink name')
  const filePath = path.resolve('./lib/drink-names.txt');
  const drinkNames = fs.readFileSync(filePath, 'utf8').split('\r\n');
  console.log("Drink Names",drinkNames)

  const randomIndex = Math.floor(Math.random() * drinkNames.length);
  const randomDrinkName = drinkNames[randomIndex];
  console.log(randomDrinkName)

  const drinkName = JSON.stringify(randomDrinkName)

  const headers = new Headers({
    'Content-Type': 'application/json',
    'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0',
    'Surrogate-Control': 'no-store'
  });
  
  return new Response(drinkName, {headers} )
}
