import React from 'react'
import Header from '../components/header'
import Image from 'next/dist/client/image'
import { useSelector } from 'react-redux'
import { selectItems, selecttotal } from '../slices/basketSlice'
import CheckoutProduct from '../components/CheckoutProduct'
import { useSession } from 'next-auth/react'
import CurrencyFormat from 'react-currency-format'
import Footer from '../components/Footer'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'

    const stripepromise=loadStripe(process.env.stripe_public_key);

function checkout() {
    const items=useSelector(selectItems);
    const { data: session } = useSession();
    const total=useSelector(selecttotal);
    const createcheckoutsession= async ()=>{
        
        const stripe=await stripepromise;

        const checkoutsession= await axios.post("/api/create-checkout-session",
        {
            items: items,
            email : session.user.email,
        }
        );

        const result=await stripe.redirectToCheckout({
            sessionId: checkoutsession.data.id
        })

        if(result.error) alert(result.error.message);
    };

  return (
    <div className='bg-gray-100 '>
        <Header />
        <main className='lg:flex max-w-screen-2xl mx-auto my-auto'>
           {/*left */}
            <div className='flex-grow m-5 shadow-sm'>
            <Image 
                src="https:/links.papareact.com/ikj"
                height={250}
                width={1020}
                objectFit="contain"
            />
            <div className='flex flex-col  p-5 space-y-10 bg-white'>
                <h1 className='text-3xl border-b pb-4'>{items.length===0?"your amazon basket is empty":"shopping basket"}</h1>
              
                {items.map(({id,title,price,description,category,image,rating,hasPrime})=>
                (
                <CheckoutProduct
                    key={id}
                    id={id}
                    title={title}
                    rating={rating}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                    hasprime={true}
                />
                ))
                }
            </div>
            </div>

        {/*right*/}
            <div className=' bg-white p-10 flex flex-col shadow-md'>
                {items.length>0&&
                (
                <>
                <h2 className='whitespace-nowrap'>
                    subtotal ({items.length} items) : 
                <span className='font-bold'>
                <CurrencyFormat value={total*100} prefix={"₹"} thousandSeparator={true} displayType={'text'} decimalScale={0}/>
                </span>
                </h2>
                <button role='link' 
                         onClick={createcheckoutsession}  
                          disabled={!session}
                           type="button" 
                        className= {`${!session ? ' text-black bg-[#f0f0ef] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 mr-2 mb-2 cursor-not-allowed font-bold':"text-black bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 mr-2 mb-2 " }`}>
  <svg aria-hidden="true" className="mr-2 -ml-1 w-10 h-3" viewBox="0 0 660 203" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M233.003 199.762L266.362 4.002H319.72L286.336 199.762H233.003V199.762ZM479.113 8.222C468.544 4.256 451.978 0 431.292 0C378.566 0 341.429 26.551 341.111 64.604C340.814 92.733 367.626 108.426 387.865 117.789C408.636 127.387 415.617 133.505 415.517 142.072C415.384 155.195 398.931 161.187 383.593 161.187C362.238 161.187 350.892 158.22 333.368 150.914L326.49 147.803L319.003 191.625C331.466 197.092 354.511 201.824 378.441 202.07C434.531 202.07 470.943 175.822 471.357 135.185C471.556 112.915 457.341 95.97 426.556 81.997C407.906 72.941 396.484 66.898 396.605 57.728C396.605 49.591 406.273 40.89 427.165 40.89C444.611 40.619 457.253 44.424 467.101 48.39L471.882 50.649L479.113 8.222V8.222ZM616.423 3.99899H575.193C562.421 3.99899 552.861 7.485 547.253 20.233L468.008 199.633H524.039C524.039 199.633 533.198 175.512 535.27 170.215C541.393 170.215 595.825 170.299 603.606 170.299C605.202 177.153 610.098 199.633 610.098 199.633H659.61L616.423 3.993V3.99899ZM551.006 130.409C555.42 119.13 572.266 75.685 572.266 75.685C571.952 76.206 576.647 64.351 579.34 57.001L582.946 73.879C582.946 73.879 593.163 120.608 595.299 130.406H551.006V130.409V130.409ZM187.706 3.99899L135.467 137.499L129.902 110.37C120.176 79.096 89.8774 45.213 56.0044 28.25L103.771 199.45L160.226 199.387L244.23 3.99699L187.706 3.996" fill="#0E4595"/><path d="M86.723 3.99219H0.682003L0 8.06519C66.939 24.2692 111.23 63.4282 129.62 110.485L110.911 20.5252C107.682 8.12918 98.314 4.42918 86.725 3.99718" fill="#F2AE14"/></svg>
  {!session ? "SignIn to checkout " : "Proceed to Checkout"}
</button>
                    </>
                )
                }
            </div>
        </main>
      <Footer />
        
    </div>
  )
}

export default checkout