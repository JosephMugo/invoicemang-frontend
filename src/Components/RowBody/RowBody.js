import './RowBody.css';
import Item from "../Item/Item";
import { v4 as uuidv4 } from 'uuid';

const RowBody = ({productsAndServices, rowsProductsServices, setRowsProductsServices}) => {
    return (
        <tbody id="productsAndServicesTable">
            {/* 
            Create row dynamically when adding new product  
                - user click add product or service
                - new row is added with empty fields
                - user fills fields with information
                - user clicks check mark to say they are done (check whether the user inputed correctly formatted inputs for each field)
                - store products and/or services together in a state that is attatched to invoice
            */}
            {
                productsAndServices.map((item) => {
                    return <Item key={item.id} {...item} rowsProductsServices={rowsProductsServices} setRowsProductsServices={setRowsProductsServices} />
                })
            }
        </tbody>
    );
}
 
export default RowBody;