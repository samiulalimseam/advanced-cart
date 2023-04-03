import React from 'react';

const OrderDetailsModal = ({order}) => {
    return (
        <div>
            
            <input  type="checkbox" id="my-modal-order"  className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                <label htmlFor="my-modal-order" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <div className='w-96 m-auto shadow-sm'>

                <p>Invoice: {order._id}</p>
                <p>Name: {order.customerName}</p>
                <p>Email: {order.customerEmail}</p>
                <p>Phone: {order.customerPhone}</p>
                </div>

                </div>
            </div>
        </div>
    );
};

export default OrderDetailsModal;