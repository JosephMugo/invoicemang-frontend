import './Dashboard.css';
import logo from '../../resources/images/invoicemang_icon.svg';
import LandingDashboardSection from '../../Components/LandingDashboardSection/LandingDashboardSection';
import InvoicesViewDashboardSection from '../../Components/InvoicesViewDashboardSection/InvoicesViewDashboardSection';
import UserDashboardSection from '../../Components/UserDashboardSection/UserDashboardSection';
import { useState } from 'react';
import SideBar from '../../Components/SideBar/SideBar';

const user = { username: "abc123", position: "customer" }

const Dashboard = () => {
    const [invoices, setInvoices] = useState([
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
                <InvoicesViewDashboardSection invoices={invoices} deleteInvoice={deleteInvoice} editInvoice={editInvoice} />
                {/* <UserDashboardSection {...user}/> */}
            </div>
        </div>
    );
}

export default Dashboard;