import Head from 'next/head';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const About = () => {
    return (
        <>
            <Head>
                <title>About Us - Nextly</title>
                <meta name="description" content="Learn more about Nextly" />
            </Head>
            <Navbar />
            <main className="container mx-auto px-4">
                <h1 className="text-4xl font-bold my-6">About Us</h1>
                <p>This is a page about us...</p>
            </main>
            <Footer />
        </>
    );
}

export default About;
