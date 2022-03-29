import './InvoiceAddDashboardSection.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Purchase from '../Purchase/Purchase';
import userService from '../../services/user.service';

const InvoiceAddDashboardSection = ({ invoices, setInvoices, setAddView, getInvoices }) => {

    const [purchases, setPurchases] = useState([]);
    const [purchaseDescription, setPurchaseDescription] = useState('');
    const [purchaseQuantity, setPurchaseQuantity] = useState('');
    const [purchaseCostPerUnit, setPurchaseCostPerUnit] = useState('');

    const addInvoice = async (data) => {
        alert('Adding Invoice');
        userService.addInvoice(data)
        .then(() => {
            getInvoices();
            setAddView(false);
        })
        .catch((error) => alert(`Something went wrong: ${error}`));
    }

    // const addInvoice = async (data) => {
    //     await fetch("http://localhost:8080/invoices", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(data)
    //     })
    //     .then(() => {
    //         getInvoices();
    //         setAddView(false);
    //     })
    //     .catch((error) => alert(`Something went wrong: ${error}`));
    // }

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
                    alert('description');
                    fail = true;
                }
                if (purchase.quantity === undefined || purchase.quantity === "") {
                    alert('quantity');
                    fail = true;
                }
                if (purchase.costPerUnit === undefined || purchase.costPerUnit === "") {
                    alert('cost per unit');
                    fail = true;
                }
            })
            if (fail) {
                alert('failed');
                return;
            }
            data.purchases = purchases;
            // alert(data.purchases);
            addInvoice(data);
        }
    });

    // add purchase 
    const addPurchase = () => {
        if (purchaseDescription === "") {
            alert('Description required');
            return;
        }
        if (purchaseQuantity <= 0) {
            alert('Quantity required');
            setPurchaseQuantity(1);
            return;
        }
        if (purchaseCostPerUnit <= 0) {
            alert('Cost per unit required');
            setPurchaseCostPerUnit(1);
            return;
        }
        let same = false;
        purchases.forEach(purchase => {
            if (purchase.description === purchaseDescription) {
                alert('Can not add the same product/service');
                same = true;
            }
        })
        if (same) {
            return;
        }
        setPurchases(
            [
                ...purchases,
                { 
                    description: purchaseDescription, 
                    quantity: purchaseQuantity, 
                    costPerUnit: purchaseCostPerUnit,
                }
            ]
        );
        setPurchaseDescription('');
        setPurchaseQuantity('');
        setPurchaseCostPerUnit('');
    }

    const getTodaysDate = () => {
        const date = new Date();
        let today = new Date(date.getTime() - (date.getTimezoneOffset() * 60000 ))
                    .toISOString()
                    .split("T")[0];
        return today;
    }

    // edit input field provided
    const editField = (value, setter) => {
        setter(value);
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
                <p id="instructions">please input product/service information then add. (use unique description)</p>
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
                            <tr>
                                <td>
                                    <input 
                                        text="text"
                                        value={purchaseDescription}
                                        onChange={(e) => editField(e.target.value, setPurchaseDescription)}
                                        className={`${purchaseDescription === "" ? "invalid" : ""}`}
                                    />
                                </td>
                                <td>
                                    <input 
                                        type="number"
                                        min={1}
                                        value={purchaseQuantity}
                                        onChange={(e) => editField(e.target.value, setPurchaseQuantity)}
                                        className={`${purchaseQuantity === "" ? "invalid" : ""}`}
                                    />
                                </td>
                                <td>
                                    <input 
                                        type="number"
                                        min={1}
                                        value={purchaseCostPerUnit}
                                        onChange={(e) => editField(e.target.value, setPurchaseCostPerUnit)}
                                        className={`${purchaseCostPerUnit === "" ? "invalid" : ""}`}
                                    />
                                </td>
                                <td>
                                    <input 
                                        value={purchaseQuantity * purchaseCostPerUnit}
                                        disabled
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <button type="button" className="btn btn-success align-self-start px-2 my-2" data-bs-toggle="addModal" onClick={addPurchase} >add product/service</button>
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Description</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Cost Per Unit</th>
                                <th scope="col">Total</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                purchases.map((purchase) => (
                                    <Purchase key={purchase.description} purchase={purchase} purchases={purchases} setPurchases={setPurchases} />
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