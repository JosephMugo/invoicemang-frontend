import './InvoiceView.css';

const InvoiceView = ({ invoice }) => {
    return (
        <div className="card mt-5 p-4">
            <h4>{`Invoice #${invoice.id}`}</h4>
            <p className="text-secondary">{invoice.date}</p>
            <div className="invoiceBuyerClient-container d-flex justify-content-between">
                <div className="">
                    <b><p>Buyer: {invoice.buyer}</p></b>
                    <p className="text-secondary">Addresss: {invoice.buyerAddress}</p>
                    <p className="text-secondary">Phone Number: {invoice.buyerPhoneNumber}</p>
                </div>
                <div className="">
                    <b><p>Seller: {invoice.seller}</p></b>
                    <p className="text-secondary">Address: {invoice.sellerAddress}</p>
                    <p className="text-secondary">Phone Number: {invoice.sellerPhoneNumber}</p>
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
            <button className="btn bg-warning text-white align-self-end">Delete</button>
        </div>
    );
}

export default InvoiceView;