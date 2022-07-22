import React from 'react';
import ProductContainer from './ProductContainer';
import {MdSort} from 'react-icons/md'
import {BsArrowLeft} from 'react-icons/bs'
// import img1 from '../../img/blackjersey.jpg'

const items=[
    {'img':'./img/product-1.jpg' },
    {'img':'./img/product-1.jpg' },
    {'img':'./img/product-1.jpg' },
    {'img':'./img/product-1.jpg' },
    {'img':'./img/product-1.jpg' },
    {'img':'./img/product-1.jpg' },
    {'img':'./img/product-1.jpg' },
    {'img':'./img/product-1.jpg' },
    {'img':'./img/product-1.jpg' },
    {'img':'./img/product-1.jpg' },
    {'img':'./img/product-1.jpg' },
    {'img':'./img/product-1.jpg' },
    {'img':'./img/product-1.jpg' },
    {'img':'./img/product-1.jpg' },
    {'img':'./img/product-1.jpg' },
    {'img':'./img/product-1.jpg' },
    {'img':'./img/product-1.jpg' },
    {'img':'./img/product-1.jpg' },
    {'img':'./img/product-1.jpg' },
    {'img':'./img/product-1.jpg' },
    {'img':'./img/product-1.jpg' },
    {'img':'./img/product-1.jpg' },
    {'img':'./img/product-1.jpg' },
    {'img':'./img/product-1.jpg' },
    {'img':'./img/product-1.jpg' },
    {'img':'./img/product-1.jpg' },
    {'img':'./img/product-1.jpg' },
    {'img':'./img/product-1.jpg' },
    {'img':'./img/product-1.jpg' },
    {'img':'./img/product-1.jpg' },
    {'img':'./img/product-1.jpg' },
    {'img':'./img/product-1.jpg' }
]

const Items=()=>{
    return (
        <>  
        <div className="text-left m-6">

            <span className="inline-block text-left mx-2"><BsArrowLeft/></span>
            Back
            
        </div>
        
        <div className="text-left  m-6">

                <span className='inline-block text-4xl font-bold '><MdSort/></span>
            <p className=" text-4xl font-bold font-mulish inline-block">
            Shop Jerseys </p> <p className='text-sm inline-block'>(999)</p> 
        </div>
    <div className='grid grid-cols-2 gap-4 px-0 lg:px-8 font-Mulish  lg:grid-cols-4 mx-8'>
        
{items.map((item)=>{
    
    return (
        <>
           
        <ProductContainer source={item}/>
            
        </>
    )
})}

</div>
<div className='font-bold m-3'>
&lt;<span className='text-red-700 p-5'>1</span>&gt; 
</div>
        </>
    )
}
 export default Items;