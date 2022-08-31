import { useRouter } from "next/dist/client/router";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/header";
import InfoCard from "../components/InfoCard";
import { useState  } from "react";      
import { useSelector } from 'react-redux'
import { results} from "../slices/searchSlice";
function Search() {
   
    const items=useSelector(results);
    const router = useRouter();
    const [Rsort,setRsort]=useState(0);
    const [Psort,setPsort]=useState(0);
    const  {mytitle} = router.query;
    console.log(items[0]);
    var requiredResults=[];
        items.map((item)=>{
            if(item.title.toLowerCase().includes(mytitle.toLowerCase())){
                requiredResults.push(item)
            }
        })

        if(Rsort==1){
                requiredResults.sort((a,b)=>a.rating.rate-b.rating.rate);
        }
        if(Rsort==-1){
            requiredResults.sort((a,b)=>b.rating.rate-a.rating.rate);
        }
        if(Psort==1){
            requiredResults.sort((a,b)=>a.price-b.price);
        }
        if(Psort==-1){
            requiredResults.sort((a,b)=>b.price-a.price);
        }

            console.log(Psort,Rsort);
   
    return (
        <div className="">
            <Header  />
            <main className="flex">
                <section className="flex-grow pt-10 px-6">
                    <div className="flex my-5 text-gray-800 whitespace-nowrap justify-end space-x-10  "  >
                       
                        <div className='flex'>
                            <img src='https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-up-arrows-those-icons-lineal-those-icons-3.png' className='mr-2 cursor-pointer' onClick={()=>{setPsort(-1); setRsort(0)} } />
                            <p className="font-semibold text-sm my-auto"> PRICE </p>
                            <img src='https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-down-arrows-those-icons-lineal-those-icons-4.png' className='ml-2 mr-2 cursor-pointer' onClick={()=>{setPsort(1); setRsort(0)} } />
                        </div>
                        <div className='flex'>
                            <img src='https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-up-arrows-those-icons-lineal-those-icons-3.png' className='mr-2 cursor-pointer'  onClick={()=>{setPsort(0); setRsort(-1)} } />
                            <p className="font-semibold text-sm my-auto"> RATING </p>
                            <img src='https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-down-arrows-those-icons-lineal-those-icons-4.png' className='ml-2 mr-2 cursor-pointer'  onClick={()=>{setPsort(0); setRsort(1)} } />
                        </div>

                    </div>
                    <div className="flex flex-col">
                        {requiredResults.map(
                            ({id,title,price,description,category,image,rating}) => (
                                <InfoCard
                                    id={id}
                                    title={title}
                                    image={image}
                                    description={description}
                                    price={price}
                                    rating={rating.rate}
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
