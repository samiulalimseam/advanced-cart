import React from 'react';

const SizeCard = ({size, sizeAndQuantity, setSizeAndQuantity}) => {
    console.log(sizeAndQuantity);
    return (
        <div>
            <div className='flex justify-between items-center border m-2 p-2 rounded animate__animated animate__fadeInDown'>
                        <label className='w-[20%] font-bold bg-slate-400 text-white rounded-l p-2' >{size}</label>
                        <input onChange={(e)=> setSizeAndQuantity({...sizeAndQuantity,size: e.target.value})} placeholder='0' className='border w-[70%] rounded-r p-2' type="number" />
                        <button className=' btn-xs btn-circle bg-red-600 text-white p-0'>X</button>

                      </div>
        </div>
    );
};

export default SizeCard;