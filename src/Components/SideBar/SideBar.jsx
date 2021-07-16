import logo from '../../resources/images/invoicemang_icon.svg';

const SideBar = () => {
    return (
        <div className="sidebar-container d-flex flex-column flex-shrink-0 bg-light" style={{ width: "4.5rem" }}>
                <div>
                    <a href="#" className="nav-link py-3 border-bottom" aria-current="page" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
                        <img src={logo} alt="logo" />
                    </a>
                </div>
                {/* TODO: Make sidebar a seperate component */}
                <ul className="nav nav-pills nav-flush flex-column text-center justify-content-between py-5">
                    <div>
                        <li className="nav-item  border-bottom">
                            <button href="#" className="nav-link py-3" aria-current="page" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
                                <i className="fas fa-home active" role="img" aria-label="Home"></i>
                            </button>
                        </li>
                        <li className="border-bottom">
                            <button href="#" className="nav-link py-3" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Invoices">
                                <i className="fas fa-table" role="img" aria-label="Invoices"></i>
                            </button>
                        </li>
                        <li className="border-bottom">
                            <button href="#" className="nav-link py-3" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="user">
                                <i className="fas fa-user" role="img" aria-label="user"></i>
                            </button>
                        </li>
                        <li className="border-bottom">
                            <button href="#" className="nav-link py-3" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="logout">
                                <i id="logout" className="fas fa-sign-out-alt" role="img" aria-label="logout"></i>
                            </button>
                        </li>
                    </div>
                </ul>
            </div>
    )
}

export default SideBar;