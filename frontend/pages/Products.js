
import React from 'react';
import Link from 'next/link';
//import { getServerSideProps } from 'next/dist/build/templates/pages'



const Products = (props) => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
    {props.products.data.map((item)=>{
            console.log(item.attributes.image)
            
            return(
              <>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        
          <img alt="name" className="object-cover object-center w-full h-full block" src={item.attributes.image.data && item.attributes.image.data.attributes.name}/>
        
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.attributes.title}</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
          <p className="mt-1">$16.00</p>
         <Link href={`/product/${item.attributes.slug}`}> <button className='w-[100px] h-[50px] bg-indigo-500 border-radius-rounded'>buy now</button></Link>
        </div>
      </div>
      
      </>
            )
          })}
 
    </div>
  </div>
</section>
  )
}

export async function getServerSideProps(context){
  let headers={Authorization:"Bearer 1d667d780de67d32828cafe5ef0b059fba398d95c42bb2cb8c4d1542a532dd242ae6455b4f16dac6c17d1921cacf3b1a0e8a037b30b2c7c591c3c3c731a04efdd7041b28e25abce5ee9addccbffc00b4d32934501c9be85c08c44c92897e673cc53a4496e4850020d930544fb5487b4430c6a84cc9ceb0a9526352f9b72e028f"}

  let a= await fetch("http://localhost:1337/api/products?populate=*",{headers:headers})
  let products=await a.json()
  console.log(products)


  return { 
      
      props:{products:products},
  }


  
}

export default Products