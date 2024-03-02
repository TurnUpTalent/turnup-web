import { useState } from 'react';
import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import Modal from '../components/modal'; // Make sure the path matches where you created your Modal component

const Home = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => setIsModalVisible(true);
    const closeModal = () => setIsModalVisible(false);

    return (
        <>
            <Head>
                <title>Turnup</title>
                <meta
                    name="description"
                    content="TurnUp is a talent management platform that helps companies to retain their best employees and save thousands per year for each employee they have by preventing costly turnovers."
                />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <Navbar onOpen={showModal}/>
            <Hero />
            <div id="product">
                <SectionTitle
                    pretitle="Benefits of TurnUp"
                    title="Save 15% on Hiring Costs">
                    Save thousands per year for each employee you have by preventing costly turnovers and never worry about losing your best employees again
                </SectionTitle>
            </div>

            <div id="features">
                <Benefits data={benefitOne} />
            </div>

            <div className="flex-shrink-0 w-full text-center lg:w-auto">
                <a
                    href="https://turnuptalent.ai/contact"
                    target="_blank"
                    rel="noopener"
                    className="inline-block py-2 mx-auto text-lg font-medium text-center bg-indigo-600 text-white rounded-md px-5 lg:px-8 lg:py-4 ">
                    Learn More
                </a>
            </div>

            <Benefits imgPos="right" data={benefitTwo} />
            {/* <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs">
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>
      <Video /> */}
            {/* <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said">
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials /> */}
            <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
            </SectionTitle>
            <Faq />
            <Cta />
            <Footer />
            <PopupWidget />
            {/* Conditional rendering of Modal */}
            {isModalVisible && (
                <Modal onClose={closeModal}>
                    <p>Here's some content for the modal. Customize as needed.</p>
                </Modal>
            )}
        </>
    );
}

export default Home;