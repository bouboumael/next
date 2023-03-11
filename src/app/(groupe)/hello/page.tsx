'use client';

import Link from "next/link";
import {useEffect, useState} from "react";

export default function Page() {

    const [api, setApi] = useState()

    const fetchData = async() =>{
        const data = await fetch('/api/hello')
        const json = await data.json();
        setApi(json)
    }

    useEffect(()=>{
        fetchData()
    },[])

    useEffect(()=>{
        console.log(api)
    },[api])

    return (
        <>
            <Link href="/">
                Accueil
            </Link>
            <h1>Hello, Maël 2</h1>
        </>
    );
}
