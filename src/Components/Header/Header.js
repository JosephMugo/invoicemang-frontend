import './Header.css';
import logo from '../../resources/images/invoicemang_icon.svg';

const Header = () => {
    return (
        <div className="container-lg">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="header-container container-fluid">
                    <a href="#" className="navbar-brand d-flex align-items-center">
                        <img id="logo" src={logo} alt="logo" width="40" height="40" className="d-inline-block" />
                        <h3 className="m-0">InvoiceMang</h3>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">LOGIN</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">SIGN UP</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;