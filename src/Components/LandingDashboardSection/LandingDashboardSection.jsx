import './LandingDashboardSection.css';
import InvoicePreview from '../InvoicePreview/InvoicePreview';

const recentInvoices = [
    {
        invoiceNumber: 123, 
        date: "7/6/21", 
        seller: "PayrollMang Corp", 
        buyer: "InvoiceMang"
    },
    {
        invoiceNumber: 563, 
        date: "2/1/21", 
        seller: "HostingMang Corp", 
        buyer: "InvoiceMang"
    },
    {
        invoiceNumber: 654, 
        date: "3/2/21", 
        seller: "RentalMang Corp", 
        buyer: "InvoiceMang"
    }
]

const LandingDashboardSection = () => {
    return (
        <div className="landingdashboard-container">
            <div className="welcome-card card bg-dark text-white">
                    <img src="https://images.pexels.com/photos/3762284/pexels-photo-3762284.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" id="greeting-img" className="card-img"/>
                    <div className="card-img-overlay">
                        <h2 className="card-title">Good Morning Joe!</h2>
                    </div>
                </div>

                <h3 className="text-white mt-4 mb-4">Recent Invoices</h3>
                {
                    /*
                        RECENT INVOICES 
                    */
                    recentInvoices.map((invoice) => (
                        <InvoicePreview key={invoice.invoiceNumber} {...invoice} />
                    ))
                }
        </div>
    );
}
 
export default LandingDashboardSection;