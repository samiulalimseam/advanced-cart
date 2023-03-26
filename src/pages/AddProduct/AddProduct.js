import React, { useEffect, useState } from 'react';
import DynamicInputs from '../../components/dynamicInputs/DynamicInputs';
import SizeCard from '../../components/sizeCard/SizeCard';

const AddProduct = () => {
  const [sizeArray, setSizeArray] = useState([{size:''}]);
  const [sizeAndQuanity, setSizeAndQuantity] = useState(null);
  const [size, setSize] = useState('');
  const [productInput, setProductinput] = useState({ Id: null, Model: null, Size: null, MRP: null, Location: null, isSoldOut: false })

  const handleFormChange = (event, index) => {
    let data = [...sizeArray];
    data[index][event.target.name] = event.target.value;
    setSizeArray(data);
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      // 👇 Get input value

      if (!sizeArray.includes(size)) {

        setSizeArray([...sizeArray, size])
      } else {
        window.alert(size + 'Already in list!')
      }
    }
  }

  const handleSubmit = () => {
    console.log(productInput);
  }


  const handleClick = () => {


  }


  // generate product sku locally

  const sendProductstoCreate = () => {
    const productInfo =
      fetch('http://localhost:5000/createproduct', {
        method: "POST",
        headers: {
          "content-type": "application/json",

        },
        body: productInput
      })
  }


  return (
    <div className='m-auto w-96'>
      <div class="w-full max-w-lg">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
              Model
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="A14" />
            {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
              Price
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" placeholder="" />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
              Size
            </label>
            <input onChange={(e) => { setSize(e.target.value) }} onKeyDown={handleKeyDown} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="size-field" type="text" placeholder="Write a size name and press enter" />
            <div className=''>

              {/* adding multiple sizes  */}
              <div className='card card-compact w-96 bg-base-100 shadow-xl flex flex-col-reverse animate__animated animate__fadeInDown'>
                <form >

                  {
                    sizeArray.map((size, index) =>


                      <div className='flex justify-between items-center border m-2 p-2 rounded animate__animated animate__fadeInDown'>
                        <label className='w-[20%] font-bold bg-slate-400 text-white rounded-l p-2' ></label>
                        <input name='size'  onChange={(event) => handleFormChange(event, index)} placeholder='0' className='border w-[70%] rounded-r p-2' type="number" />
                        <button className=' btn-xs btn-circle bg-red-600 text-white p-0'>X</button>

                      </div>


                    )
                  }
                </form>
              </div>
            </div>
            <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-2">


          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
              Location
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" />
            <button onClick={() => handleSubmit} class="btn btn-primary">Submit</button>

          </div>
        </div>
      </div>

    </div>
  );
};

export default AddProduct;