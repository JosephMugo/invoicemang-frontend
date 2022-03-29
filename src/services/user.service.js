import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/invoices";

const getInvoices = () => {
    return axios.get(API_URL, { headers: authHeader() });
}

const getInvoiceById = (id) => {
    return axios.get(API_URL + `/${id}`, { headers: authHeader() });
}

const addInvoice = (invoice) => {
    return axios.post(
      API_URL , 
      invoice,
      { 
        headers: authHeader(),
      }
    );
}

const updateInvoice = (id, invoice) => {
    return axios.put(
      API_URL + `/${id}`,
      invoice,
      {
        headers: authHeader()
      }
    );
}

const deleteInvoiceById = (id) => {
    return axios.delete(API_URL + `/${id}`, { headers: authHeader() });
}


export default {
  getInvoices,
  getInvoiceById,
  addInvoice,
  updateInvoice,
  deleteInvoiceById
};