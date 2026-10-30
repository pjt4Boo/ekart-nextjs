// request paraams get like api/items?type=all
export  async  function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    console.log(searchParams.get("type")); // all
     const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");    
     const result = await data.json();

  return Response.json(result);
}

export async  function POST(request: Request) {
        const data = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(await request.json())
        });
        const result = await data.json();
        return Response.json(result);
}