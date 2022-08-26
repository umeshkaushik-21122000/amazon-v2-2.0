import { useRouter } from "next/dist/client/router";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/header";
import InfoCard from "../components/InfoCard";
import { useState  } from "react";      
import { useSelector } from 'react-redux'
import { results} from "../slices/searchSlice";
function Search() {
     const [rating] = useState(Math.floor(((Math.random()*10)%5)+1));
    const items=useSelector(results);
    console.log("--------------------------------------------------------------------------------------------------------",items);
    const router = useRouter();
    const { mytitle} = router.query;
    var requiredResults=[];
       
        items.map((item)=>{
            if(item.title===mytitle){
                requiredResults.push({item})
            }
        })
   
    return (
        <div className="">
            <Header  />
            <main className="flex">
                <section className="flex-grow pt-10 px-6">
                    <div className="flex my-5 text-gray-800 whitespace-nowrap justify-end space-x-10  "  >
                       
                        <div className='flex'>
                            <img src='https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-up-arrows-those-icons-lineal-those-icons-3.png' className='mr-2 cursor-pointer' onClick={ ()=>{setPsort(-1); setRsort(0)} } />
                            <p className="font-semibold text-sm my-auto"> PRICE </p>
                            <img src='https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-down-arrows-those-icons-lineal-those-icons-4.png' className='ml-2 mr-2 cursor-pointer' onClick={ ()=>{setPsort(1); setRsort(0)} } />
                        </div>
                        <div className='flex'>
                            <img src='https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-up-arrows-those-icons-lineal-those-icons-3.png' className='mr-2 cursor-pointer'  onClick={ ()=>{setPsort(0); setRsort(-1)} } />
                            <p className="font-semibold text-sm my-auto"> RATING </p>
                            <img src='https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-down-arrows-those-icons-lineal-those-icons-4.png' className='ml-2 mr-2 cursor-pointer'  onClick={ ()=>{setPsort(0); setRsort(1)} } />
                        </div>

                    </div>
                    <div className="flex flex-col">
                        {requiredResults.map(
                            ({id,title,price,description,category,image}) => (
                                <InfoCard
                                    key={id}
                                    name={title}
                                    img={image}
                                    description={description}
                                    price={price}
                                    rating={0}
                                    category={category}
                                />
                            )
                        )}
                        
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Search;
