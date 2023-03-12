import ContentPage from "@/app/(groupe)/hello/ContentPage";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'next test mael',
    description: 'ma première app next'
}

export default function Page() {
    return <ContentPage />;
}
