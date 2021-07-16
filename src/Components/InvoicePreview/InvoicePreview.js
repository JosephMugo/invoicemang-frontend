import './InvoicePreview.css';

const InvoicePreview = ({ invoice, deleteInvoice, editInvoice }) => {
    return (
        <div className="invoice-preview-container card mt-4 p-2 p-lg-4">
            <div className="invoice-header-container d-flex justify-content-between">
                <div>
                    <h5>{invoice.seller}</h5>
                    <p>{invoice.sellerAddress}</p>
                </div>
                <h5 className="d-none d-md-block">Invoice</h5>
            </div>
            <div className="invoice-body-container d-flex flex-column flex-md-row justify-content-between my-3">
                <div >
                    <h6>Bill To :</h6>
                    <p>{invoice.buyerAddress}</p>
                </div>
                <div >
                    <h6>Ship To :</h6>
                    <p>{invoice.buyerAddress}</p>
                </div>
                <div >
                    <div className="d-flex justify-content-between">
                        <h6 className="mb-0 pb-0">Invoice #</h6>
                        <p className="mb-1 ps-3">{invoice.id}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h6 className="mb-0 pb-0">Invoice Date</h6>
                        <p className="mb-1 ps-3">{invoice.date}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h6 className="mb-0 pb-0">Due Date</h6>
                        <p className="mb-1 ps-3">{invoice.dueDate}</p>
                    </div>
                </div>
            </div>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Description</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Cost Per Unit</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            invoice.purchase.map((purchase) => (
                                <tr key={purchase.description}>
                                    <th>{purchase.description}</th>
                                    <th>{purchase.quantity}</th>
                                    <th>${purchase.costPerUnit / 1000}</th>
                                    <th>${purchase.total / 1000}</th>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className="d-flex justify-content-end">
                <button className="btn bg-dark text-white align-self-end mt-3" onClick={() => editInvoice(invoice.id)}>Edit</button>
                <button className="btn bg-danger text-white align-self-end mt-3 ms-3" onClick={() => deleteInvoice(invoice.id)}>Delete</button>
            </div>
        </div>
    );
}

export default InvoicePreview;