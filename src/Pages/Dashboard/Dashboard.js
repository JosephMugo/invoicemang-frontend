import './Dashboard.css';
import logo from '../../resources/images/invoicemang_icon.svg';
import LandingDashboardSection from '../../Components/LandingDashboardSection/LandingDashboardSection';
import InvoicesViewDashboardSection from '../../Components/InvoicesViewDashboardSection/InvoicesViewDashboardSection';
import UserDashboardSection from '../../Components/UserDashboardSection/UserDashboardSection';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import SideBar from '../../Components/SideBar/SideBar';
import { Switch, useRouteMatch, Route } from 'react-router-dom';


const user = { username: "abc123", position: "customer" }
const pageState = {
    DASHBOARD: "DASHBOARD_VIEW", 
    USER: "USER_VIEW" 
}

const Dashboard = () => {
    const [page, setPage] = useState(pageState.USER);
    let match = useRouteMatch();

    const [invoices, setInvoices] = useState([]);

    const getInvoices = () => {
        fetch("http://localhost:8080/invoices")
        .then(response => response.json())
        .then(data => setInvoices(data))
        .catch((error) => alert(error));
    }

    // fetch invoice on dashboard visit
    useEffect(() => {
        getInvoices();
    }, []);


    
    // delete invoice from view and database
    const deleteInvoice = (id) => {
        // ask user if they are sure they want to delete invoice
        const isDelete = window.confirm("Are you sure you want to delete?")
        // if user says they don't want to delete then just return without deleting invoice
        if (!isDelete) {
            return;
        }
        // delete invoice
        fetch(`http://localhost:8080/invoices/${id}`, {
            method: "DELETE"
        }).then(() => getInvoices())
        .catch((error) => alert(error));
        
    }

    return (
        <div className="dashboard-container">
            <SideBar page={page} match={match} />
            <div className="content-container bg-dark p-4">
                <Switch>
                    <Route path={`${match.path}/view`}>
                        <InvoicesViewDashboardSection invoices={invoices} deleteInvoice={deleteInvoice} setInvoices={setInvoices} setPage={setPage} getInvoices={getInvoices}/>
                    </Route>
                    {/* <UserDashboardSection {...user} setPage={setPage}/> */}
                </Switch>
            </div>
        </div>
    );
}

export default Dashboard;