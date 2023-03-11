import {NextResponse} from "next/server";

export async function GET(request: any, context: {params: { id: string }}) {
    const id: string = context.params.id
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: { revalidate: 60 } // Revalidate every 60 seconds
    });
    const data = await res.json();
    console.log(data)
    return NextResponse.json(data)
}
