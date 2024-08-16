

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

    if (!drink) {
      return Response.error();
    }

    return Response.json(drink);
  } catch (error) {
    console.error('Error fetching data:', error);
    return Response.json({ error: 'Could not get drink' }, { status: 500 });
  }
}