import Head from 'next/head';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Image from 'next/image'; // Import the Image component from next/image
import benefitOneImg from '../public/img/benefit-one.png'; // Assuming this path is correct

const Contact = () => {
    return (
        <>
            <Head>
                <title>Contact Page</title>
                <meta name="description" content="Learn more about Nextly" />
            </Head>
            <Navbar />
            <div className="container mx-auto px-4 flex flex-wrap items-start mt-8">
                <main className="w-full lg:w-1/2">
                    <h1 className="text-4xl font-bold mb-16 mt-6">Contact Us</h1>
                    {/* <p>This is a page to contact people...</p> */}
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                            <input type="text" id="firstName" name="firstName" required className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm" />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                            <input type="text" id="lastName" name="lastName" required className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" id="email" name="email" required className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm" />
                        </div>
                        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Submit</button>
                    </form>
                </main>
                <div className="w-full lg:w-1/2 flex justify-center items-center">
                    {/* Image component from Next.js */}
                    <Image src={benefitOneImg} alt="Benefit" />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Contact;
