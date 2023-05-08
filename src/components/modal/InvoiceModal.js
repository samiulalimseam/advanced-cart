import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';


const InvoiceModal = ({ data, handleDelete, soldOut,clearCart,cartArray, orderInfo,storeOrder, setOrderInfo }) => {
    const {  handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(false); 
    const onSubmit = (data, soldOut) => {
        // console.log(data);
        storeOrder()
        clearCart()
       setIsChecked(true)
        
    }
    

    return (
        <div>
            <input  type="checkbox" id="my-modal-3"  className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <form onSubmit={handleSubmit(onSubmit)} >

                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-lg font-bold">Customer Info:</h3>
                        <input onChange={e => {setOrderInfo({...orderInfo,customerNumber : e.target.value})}}  type="number" name='number' placeholder="Phone" className="m-1 input input-bordered input-primary w-full max-w-xs" />
                        {errors.number && <span>This field is required</span>}
                        <input onChange={e => { setOrderInfo({ ...orderInfo, customerName: e.target.value }) }}  type="text" name='name' placeholder="Name" className=" m-1 input input-bordered input-primary w-full max-w-xs" />
                        <input onChange={e => { setOrderInfo({ ...orderInfo, customerEmail: e.target.value }) }}  type="email" name='email' placeholder="Email" className=" m-1 input input-bordered input-primary w-full max-w-xs" />
                        <input type="text" defaultValue={new Date()} disabled onChange={{...orderInfo, time: new Date()}} />
                        
                        <button  className='btn btn-primary'>Submit</button>
                    </form>


                </div>
            </div>
        </div>
    );
};

export default InvoiceModal;