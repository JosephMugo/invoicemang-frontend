import './EditInvoiceView.css';
import { useState } from 'react';

import { useFormik } from 'formik';
import * as yup from 'yup';

import PurchaseEditView from '../PurchaseEditView/PurchaseEditView';

const EditInvoiceView = ({ editView, setEditView, invoices, setInvoices }) => {

    // TODO: seperate invoice outside 
    const invoice = invoices.filter(invoice => invoice.id === editView.id)[0];
    const [purchases, setPurchases] = useState(invoice.purchases);

    const dateConvert = (date) => {
        return date.substring(0, 10);
    }

    const updateInvoice = async (data) => {
        await fetch(`http://localhost:8080/invoices/${invoice.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(() => {
            setEditView(false);
        })
        .catch((error) => alert(`Something went wrong: ${error}`));
    }

    const addInvoiceSchema = yup.object({
        sellerAddress: yup
            .string('Enter seller address')
            .required('Seller address is required'),
        buyerAddress: yup
            .string('Enter buyer address')
            .required('Buyer address is required'),
        dueDate: yup
            .string("Enter due date")
            .required("Due date is required")
    });

    const formik = useFormik({
        initialValues: {
            sellerName: invoice.sellerName,
            sellerAddress: invoice.sellerAddress,
            buyerName: invoice.buyerName,
            buyerAddress: invoice.buyerAddress,
            id: invoice.id,
            date: dateConvert(invoice.date),
            dueDate: dateConvert(invoice.dueDate)
        },
        validationSchema: addInvoiceSchema,
        onSubmit: (data) => {
            const sellerName = data.sellerName;
            const sellerAddress = data.sellerAddress;
            const buyerName = data.buyerName;
            const buyerAddress = data.buyerAddress;
            const date = data.date;
            const dueDate = data.dueDate;
            
            const submitData = {
                sellerName: sellerName,
                sellerAddress: sellerAddress,
                buyerName: buyerName,
                buyerAddress: buyerAddress,
                date: date,
                dueDate: dueDate
            }
            updateInvoice(submitData);
        }
    });

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
                                className={`form-control`}
                                name="date"
                                type="date"
                                value={formik.values.date}
                                disabled
                            />
                            <label htmlFor="floatingInput">Created</label>
                        </div>
                        {/* Invoice Due Date */}
                        <div className="form-floating mb-4">
                            <input
                                id="dueDate"
                                className={`form-control`}
                                name="dueDate"
                                type="date"
                                onChange={formik.handleChange}
                                value={formik.values.dueDate}
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
                                className={`form-control`}
                                value={formik.values.sellerName}
                                onBlur={formik.handleBlur}
                                disabled
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
                                className={`form-control`}
                                value={formik.values.buyerName}
                                onBlur={formik.handleBlur}
                                disabled
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
                {/* <button type="button" className="btn btn-success align-self-start px-2 my-2" data-bs-toggle="addModal" onClick={addPurchase} >add product or service</button> */}
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
                                purchases.map((purchase) => (
                                    <PurchaseEditView key={purchase.id} purchase={purchase} />
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <button type="submit" className={`btn btn-primary align-self-end px-5 mt-3 `}>Update</button>
            </form>
        </div>
    );
}

export default EditInvoiceView;