'use client';

import Link from "next/link";
import {useEffect, useState} from "react";

type Placeholder= {
    body: string;
    id: number;
    title: string;
    userId: number
}
export default function ContentPage({id}:any) {
    const [api, setApi] = useState<Placeholder>()

    const fetchData = async() =>{
        const data = await fetch(`/api/hello/${id}`)
        const json = await data.json();
        setApi(json)
    }

    useEffect(()=>{
        fetchData()
    })

    return (
        <>
            <h1>{api?.title}</h1>
            <p>{api?.body}</p>
            <br/>
            <Link href="/hello">
                Accueil
            </Link>
        </>
    );
}
