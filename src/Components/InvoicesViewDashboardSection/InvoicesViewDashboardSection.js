import './InvoicesViewDashboardSection.css';
import InvoicePreview from '../InvoicePreview/InvoicePreview';
import { useEffect, useState } from 'react';
import InvoiceAddDashboardSection from '../InvoiceAddDashboardSection/InvoiceAddDashboardSection';
import EditInvoiceView from '../EditInvoiceView/EditInvoiceView';

const InvoicesViewDashboardSection = ({ invoices, deleteInvoice, setInvoices, setPage, getInvoices }) => {

    setPage('DASHBOARD_VIEW');

    const [addView, setAddView] = useState(false);
    const [editView, setEditView] = useState({editing: false, id: null});

    useEffect(() => {
        getInvoices();
    }, [addView, editView])
    
    // return to dashboard view
    const goBack = () => {
        if (addView || editView.editing) {
            const goBack = window.confirm("Are you sure you want to go back?");
            if (!goBack) {
                return;
            }
        }
        setAddView(false); 
        setEditView({
            editing: false,
            id: null
        });
    }

    // toggle edit invoice view & invoice view 
    const editInvoiceView = (id) => {
        setEditView({
            editing: true,
            id: id
        });
    }

    return (
        <div className="invoiceview-container">
            <h1 className="text-white">{addView ? "Add Invoice" : editView.editing ? "Edit Invoice" : "Invoices"}</h1>
            <div className="controls pt-3">
                {
                    // toggle return button
                    addView || editView.editing
                    ?
                        <button className="btn bg-transparent" onClick={goBack}>
                            <i className="fas fa-arrow-left fs-2 text-secondary text-white"></i>
                        </button>
                    :
                        ""
                }
                {
                    // toggle add button
                    addView || editView.editing
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
                        <InvoiceAddDashboardSection invoices={invoices} setInvoices={setInvoices} setAddView={setAddView} getInvoices={getInvoices} />
                    :
                        editView.editing
                        ?
                            <EditInvoiceView editView={editView} setEditView={setEditView} invoices={invoices} setInvoices={setInvoices} />
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