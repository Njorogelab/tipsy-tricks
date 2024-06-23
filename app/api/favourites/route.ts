export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

export async function POST(req: Request) {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

  try {
    console.log('getting favourites');

    const { savedDrinks } = await req.json(); // Parse the request body

    if (!savedDrinks || !Array.isArray(savedDrinks)) {
      return new Response('Invalid request body', { status: 400 });
    }

    console.log(savedDrinks)
    const fetchPromises = savedDrinks.map(drinkId =>
      fetch(`${url}${drinkId}`).then(response => response.json()).then(data=>data.drinks)
    );

    const drinkDetails = await Promise.all(fetchPromises).then(drinksArray => drinksArray.flat());

    console.log(drinkDetails)
    return new Response(JSON.stringify(drinkDetails), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching data:', error);
    return new Response('Could not get favourites', { status: 500 });
  }
}
