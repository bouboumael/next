'use client';

import Link from "next/link";
import {useEffect, useState} from "react";

type Placeholder= {
    body: string;
    id: number;
    title: string;
    userId: number
}
export default function ContentPage() {

    const [api, setApi] = useState<Placeholder[]>()

    const fetchData = async() =>{
        const data = await fetch('/api/hello')
        const json = await data.json();
        setApi(json)
    }

    useEffect(()=>{
        fetchData()
    },[])

    return (
        <>
            <Link href="/">
                Accueil
            </Link>
            <br/>
            <h1>Hello, Maël</h1>
            <p>Voici la liste des placeholders</p>
            <br/>
            <ul>
                {
                    api?.map((placeholder: Placeholder) => {
                        return (
                            <li key={placeholder.id}>
                                <Link href={`hello/${placeholder.id}`}>
                                    <h3>{placeholder.title}</h3>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    );
}
