import './Item.css';
import { useState } from "react";

const Item = ({id, description, quantity, costPerUnit, total, rowsProductsServices, setRowsProductsServices}) => {
    // contain state of row
    const [descriptionValue, setDescription] = useState(description);
    const [quantityValue, setQuantity] = useState(quantity);
    const [costPerUnitValue, setCostPerUnit] = useState(costPerUnit);
    const [totalValue, setTotal] = useState(total);

    // Check if empty and if so make editable
    const [isEditing, setIsEditing] = useState(description === "");

    const handleValueChange = (property, value) => {
        switch(property) {
            case "descriptionValue":
                setDescription(value);
                break;
            case "quantityValue":
                setQuantity(value);
                break;
            case "costPerUnitValue":
                setCostPerUnit(value);
                break;
            case "totalValue":
                setTotal(quantityValue * costPerUnitValue);
                break;
            default:
                break;
        }

    }

    const handleEditChange = (e) => {
        e.preventDefault();
        if (descriptionValue === "" || quantityValue === "" || costPerUnitValue === "") {
            return;
        }
        setIsEditing(!isEditing);
    }

    const handleDelete = (e, id) => {
        e.preventDefault();
        let newRowsProductsServices = rowsProductsServices.filter((item) => {
            return item.id !== id;
        });
        setRowsProductsServices(newRowsProductsServices)
    }

    return (
        <tr>
            <th><input min="0" disabled={!isEditing} type="text" value={descriptionValue} onChange={(e) => { handleValueChange("descriptionValue", e.target.value) }} /></th>
            <th><input min="0" disabled={!isEditing} type="number" value={quantityValue} onChange={(e) => { handleValueChange("quantityValue", e.target.value) }} /></th>
            <th><input min="0" disabled={!isEditing} type="number" value={costPerUnitValue} onChange={(e) => { handleValueChange("costPerUnitValue", e.target.value) }} /></th>
            <th><input min="0" disabled={true} type="number" value={quantityValue * costPerUnitValue} onChange={(e) => { handleValueChange("totalValue", e.target.value) }} /></th>
            {/* change between (fa-edit) & (fa-check) based on current state of row */}
            { isEditing ?  <th><button className="item-button btn p-0 border-0" onClick={handleEditChange}><i className="fa fa-check"></i></button></th> :  <th><button className="item-button btn p-0 border-0" onClick={handleEditChange}><i className="fa fa-edit"></i></button></th>}
            <th><button className="item-button btn p-0 border-0" onClick={(e) => { handleDelete(e, id)}}><i className="fa fa-trash"></i></button></th>
        </tr>
    );
}
 
export default Item;