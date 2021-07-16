import './RowBody.css';
import Item from "../Item/Item";
import { v4 as uuidv4 } from 'uuid';

const RowBody = ({productsAndServices, rowsProductsServices, setRowsProductsServices, formik}) => {
    return (
        <tbody id="productsAndServicesTable">
            {
                productsAndServices.map((item) => (
                    <Item key={item.id} {...item} rowsProductsServices={rowsProductsServices} setRowsProductsServices={setRowsProductsServices} formik={formik} />
                ))
            }
        </tbody>
    );
}
 
export default RowBody;