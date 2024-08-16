

export async function POST(req: Request, { params }: { params: { id: string } }) {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';


  try {
    const id = await req.json();
    console.log('Getting drink with ID:', id.id);

    const response = await fetch(`${url}${id.id}`);

    if (!response.ok) {
      throw new Error('Failed to fetch drink data');
    }

    const data = await response.json();
    console.log(data)
    const drink = data.drinks?.[0];
    const drinksjson = JSON.stringify(drink)

    const headers = new Headers({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
      'Surrogate-Control': 'no-store'
    });

    if (!drink) {
      return Response.error();
    }

    return new Response(drinksjson)
  } catch (error) {
    console.error('Error fetching data:', error);
    return Response.error();
  }
}