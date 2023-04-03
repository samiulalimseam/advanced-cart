import React from 'react';
import { Link } from 'react-router-dom';
import OrderDetailsModal from '../modal/OrderDetailsModal';

const SingleOrder = ({ order }) => {
    return (
        <div>
            {/* row 1 */}
            <tr className='flex justify-between'>
                <th>{order._id}</th>
                <td>{order.customerName}</td>
                <td>{order.products?.length}</td>
                <td>Paid/Not Paid</td>

            <Link className='btn btn-sm btn-primary' to={`/print/${order._id}`} >Details</Link>
            </tr>
        </div>
    );
};

export default SingleOrder;