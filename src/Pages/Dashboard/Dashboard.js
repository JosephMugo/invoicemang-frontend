import './Dashboard.css';
import logo from '../../resources/images/invoicemang_icon.svg';
import LandingDashboardSection from '../../Components/LandingDashboardSection/LandingDashboardSection';
import InvoicesViewDashboardSection from '../../Components/InvoicesViewDashboardSection/InvoicesViewDashboardSection';
import UserDashboardSection from '../../Components/UserDashboardSection/UserDashboardSection';
import InvoiceAddDashboardSection from '../../Components/InvoiceAddDashboardSection/InvoiceAddDashboardSection';

const user = {username: "abc123",position: "customer"}

const invoices = [
    {
        buyer: "InvoiceMang",
        seller: "Amazon Web Service",
        id: "213123",
        date: "7/6/21",
        dueDate: "2/12/24",
        buyerAddress: "123 wonder dr",
        sellerAddress: "456 capital dr",
        buyerPhoneNumber: "(123) 456-7894",
        sellerPhoneNumber: "(321) 234-2344",
        purchase: [
            {
                description: "web server hosting",
                quantity: 1,
                costPerUnit: 50000,
                total: 50000
            },
            {
                description: "web server troubleshoot",
                quantity: 1,
                costPerUnit: 10000,
                total: 10000
            },
            {
                description: "web server backup",
                quantity: 1,
                costPerUnit: 10000,
                total: 10000
            }
        ]
    },
    {
        buyer: "InvoiceMang",
        seller: "Amazon Web Service",
        id: "456456",
        date: "7/6/21",
        dueDate: "2/12/24",
        buyerAddress: "123 wonder dr",
        sellerAddress: "456 capital dr",
        buyerPhoneNumber: "(123) 456-7894",
        sellerPhoneNumber: "(321) 234-2344",
        purchase: [
            {
                description: "web server hosting",
                quantity: 1,
                costPerUnit: 50000,
                total: 50000
            }
        ]
    }
]

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <div className="sidebar-container d-flex flex-column flex-shrink-0 bg-light" style={{width: "4.5rem"}}>
                <div>
                    <a href="#" className="nav-link py-3 border-bottom" aria-current="page" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
                        <img src={logo} alt="logo"/>
                    </a>
                </div>
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
            <div className="content-container bg-dark p-4">
                {/* <InvoiceAddDashboardSection /> */}
                <InvoicesViewDashboardSection invoices={invoices}/>
                {/* <UserDashboardSection {...user}/> */}
            </div>
        </div>
    );
}

export default Dashboard;