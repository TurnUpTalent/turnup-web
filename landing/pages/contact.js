import Head from 'next/head';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Image from 'next/image'; // Import the Image component from next/image
import benefitOneImg from '../public/img/benefit-one.png'; // Assuming this path is correct
import MailchimpSubscribe from "react-mailchimp-subscribe";
import CustomForm from '../components/customForm';

const Contact = () => {

    const mailchimp_u = "e8b674e4ad82cd207a88bca68";
    const mailchimp_id = "49d393297e"
    const postUrl = `https://turnuptalent.us18.list-manage.com/subscribe/post?u=${mailchimp_u}&id=${mailchimp_id}`;

    return (
        <>
            <Head>
                <title>Contact Page</title>
                <meta name="description" content="Learn more about Nextly" />
            </Head>
            <Navbar />
            <div className="container mx-auto px-4 flex flex-wrap items-start mt-8">
                <main className="w-full lg:w-1/2">
                    <h1 className="text-4xl font-bold mb-10 mt-6">Contact Us</h1>
                    {/* <p>This is a page to contact people...</p> */}
                    <MailchimpSubscribe
                        url={postUrl}
                        render={({ subscribe, status, message }) => (
                            <CustomForm
                                status={status}
                                message={message}
                                onValidated={formData => subscribe(formData)}
                            />
                        )}
                    />
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