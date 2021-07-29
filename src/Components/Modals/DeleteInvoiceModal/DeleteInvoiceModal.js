import './DeleteInvoiceModal.css';

const DeleteInvoiceModal = () => {
    return (
            <div className="deleteinvoice-container modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="modal-title">Delete</div>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Are you sure you want to delete this invoice?
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-danger" data-bs-toggle="modal" data-bs-dismiss="modal">Delete</button>
                    </div>
                </div>
            </div>
    );
}
 
export default DeleteInvoiceModal;