import './Header.css';
import logo from '../../resources/images/invoicemang_icon.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="container-lg">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="header-container container-fluid">
                    <a href="#" className="navbar-brand d-flex align-items-center">
                        <img id="logo" src={logo} alt="logo" width="40" height="40" className="d-inline-block" />
                        <h3 className="m-0">InvoiceMang</h3>
                    </a>
                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/login">
                                    <a className="nav-link" aria-current="page" href="#">LOGIN</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/signup">
                                    <a className="nav-link" href="#">SIGN UP</a>
                                </Link>
                            </li>
                        </ul>
                    </div> */}
                </div>
            </nav>
        </div>
    );
}

export default Header;