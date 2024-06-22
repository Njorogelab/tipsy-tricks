export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store';
export async function GET(res: Request) {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
  const batchCount = 12;
  
  try {
    console.log("Getting first batch");
    
    // Generate an array of promises for parallel fetching
    const fetchPromises = Array.from({ length: batchCount }, () => fetch(url, { cache: 'no-store' })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Fetch error: ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => data.drinks) // Extract drinks array from response
    );

    // Execute all fetches in parallel
    const results = await Promise.all(fetchPromises)
      .then(drinksArrays => drinksArrays.flat()); // Flatten arrays into a single array of drinks

    // console.log(results); // Check the fetched results in console

    const jsonResponse = JSON.stringify(results);
    return new Response(jsonResponse, {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error fetching data:', error);
    return new Response('Could not get first batch', { status: 500 });
  }
}
