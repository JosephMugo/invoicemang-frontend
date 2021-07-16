import './EditInvoiceView.css';

const EditInvoiceView = ({ invoice }) => {
    return (
        <div className="invoiceadd-section">
            <form className="card p-3 p-lg-4 mt-4" style={{ width: "100%" }} onSubmit={formik.handleSubmit}>
                <div className="row">
                    <div className="buyer-section col-12 col-lg-6 col-md-6">
                        <h4 className="my-4">Buyer</h4>
                        <div className="form-floating mb-4">
                            <input
                                id="buyerName"
                                className="form-control"
                                name="buyerName"
                                type="buyerName"
                            />
                            <label htmlFor="floatingInput">Name</label>
                            <div className="invalid-feedback">
                            </div>
                        </div>
                        <div className="form-floating mb-4">
                            <input 
                                id="buyerAddress"
                                className="form-control"
                                name="buyerAddress" 
                                type="buyerAddress" 
                            />
                            <label htmlFor="floatingInput">Address</label>
                            <div className="invalid-feedback">
                            </div>
                        </div>
                        <div className="form-floating mb-4">
                            <input 
                                id="buyerPhoneNumber"
                                className="form-control"
                                name="buyerPhoneNumber" 
                                type="buyerPhoneNumber"
                            />
                            <label htmlFor="floatingInput">Phone Number</label>
                        </div>
                    </div>
                    <div className="seller-section col-12 col-lg-6 col-md-6">
                        <h4 className="my-4">Seller</h4>
                        <div className="form-floating mb-4">
                            <input 
                                id="sellerName"
                                className="form-control"
                                name="sellerName" 
                                type="text" 
                            />
                            <label htmlFor="floatingInput">Name</label>
                        </div>
                        <div className="form-floating mb-4">
                            <input 
                                id="sellerAddress"
                                className="form-control"
                                name="sellerAddress" 
                                type="text" 
                            />
                            <label htmlFor="floatingInput">Address</label>
                        </div>
                        <div className="form-floating mb-4">
                            <input 
                                id="sellerPhoneNumber"
                                className="form-control"
                                name="sellerPhoneNumber" 
                                type="text" 
                            />
                            <label htmlFor="floatingInput">Phone Number</label>
                        </div>
                    </div>
                </div>
                <h4>Products & Services</h4>
                <button type="button" className="btn btn-success align-self-start px-2 my-2" data-bs-toggle="addModal" onClick={onClickAddProductOrService}>add product or service</button>
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Description</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Cost Per Unit</th>
                                <th scope="col">Total</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        {/* <RowBody productsAndServices={rowsProductsServices} rowsProductsServices={rowsProductsServices} setRowsProductsServices={setRowsProductsServices} formik={formik}/> */}
                    </table>
                </div>
                <button type="submit" className="btn btn-primary align-self-end px-5 mt-3">Add</button>
            </form>
        </div>
    )
}