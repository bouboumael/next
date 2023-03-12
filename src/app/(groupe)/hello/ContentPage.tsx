'use client'

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { User } from "@prisma/client";

type Placeholder = {
    body: string;
    id: number;
    title: string;
    userId: number;
}

interface Props {
    user: User | undefined;
    placeholders: Placeholder[] | undefined;
}

const ContentPage: React.FC<Props> = ({ user, placeholders }) => {
    return (
        <>
            <Link href="/">Accueil</Link>
            <br />
            {user?.name ? (
                <>
                    <h1>Hello, {user?.name}</h1>
                    <p>Voici la liste des placeholders</p>
                    <br />
                    <ul>
                        {placeholders?.map((placeholder: Placeholder) => {
                            return (
                                <li key={placeholder.id}>
                                    <Link href={`hello/${placeholder.id}`}>
                                        <h3>{placeholder.title}</h3>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
};

const useFetchData = () => {
    const [data, setData] = useState<Props>({
        user: undefined,
        placeholders: undefined,
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userRes = await fetch("/api/users/1");
                const user = await userRes.json();

                const placeholdersRes = await fetch(
                    "https://jsonplaceholder.typicode.com/posts"
                );
                const placeholders = await placeholdersRes.json();

                setData({ user, placeholders });
            } catch (err) {
                console.error(err);
            }
            setLoading(false);
        };

        fetchData();
    }, []);

    return { ...data, loading };
};

const ContentPageContainer: React.FC = () => {
    const { user, placeholders, loading } = useFetchData();

    return loading ? (
        <p>Loading...</p>
    ) : (
        <ContentPage user={user} placeholders={placeholders} />
    );
};

export default ContentPageContainer;
