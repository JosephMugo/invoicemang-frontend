import './Dashboard.css';
import logo from '../../resources/images/invoicemang_icon.svg';
import LandingDashboardSection from '../../Components/LandingDashboardSection/LandingDashboardSection';
import InvoicesViewDashboardSection from '../../Components/InvoicesViewDashboardSection/InvoicesViewDashboardSection';
import UserDashboardSection from '../../Components/UserDashboardSection/UserDashboardSection';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import SideBar from '../../Components/SideBar/SideBar';


const user = { username: "abc123", position: "customer" }

const Dashboard = () => {
    const [invoices, setInvoices] = useState([
        {
            id: uuidv4(),
            sellerName: "Amazon Web Service",
            sellerAddress: "456 capital dr",
            buyerName: "InvoiceMang",
            buyerAddress: "123 wonder dr",
            date: "7/6/21",
            dueDate: "2/12/24",
            purchases: [
                {
                    description: "web server hosting",
                    quantity: 1,
                    costPerUnit: 5
                },
                {
                    description: "web server troubleshoot",
                    quantity: 5,
                    costPerUnit: 10
                },
                {
                    description: "web server backup",
                    quantity: 1,
                    costPerUnit: 20
                }
            ]
        }
    ]);
    
    // delete invoice from view and database
    const deleteInvoice = (id) => {
        // ask user if they are sure they want to delete invoice
        const isDelete = window.confirm("Are you sure you want to delete?")
        // if user says they don't want to delete then just return without deleting invoice
        if (!isDelete) {
            return;
        }
        // delete invoice
        setInvoices(invoices.filter(invoice => invoice.id !== id))
    }

    const editInvoice = (id) => {
        // TODO: Create edit view completely seperate from invoice view where edit button is 
        alert("editing: "+ id);
    }

    return (
        <div className="dashboard-container">
            <SideBar />
            <div className="content-container bg-dark p-4">
                <InvoicesViewDashboardSection invoices={invoices} deleteInvoice={deleteInvoice} editInvoice={editInvoice} setInvoices={setInvoices} />
                {/* <UserDashboardSection {...user}/> */}
            </div>
        </div>
    );
}

export default Dashboard;