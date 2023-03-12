
import {Metadata} from "next";
import React from "react";
import ContentPageContainer from "@/app/(groupe)/hello/ContentPage";

export const metadata: Metadata = {
    title: 'next test mael',
    description: 'ma première app next'
}

export default function Page() {
    return <ContentPageContainer />;
}
