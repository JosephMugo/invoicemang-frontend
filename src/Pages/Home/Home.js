import Header from "../../Components/Header/Header"
import Hero from "../../Components/Hero/Hero"

const Home = () => {
    return (
        <div className="home-container">
            {/* website heading */}
            <Header />
            {/* hero section */}
            <Hero />
        </div>
    );
}
 
export default Home;