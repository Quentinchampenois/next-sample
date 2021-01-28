import Head from "next/Head";

export default function SHead({ title }) {
    return (
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
                href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
                rel="stylesheet"
            />
        </Head>
    );
}
