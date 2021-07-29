import './Purchase.css';
import { useState } from 'react';

const Purchase = ({ purchase, purchases, setPurchases, isDisabled }) => {

    // delete product
    const deletePurchase = () => {
        const result = purchases.filter(purch => purch.description !== purchase.description);
        setPurchases(result);
    }

    return (
        <tr>
            <td>
                <input
                    type="text"
                    value={purchase.description}
                    disabled
                />
            </td>
            <td>
                <input
                    type="number"
                    min={1}
                    value={purchase.quantity}
                    disabled
                />
            </td>
            <td>
                <input
                    type="number"
                    min={1}
                    value={purchase.costPerUnit}
                    disabled
                />
            </td>
            <td>
                <input
                    value={purchase.quantity * purchase.costPerUnit}
                    disabled
                />
            </td>
            <td><button className="item-button btn p-0 border-0" ><i className="fa fa-trash" onClick={() => deletePurchase()}></i></button></td>
        </tr>
    );
}

export default Purchase;