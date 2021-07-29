import { Link } from 'react-router-dom';
import logo from '../../resources/images/invoicemang_icon.svg';

const SideBar = ({ page, match }) => {
    return (
        <div className="sidebar-container d-flex flex-column flex-shrink-0 bg-light" style={{ width: "4.5rem" }}>
                <div>
                    <a className="nav-link py-3 border-bottom" aria-current="page" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
                        <img src={logo} alt="logo" />
                    </a>
                </div>
                {/* TODO: Make sidebar a seperate component */}
                <ul className="nav nav-pills nav-flush flex-column text-center justify-content-between py-5">
                    <div>
                        <Link to={`${match.path}/view`}>
                            <li className="border-bottom">
                                <button href="#" className="nav-link py-3" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Invoices">
                                    <i className={`fas fa-table ${(page === "DASHBOARD_VIEW") ? "active" : ""}`} role="img" aria-label="Invoices"></i>
                                </button>
                            </li>
                        </Link>
                        {/* <Link to={`${match.path}/user`}>
                            <li className="border-bottom">
                                <button href="#" className="nav-link py-3" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="user">
                                    <i className={`fas fa-user ${(page === "USER_VIEW") ? "active" : ""}`} role="img" aria-label="user"></i>
                                </button>
                            </li>
                        </Link> */}
                        <Link to="/home">
                            <li className="border-bottom">
                                <button href="#" className="nav-link py-3" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="logout">
                                    <i id="logout" className="fas fa-sign-out-alt" role="img" aria-label="logout"></i>
                                </button>
                            </li>
                        </Link>
                    </div>
                </ul>
            </div>
    )
}

export default SideBar;