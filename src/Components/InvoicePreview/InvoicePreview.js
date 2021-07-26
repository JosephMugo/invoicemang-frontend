import { string } from 'yup';
import './InvoicePreview.css';

const InvoicePreview = ({ invoice, deleteInvoice, editInvoice }) => {
    const capitalizeFirstLetter = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    const dateConvert = (date) => {
        return date.substring(0, 10);
    }

    return (
        <div className="invoice-preview-container card mt-4 p-2 p-lg-4">
            <div className="invoice-header-container d-flex justify-content-between">
                <div>
                    <h5>{invoice.sellerName}</h5>
                    <p>{invoice.sellerAddress}</p>
                </div>
                <p className="d-none d-md-block">{invoice.id}</p>
            </div>
            <div className="invoice-body-container d-flex flex-column flex-md-row justify-content-between my-3">
                <div >
                    <h6>Bill To :</h6>
                    <p>{`${invoice.buyerName}`}</p>
                </div>
                <div >
                    <h6>Ship To :</h6>
                    <p>{invoice.buyerAddress}</p>
                </div>
                <div >
                    <div className="d-flex justify-content-between">
                        <h6 className="mb-0 pb-0">Invoice Date</h6>
                        <p className="mb-1 ps-3">{dateConvert(invoice.date)}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h6 className="mb-0 pb-0">Due Date</h6>
                        <p className="mb-1 ps-3">{dateConvert(invoice.dueDate)}</p>
                    </div>
                </div>
            </div>
            <div className="table-responsive">
                <table className="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Description</th>
                            <th scope="col" id="quantity">Quantity</th>
                            <th scope="col" id="costPerUnit">Cost Per Unit</th>
                            <th scope="col" id="total">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            invoice.purchases.map((purchase) => (
                                <tr key={purchase.description}>
                                    <td>{capitalizeFirstLetter(purchase.description)}</td>
                                    <td id="quantityValue">{purchase.quantity}</td>
                                    <td id="costPerUnitValue">${purchase.costPerUnit}</td>
                                    <td id="totalValue">${(purchase.quantity * purchase.costPerUnit)}</td>
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