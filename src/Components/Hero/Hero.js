import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero-container bg-dark">
            <div className="container-lg mobile-space">
                <div className="py-5">
                    <h1 className="display-6 fw-bold text-white text-wrap">Taking the pain out of invoice management.</h1>
                </div>
                <Link to="/login">
                    <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Explore</button>
                </Link>
            </div>
        </div>
    );
}

export default Hero;