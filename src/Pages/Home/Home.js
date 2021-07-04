import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero/Hero";
import InfoSection from "../../Components/InfoSection/InfoSection";
import accessImg from 'C:/Users/Joseph/Desktop/Accelerated IT Program/proj/invoicemang-frontend/src/resources/images/world.svg';
import backupImg from 'C:/Users/Joseph/Desktop/Accelerated IT Program/proj/invoicemang-frontend/src/resources/images/cloud.svg';
import securityImg from 'C:/Users/Joseph/Desktop/Accelerated IT Program/proj/invoicemang-frontend/src/resources/images/lock.svg';

const data = [
    {
        topic: "Access",
        body: "24/7 access to all invoices no matter where you are located",
        img: accessImg
    },
    {
        topic: "Backup",
        body: "You data is backed up in order to prevent data lost. Ensuring that your companies invoices never are lost and are quick to recover.",
        img: backupImg
    },
    {
        topic: "Security",
        body: "We value your trust in our business and in order to maintaine that trust we ensure your data is only accessable to you.",
        img: securityImg
    }
]

const Home = () => {
    let amountRendered = 0;
    return (
        <div className="home-container">
            {/* website heading */}
            <Header />
            {/* hero section */}
            <Hero />
            {/* Info Section */}
            {
                data.map((info) => {
                    amountRendered++;
                    return (<InfoSection key={info.topic} {...info} even={amountRendered % 2} />)
                })
            }
        </div>
    );
}
 
export default Home;