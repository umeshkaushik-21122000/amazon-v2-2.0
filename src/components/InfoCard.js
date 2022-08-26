import React, { useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import { useDispatch } from 'react-redux' 
import { addToBasket } from '../slices/basketSlice'

function InfoCard({id,title,price,description,category,images}) {
    const [cartStatus, setcartStatust] = useState(false);
    const dispatch = useDispatch();
    const [rating] = useState(Math.floor(((Math.random()*10)%5)+1));
    const [hasPrime]=useState(Math.random()<0.5)
    const addItemToBasket = () => {
        const product = {
            id,
                title,
                price,
                description,
                category,
                images,
                rating,
                hasPrime
        }
        dispatch(addToBasket(product));
        setcartStatust(true);
    }
    return (
        <div className="flex py-7 px-2 border-b cursor-pointer hover:shadow-lg transition duration-200 ease-out first:border-t">
            <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
                <Image className="rounded-2xl" src={images} height={200} width={200} layout="fill" objectFit="cover" />
            </div>
            <div className="flex flex-col flex-grow pl-5">
                <div className="flex justify-between">
                    <p className="text-sm text-gray-500 pt-2 flex-grow"> {category} </p>
                </div>
                <h4 className="text-xl">{title}</h4>
                <div className="border-b w-10 pt-2" />
                <p className="text-sm text-gray-500 pt-2 flex-grow">
                {description}
                </p>

                <div>
                    <p className="flex items-center">
                        <StarIcon className="h-5 text-red-400" />
                        {rating===0 ? 'NEW' : rating}
                    </p>
                    <div className="flex pt-5 justify-between">
                        <p className="text-lg font-semibold">{price}</p>
                    { !cartStatus ?
                        <button 
                            className="bg-transparent hover:bg-red-400 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-red-400 hover:border-transparent rounded"
                            onClick={addItemToBasket}
                        >Add to cart
                        </button> :
                        <div
                            className=" font-semibold rounded-md bg-red-400 text-white py-2 px-7"
                        >Added</div>
                    }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoCard;