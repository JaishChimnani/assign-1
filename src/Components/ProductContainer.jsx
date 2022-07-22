import React from 'react';
import productImage from './img/product-1.jpg'

const ProductContainer=({item})=>{
    return (
       
        <>
        <div className='relative border h-auto  rounded-md font-mulish shadow-xl space-y-3 '>
            <div className='mx-10'>
            <a href="" className='flex flex-col items-center'>
            {  <img className='h-28 lg:h-fit' src={productImage}></img>}
            </a>
            </div>
            <div className='border-bottom'>
                <div className='text-xl'>Firstname Lastname</div>
                <div className='font-bold'>#00</div>
                <div className='font-bold'>$104.00</div>
            </div>
            
            
            <div className='border text-slate-500 px-3 py-2 hover:bg-slate-100 hover:cursor-pointer'>
                <a href="">+ Quick add</a>
            </div>
        </div>
        </>
    )
}

export default ProductContainer;