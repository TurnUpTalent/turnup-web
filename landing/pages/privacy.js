import Head from 'next/head';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Privacy = () => {
    return (
        <>
            <Head>
                <title>Privacy</title>
                <meta name="description" content="Learn more about Nextly" />
            </Head>
            <Navbar />
            <main className="container mx-auto px-4">
                <h1 className="text-4xl font-bold my-6">Privacy</h1>
                <p>We're gonna be super private</p>
            </main>
            <Footer />
        </>
    );
}

export default Privacy;