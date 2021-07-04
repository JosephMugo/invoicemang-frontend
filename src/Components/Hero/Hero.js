import './Hero.css';

const Hero = () => {
    return (
        <div class="hero-container">
            <div className="container-lg">
                <div class="py-5">
                    <h1 class="display-6 fw-bold text-white text-wrap">Taking the pain out of invoice management.</h1>
                </div>
                <button type="button" class="btn btn-primary btn-lg px-4 me-md-2 fw-bold">SIGN UP</button>
            </div>
        </div>
    );
}

export default Hero;