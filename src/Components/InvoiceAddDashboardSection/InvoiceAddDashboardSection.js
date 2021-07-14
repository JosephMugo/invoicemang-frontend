import './InvoiceAddDashboardSection.css';
import { useState } from 'react';
import RowBody from '../RowBody/RowBody';
import { v4 as uuidv4 } from 'uuid';

const InvoiceAddDashboardSection = () => {

    // let rowsProductsServices = [
    //     {
    //         description: "web server hosting",
    //         quantity: 1,
    //         costPerUnit: 50000,
    //         total: 50000
    //     },
    //     {
    //         description: "web server troubleshoot",
    //         quantity: 1,
    //         costPerUnit: 10000,
    //         total: 10000
    //     }
    // ]

    const [rowsProductsServices, setRowsProductsServices] = useState([
        {
            id: uuidv4(),
            description: "web server hosting",
            quantity: 1,
            costPerUnit: 50000,
            total: 50000
        },
        {
            id: uuidv4(),
            description: "web server troubleshoot",
            quantity: 1,
            costPerUnit: 10000,
            total: 10000
        }
    ])

    const onClickAddProductOrService = () => {
        // const table = document.getElementById("productsAndServicesTable");
        setRowsProductsServices([...rowsProductsServices, {
            id: uuidv4(),
            description: "",
            quantity: "",
            costPerUnit: "",
            total: ""
        }]);
    }
    return (
        <div className="invoiceadd-section">
            <form className="card p-3 p-lg-4 mt-5" style={{width: "100%"}}>
                <div className="row">
                    <div className="buyer-section col-12 col-lg-6 col-md-6">
                        <h4 className="my-4">Buyer</h4>
                        <div className="form-floating mb-4">
                            <input name="buyer" type="text" className="form-control" />
                            <label htmlFor="floatingInput">Name</label>
                        </div>
                        <div className="form-floating mb-4">
                            <input name="buyerAddress" type="text" className="form-control" />
                            <label htmlFor="floatingInput">Address</label>
                        </div>
                        <div className="form-floating mb-4">
                            <input name="buyerPhoneNumber" type="text" className="form-control" />
                            <label htmlFor="floatingInput">Phone Number</label>
                        </div>
                    </div>
                    <div className="seller-section col-12 col-lg-6 col-md-6">
                        <h4 className="my-4">Seller</h4>
                        <div className="form-floating mb-4">
                            <input name="seller" type="text" className="form-control" />
                            <label htmlFor="floatingInput">Name</label>
                        </div>
                        <div className="form-floating mb-4">
                            <input name="sellerAddress" type="text" className="form-control" />
                            <label htmlFor="floatingInput">Address</label>
                        </div>
                        <div className="form-floating mb-4">
                            <input name="sellerPhoneNumber" type="text" className="form-control" />
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
                        <RowBody productsAndServices={rowsProductsServices} rowsProductsServices={rowsProductsServices} setRowsProductsServices={setRowsProductsServices}/>
                    </table>
                </div>
                <button type="button" className="btn btn-primary align-self-end px-5 mt-3">Add</button>
            </form>
        </div>
    );
}
 
export default InvoiceAddDashboardSection;