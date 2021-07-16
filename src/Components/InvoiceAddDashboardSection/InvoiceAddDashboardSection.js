import './InvoiceAddDashboardSection.css';
import { useState } from 'react';
import RowBody from '../RowBody/RowBody';
import { v4 as uuidv4 } from 'uuid';
import { useFormik } from 'formik';
import * as yup from 'yup';

const InvoiceAddDashboardSection = () => {

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
            costPerUnit: 10000
        },
        {
            id: uuidv4(),
            description: "something",
            quantity: 2,
            costPerUnit: 50
        }
    ])

    const validationSchema = yup.object({
        buyerName: yup
            .string('Enter buyer name')
            .min(3, 'Buyer name must be 3 characters long')
            .required('Buyer name is required'),
        buyerAddress: yup
            .string('Enter buyer address')
            .required('Buyer address is required'),
        buyerPhoneNumber: yup
            .string('Enter buyer phone number')
            .required('Buyer phone number is required'),
        sellerName: yup
            .string('Enter seller name')
            .min(3, 'Seller name must be 3 characters long')
            .required('Seller name is required'),
        sellerAddress: yup
            .string('Enter seller address')
            .required('Seller address is required'),
        sellerPhoneNumber: yup
            .string('Enter seller phone number')
            .required('Seller phone number is required')
    });

    const formik = useFormik({
        initialValues: {
            buyerName: '',
            buyerAddress: '',
            buyerPhoneNumber: '',
            sellerName: '',
            sellerAddress: '',
            sellerPhoneNumber: '',
            productsAndServices: rowsProductsServices
        },
        validationSchema: validationSchema,
        onSubmit: (data) => {
            // add invoice
            alert(JSON.stringify(data, null, 2));
        }
    })

    const onClickAddProductOrService = () => {
        // const table = document.getElementById("productsAndServicesTable");
        setRowsProductsServices([...rowsProductsServices, {
            id: uuidv4(),
            description: "",
            quantity: "",
            costPerUnit: ""
        }]);
    }

    return (
        <div className="invoiceadd-section">
            <form className="card p-3 p-lg-4 mt-4" style={{ width: "100%" }} onSubmit={formik.handleSubmit}>
                <div className="row">
                    <div className="buyer-section col-12 col-lg-6 col-md-6">
                        <h4 className="my-4">Buyer</h4>
                        <div className="form-floating mb-4">
                            <input
                                id="buyerName"
                                // className={formik.errors.buyerName ? 
                                //             "form-control is-invalid" : formik.errors.buyerName === undefined && buyerName.innerHTML === "" ? 
                                //                 "form-control is-invalid" : "form-control is-valid"}
                                className="form-control"
                                name="buyerName"
                                type="buyerName"
                                onChange={formik.handleChange}
                                value={formik.values.buyerName}
                            />
                            <label htmlFor="floatingInput">Name</label>
                            <div className="invalid-feedback">
                                {formik.errors.buyerName}
                            </div>
                        </div>
                        <div className="form-floating mb-4">
                            <input 
                                id="buyerAddress"
                                className="form-control"
                                name="buyerAddress" 
                                type="buyerAddress" 
                                onChange={formik.handleChange}
                                value={formik.values.buyerAddress}
                            />
                            <label htmlFor="floatingInput">Address</label>
                            <div className="invalid-feedback">
                                {formik.errors.buyerAddress}
                            </div>
                        </div>
                        <div className="form-floating mb-4">
                            <input 
                                id="buyerPhoneNumber"
                                className="form-control"
                                name="buyerPhoneNumber" 
                                type="buyerPhoneNumber"
                                onChange={formik.handleChange} 
                                value={formik.values.buyerPhoneNumber}
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
                                onChange={formik.handleChange}
                                value={formik.values.sellerName}
                            />
                            <label htmlFor="floatingInput">Name</label>
                        </div>
                        <div className="form-floating mb-4">
                            <input 
                                id="sellerAddress"
                                className="form-control"
                                name="sellerAddress" 
                                type="text" 
                                onChange={formik.handleChange}
                                value={formik.values.sellerAddress}
                            />
                            <label htmlFor="floatingInput">Address</label>
                        </div>
                        <div className="form-floating mb-4">
                            <input 
                                id="sellerPhoneNumber"
                                className="form-control"
                                name="sellerPhoneNumber" 
                                type="text" 
                                onChange={formik.handleChange}
                                value={formik.values.sellerPhoneNumber}
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
                        <RowBody productsAndServices={rowsProductsServices} rowsProductsServices={rowsProductsServices} setRowsProductsServices={setRowsProductsServices} formik={formik}/>
                    </table>
                </div>
                <button type="submit" className="btn btn-primary align-self-end px-5 mt-3">Add</button>
            </form>
        </div>
    );
}

export default InvoiceAddDashboardSection;