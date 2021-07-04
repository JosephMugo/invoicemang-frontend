import './Header.css';
import logo from '../../resources/images/invoicemang_icon.svg';

const Header = () => {
    return (
        <div className="container-lg">
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <a href="#" className="navbar-brand">
                        <img id="logo" src={logo} alt="logo" width="40" height="40" className="d-inline-block" />
                        InvoiceMang
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">LOGIN</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">SIGN UP</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;