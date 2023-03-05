import React from 'react';

const SingleOrder = ({order}) => {
    return (
        <div>
             {/* row 1 */}
             <tr className='flex justify-between'>
                            <th>{order._id}</th>
                            <td>{order.customerName}</td>
                            <td>{order.products?.length}</td>
                            <td>Paid/Not Paid</td>
                        </tr>
        </div>
    );
};

export default SingleOrder;