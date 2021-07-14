import './InvoicesViewDashboardSection.css';
import DeleteInvoiceModal from '../Modals/DeleteInvoiceModal/DeleteInvoiceModal';
import InvoiceView from '../InvoiceView/InvoiceView';
import InvoicePreview from '../InvoicePreview/InvoicePreview';
import { useState } from 'react';
import InvoiceAddDashboardSection from '../InvoiceAddDashboardSection/InvoiceAddDashboardSection';

const InvoicesViewDashboardSection = ({ invoices }) => {

    const [addView, setAddView] = useState(false)

    const addInvoice = () => {
        if (addView) {
            const goBack = window.confirm("Are you sure you want to go back?");
            if (!goBack) {
                return;
            }
        }
        setAddView(!addView);
    }

    return (
        <div className="invoiceview-container">
            <h1 className="text-white">{addView ? "Add Invoice" : "Invoices"}</h1>
            <button className="btn bg-primary text-white mt-3 px-5" onClick={addInvoice}>{addView ? "Back" : "Add"}</button>
            {
            addView 
            ? 
                <InvoiceAddDashboardSection />
            :
                <>
                    {invoices.map((invoice) => (
                        <InvoicePreview invoice={invoice}/>
                    ))} 
                </>
            }
            {/* <DeleteInvoiceModal /> */}
        </div>
    );
}


export default InvoicesViewDashboardSection;