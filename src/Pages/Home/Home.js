import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero/Hero";
import InfoSection from "../../Components/InfoSection/InfoSection";
import accessImg from 'C:/Users/Joseph/Desktop/Accelerated IT Program/proj/invoicemang-frontend/src/resources/images/world.svg';
import backupImg from 'C:/Users/Joseph/Desktop/Accelerated IT Program/proj/invoicemang-frontend/src/resources/images/cloud.svg';
import securityImg from 'C:/Users/Joseph/Desktop/Accelerated IT Program/proj/invoicemang-frontend/src/resources/images/lock.svg';
import Footer from "../../Components/Footer/Footer";

const data = [
    {
        topic: "Access",
        body: "We provide 24/7 access to all invoices, no matter where you are located.",
        img: accessImg
    },
    {
        topic: "Backup",
        body: "We back up your data in order to prevent data lost. Ensuring that your companies invoices are never lost and are quick to access.",
        img: backupImg
    },
    {
        topic: "Security",
        body: "We value your trust therefore we protect your information like it is ours.",
        img: securityImg
    }
]

const Home = () => {
    let amountRendered = 0;
    return (
        <div className="home-container">
            <Header />
            <Hero />
            {
                data.map((info) => {
                    amountRendered++;
                    return (<InfoSection key={info.topic} {...info} even={amountRendered % 2} />)
                })
            }
            <Footer />
        </div>
    );
}
 
export default Home;