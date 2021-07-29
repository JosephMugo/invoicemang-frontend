import './PurchaseEditView.css';

const PurchaseEditView = ({ purchase }) => {
    return (
        <tr>
            <td>
                <input
                    type="text"
                    value={purchase.description}
                    disabled={true}
                />
            </td>
            <td>
                <input
                    type="number"
                    min={1}
                    value={purchase.quantity}
                    disabled={true}
                />
            </td>
            <td>
                <input
                    type="number"
                    min={1}
                    value={purchase.costPerUnit}
                    disabled={true}
                />
            </td>
            <td>
                <input
                    value={purchase.quantity * purchase.costPerUnit}
                    disabled
                />
            </td>
        </tr>
    );
}

export default PurchaseEditView;