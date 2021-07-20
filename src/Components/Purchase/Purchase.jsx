import './Purchase.css';
import { useState } from 'react';

const Purchase = ({ purchases, purchase, setPurchases, isDisabled }) => {

    const [description, setDescription] = useState(purchase.description);
    const [quantity, setQuantity] = useState(purchase.quantity);
    const [costPerUnit, setCostPerUnit] = useState(purchase.costPerUnit);

    const [inEditMode, setInEditMode] = useState(true);

    // edit input field provided
    const editField = (value, setter) => {
        setter(value);
    }

    // toggle between editing and not editing
    const toggleEdit = () => {
        if (description === "") {
            return;
        }
        if (quantity <= 0) {
            setQuantity(1);
        }
        if (costPerUnit <= 0) {
            setCostPerUnit(1);
        }
        setInEditMode(!inEditMode);
    }

    // update purchases state
    const updateValues = () => {
        const result = purchases.filter(purch => purch.id !== purchase.id);
        setPurchases(
            [
                ...result, 
                { 
                    id: purchase.id,
                    description: description, 
                    quantity: quantity, 
                    costPerUnit: costPerUnit,
                }
            ]
        );
    }

    // delete product
    const deletePurchase = (id) => {
        const result = purchases.filter(purch => purch.id !== purchase.id);
        setPurchases(result);
    }

    return (
        <tr>
            <td>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => editField(e.target.value, setDescription)}
                    disabled={!inEditMode || isDisabled}
                    className={`${description === "" ? "invalid" : ""}`}
                />
            </td>
            <td>
                <input
                    type="number"
                    min={1}
                    value={quantity}
                    onChange={(e) => editField(e.target.value, setQuantity)}
                    disabled={!inEditMode || isDisabled}
                    className={`${quantity === "" ? "invalid" : ""}`}
                />
            </td>
            <td>
                <input
                    type="number"
                    min={1}
                    value={costPerUnit}
                    onChange={(e) => editField(e.target.value, setCostPerUnit)}
                    disabled={!inEditMode || isDisabled}
                    className={`${costPerUnit === "" ? "invalid" : ""}`}
                />
            </td>
            <td>
                <input
                    value={quantity * costPerUnit}
                    disabled
                />
            </td>
            {
                inEditMode 
                    ?
                    // when editing
                    <td><button type="button" className="item-button btn p-0 border-0" onClick={() => { toggleEdit(); updateValues()}}><i className="fa fa-check"></i></button></td>
                    :
                    // when not editing
                    <td><button type="button" className="item-button btn p-0 border-0"><i className="fa fa-edit" onClick={toggleEdit}></i></button></td>
            }
            <td><button className="item-button btn p-0 border-0" ><i className="fa fa-trash" onClick={() => deletePurchase(purchase.id)}></i></button></td>
        </tr>
    );
}

export default Purchase;