import './InvoicesViewDashboardSection.css';
import InvoicePreview from '../InvoicePreview/InvoicePreview';
import { useState } from 'react';
import InvoiceAddDashboardSection from '../InvoiceAddDashboardSection/InvoiceAddDashboardSection';

const InvoicesViewDashboardSection = ({ invoices, deleteInvoice, editInvoice }) => {

    const [addView, setAddView] = useState(false);
    const [editView, setEditView] = useState(false);

    // toggle add invoice view & invoice view 
    const addInvoice = () => {
        if (addView) {
            const goBack = window.confirm("Are you sure you want to go back?");
            if (!goBack) {
                return;
            }
        }
        setAddView(!addView);
    }

    // toggle edit invoice view & invoice view 
    const editInvoiceView = (id) => {
        
        setEditView(!editView);
    }

    return (
        <div className="invoiceview-container">
            <h1 className="text-white">{addView ? "Add Invoice" : editView ? "Edit Invoice" : "Invoices"}</h1>
            {/* <button className="btn bg-primary text-white mt-3 px-5" onClick={addInvoice}>{addView ? "Back" : editView ? "Back" : "Add"}</button> */}
            <div className="controls pt-3">
                {
                addView || editView
                ?
                    <button className="btn bg-transparent" onClick={() => { setAddView(false); setEditView(false);}}>
                        <i className="fas fa-arrow-left fs-2 text-secondary text-white"></i>
                    </button>
                :
                ""
                }
                {
                addView || editView
                ? 
                    ""
                :
                    <button className="btn bg-transparent" onClick={() => setAddView(true)}>
                        <i className="fas fa-plus fs-2 text-secondary text-white"></i>
                    </button>
                }
            </div>
            {
            addView 
            ? 
                <InvoiceAddDashboardSection />
            :
                <>
                    {
                        invoices.length !== 0
                        ?
                            invoices.map((invoice) => (
                                <InvoicePreview key={invoice.id} invoice={invoice} deleteInvoice={deleteInvoice} editInvoice={editInvoiceView} />
                            ))
                        :
                            <h5 className="fw-normal text-white text-center p-5">No Invoices</h5>
                    } 
                </>
            }
        </div>
    );
}


export default InvoicesViewDashboardSection;