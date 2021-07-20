import './InvoiceAddDashboardSection.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Purchase from '../Purchase/Purchase';

const InvoiceAddDashboardSection = ({ invoices, setInvoices, setAddView }) => {

    const [purchases, setPurchases] = useState([])

    const addInvoiceSchema = yup.object({
        sellerName: yup
            .string('Enter seller name')
            .min(3, 'Seller name must be 3 characters long')
            .required('Seller name is required'),
        sellerAddress: yup
            .string('Enter seller address')
            .required('Seller address is required'),
        buyerName: yup
            .string('Enter buyer name')
            .min(3, 'Buyer name must be 3 characters long')
            .required('Buyer name is required'),
        buyerAddress: yup
            .string('Enter buyer address')
            .required('Buyer address is required'),
        date: yup
            .string("Enter invoice date")
            .required("Invoice date is required"),
        dueDate: yup
            .string("Enter due date")
            .required("Due date is required")
    });

    const formik = useFormik({
        initialValues: {
            sellerName: '',
            sellerAddress: '',
            buyerName: '',
            buyerAddress: '',
            id: uuidv4(),
            date: '',
            dueDate: ''
        },
        validationSchema: addInvoiceSchema,
        onSubmit: (data) => {
            // add invoice
            // TODO: Redirect user to invoice view after invoice creation
            // TODO: add invoice to database
            // if their is no purchases then invoice can not be submitted
            if (purchases.length === 0) {
                alert('No purchases given. Invoice cannot be created.');
                return;
            }
            let fail = false;
            purchases.forEach((purchase) => {
                if (purchase.description === undefined || purchase.description === "") {
                    fail = true;
                }
                if (purchase.quantity === undefined || purchase.quantity === "") {
                    fail = true;
                }
                if (purchase.costPerUnit === undefined || purchase.costPerUnit === "") {
                    fail = true;
                }
            })
            if (fail) {
                return;
            }
            data.purchases = purchases;
            console.log(JSON.stringify(invoices.concat(data), null, 2));
            setInvoices(invoices.concat(data));
            setAddView(false);
        }
    });

    // add purchase 
    const addPurchase = () => {
        setPurchases(
            [
                ...purchases,
                { 
                    id: uuidv4(),
                    description: '', 
                    quantity: '', 
                    costPerUnit: '',
                }
            ]
        );
    }

    const getTodaysDate = () => {
        const date = new Date();
        let today = new Date(date.getTime() - (date.getTimezoneOffset() * 60000 ))
                    .toISOString()
                    .split("T")[0];
        return today;
    }

    return (
        <div className="invoiceadd-section">
            <form className="card p-3 p-lg-4 mt-4" noValidate style={{ width: "100%" }} onSubmit={formik.handleSubmit}>
                <div className="row">
                    {/* Invoice Infomation */}
                    <div className="invoiceInfo-section col-12 col-lg-6 col-md-6">
                        <h4 className="my-4">Invoice</h4>
                        {/* Invoice Date */}
                        <div className="form-floating mb-4">
                            <input
                                id="date"
                                className={`form-control ${formik.errors.date && formik.touched.date ? 'invalid-date' : ''}`}
                                name="date"
                                type="date"
                                onChange={formik.handleChange}
                                value={formik.values.date}
                                min={getTodaysDate()}
                            />
                            <label htmlFor="floatingInput">Created</label>
                        </div>
                        {/* Invoice Due Date */}
                        <div className="form-floating mb-4">
                            <input
                                id="dueDate"
                                className={`form-control ${formik.errors.dueDate && formik.touched.dueDate ? 'invalid-date' : ''}`}
                                name="dueDate"
                                type="date"
                                onChange={formik.handleChange}
                                value={formik.values.dueDate}
                                // TODO: implement date that has a min of 1 day from the invoice date
                                min={formik.values.date}
                            />
                            <label htmlFor="floatingInput">Due Date</label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {/* Seller Information */}
                    <div className="seller-section col-12 col-lg-6 col-md-6">
                        <h4 className="my-4">Seller</h4>
                        {/* Seller Name */}
                        <div className="form-floating mb-4">
                            <input
                                id="sellerName"
                                name="sellerName"
                                type="text"
                                className={`form-control ${formik.errors.sellerName && formik.touched.sellerName ? 'is-invalid' : ''}`}
                                value={formik.values.sellerName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            <label htmlFor="floatingInput">Name</label>
                        </div>
                        {/* Seller Address */}
                        <div className="form-floating mb-4">
                            <input
                                id="sellerAddress"
                                name="sellerAddress"
                                type="text"
                                className={`form-control ${formik.errors.sellerAddress && formik.touched.sellerAddress ? 'is-invalid' : ''}`}
                                value={formik.values.sellerAddress}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            <label htmlFor="floatingInput">Address</label>
                        </div>
                    </div>
                    {/* Buyer Information */}
                    <div className="buyer-section col-12 col-lg-6 col-md-6">
                        <h4 className="my-4">Buyer</h4>
                        {/* Buyer Name */}
                        <div className="form-floating mb-4">
                            <input
                                id="buyerName"
                                name="buyerName"
                                type="buyerName"
                                className={`form-control ${formik.errors.buyerName && formik.touched.buyerName ? 'is-invalid' : ''}`}
                                value={formik.values.buyerName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            <label htmlFor="floatingInput">Name</label>
                        </div>
                        {/* Buyer Address */}
                        <div className="form-floating mb-4">
                            <input
                                id="buyerAddress"
                                name="buyerAddress"
                                type="buyerAddress"
                                className={`form-control ${formik.errors.buyerAddress && formik.touched.buyerAddress ? 'is-invalid' : ''}`}
                                value={formik.values.buyerAddress}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            <label htmlFor="floatingInput">Address</label>
                        </div>
                    </div>
                </div>
                <h4>Products & Services</h4>
                <button type="button" className="btn btn-success align-self-start px-2 my-2" data-bs-toggle="addModal" onClick={addPurchase} >add product or service</button>
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
                        <tbody>
                            {
                                purchases.map((purchase) => (
                                    <Purchase key={purchase.id} purchase={purchase} purchases={purchases} setPurchases={setPurchases} />
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <button type="submit" className={`btn btn-primary align-self-end px-5 mt-3 `}>Add</button>
            </form>
        </div>
    );
}

export default InvoiceAddDashboardSection;