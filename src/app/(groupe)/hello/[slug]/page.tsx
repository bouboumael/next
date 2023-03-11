import ContentPage from "./ContentPage";

const Page = ({ params }: { params: { slug: string } }) => {

    return (
        <>
            <ContentPage id={params.slug}/>
        </>
    );
}

export default Page
