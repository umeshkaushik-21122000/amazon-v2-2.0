import { CheckCircleIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import React from 'react'
import Header from '../components/header'
import Footer from '../components/Footer'
function Success() {

        const router=useRouter();

        function handelpage(){
            router.push("/");
        }

  return (
    <div className=' bg-gray-500'>
            
            <Header />

            <main className='max-w-screen-lg mx-auto '>

                <div className='flex flex-col p-36 bg-white'>
                    <div className='flex items-center space-x-2 mb-5'>
                        
                        <CheckCircleIcon className='h-10 text-green-500 '/>

                        <h1 className='text-3xl'>
                                ThankYou , your order has been confirmed!
                        </h1>

                    </div>
                    <p>
                        Thankyou for shopping with Amazon!

                        
                    </p>
  <button onClick={handelpage} type="button" className="text-black font-bold text-center bg-yellow-400 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300  rounded-lg text-sm px-5 py-2.5  items-center mr-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">
  Go to HomePage
</button>
                </div>

            </main>

            <Footer />

    </div>
  )
}

export default Success