import './Item.css';
import { useState } from "react";
import { Formik } from 'formik';

const Item = ({id, description, quantity, costPerUnit, rowsProductsServices, setRowsProductsServices, formik}) => {
    // contain state of row
    const [descriptionValue, setDescription] = useState(description);
    const [quantityValue, setQuantity] = useState(quantity);
    const [costPerUnitValue, setCostPerUnit] = useState(costPerUnit);

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
            default:
                break;
        }

    }

    const handleEditChange = (e, id) => {
        e.preventDefault();
        // if inputs for product/invoice is blank then don't submit
        if (descriptionValue === "" || quantityValue === "" || costPerUnitValue === "") {
            return;
        }
        setIsEditing(!isEditing);
        // filter out previous element using id 
        let filteredRowsProductsServices = rowsProductsServices.filter((item) => {
            return item.id !== id;
        });
        // replace with new element with same id and new states
        let newRowsProductsServices = [...filteredRowsProductsServices, {
            id: id,
            description: descriptionValue,
            quantity: quantityValue,
            costPerUnit: costPerUnitValue
        }]
        setRowsProductsServices(newRowsProductsServices);
        console.log(rowsProductsServices);
    }

    const handleDelete = (e, id) => {
        e.preventDefault();
        let newRowsProductsServices = rowsProductsServices.filter((item) => {
            return item.id !== id;
        });
        setRowsProductsServices(newRowsProductsServices);
        formik.values.productsAndServices = newRowsProductsServices;
    }

    return (
        <tr>
            <th><input disabled={!isEditing} type="text" value={descriptionValue} onChange={(e) => { handleValueChange("descriptionValue", e.target.value) }} /></th>
            <th><input min="1" disabled={!isEditing} type="number" value={quantityValue} onChange={(e) => { handleValueChange("quantityValue", e.target.value) }} /></th>
            <th><input min="1" disabled={!isEditing} type="number" value={costPerUnitValue} onChange={(e) => { handleValueChange("costPerUnitValue", e.target.value) }} /></th>
            <th><input min="1" disabled={true} type="number" value={quantityValue * costPerUnitValue} /></th>
            {/* change between (fa-edit) & (fa-check) based on current state of row */}
            { isEditing ?  <th><button className="item-button btn p-0 border-0" onClick={(e) => handleEditChange(e, id)}><i className="fa fa-check"></i></button></th> :  <th><button className="item-button btn p-0 border-0" onClick={handleEditChange}><i className="fa fa-edit"></i></button></th>}
            <th><button className="item-button btn p-0 border-0" onClick={(e) => { handleDelete(e, id)}}><i className="fa fa-trash"></i></button></th>
        </tr>
    );
}
 
export default Item;