import './InvoicesViewDashboardSection.css';
import InvoicePreview from '../InvoicePreview/InvoicePreview';
import { useState } from 'react';
import InvoiceAddDashboardSection from '../InvoiceAddDashboardSection/InvoiceAddDashboardSection';

const InvoicesViewDashboardSection = ({ invoices, deleteInvoice, editInvoice, setInvoices }) => {

    const [addView, setAddView] = useState(false);
    const [editView, setEditView] = useState(false);
    
    const goBack = () => {
        if (addView || editView) {
            const goBack = window.confirm("Are you sure you want to go back?");
            if (!goBack) {
                return;
            }
        }
        setAddView(false); 
        setEditView(false);
    }

    // toggle edit invoice view & invoice view 
    const editInvoiceView = (id) => {
        setEditView(!editView);
    }

    return (
        <div className="invoiceview-container">
            <h1 className="text-white">{addView ? "Add Invoice" : editView ? "Edit Invoice" : "Invoices"}</h1>
            <div className="controls pt-3">
                {
                    // toggle go back button
                    addView || editView
                    ?
                        <button className="btn bg-transparent" onClick={goBack}>
                            <i className="fas fa-arrow-left fs-2 text-secondary text-white"></i>
                        </button>
                    :
                        ""
                }
                {
                    // toggle add button
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
                    // toggle invoice add section
                    addView 
                    ? 
                        <InvoiceAddDashboardSection invoices={invoices} setInvoices={setInvoices} setAddView={setAddView} />
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