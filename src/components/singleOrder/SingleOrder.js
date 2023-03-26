import React from 'react';
import { Link } from 'react-router-dom';

const SingleOrder = ({order}) => {
    return (
        <div>
             {/* row 1 */}
             <tr className='flex justify-between'>
                            <th>{order._id}</th>
                            <td>{order.customerName}</td>
                            <td>{order.products?.length}</td>
                            <td>Paid/Not Paid</td>
                            <Link to={`/print/${order._id}`}>Print</Link>
                        </tr>
        </div>
    );
};

export default SingleOrder;