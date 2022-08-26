import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

import {signIn,signOut,useSession} from "next-auth/react"

import { useRouter } from 'next/router'
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
import { useState } from "react";



function Header(products) {

 
  
  const { data: session } = useSession();

  const router=useRouter()

  const items=useSelector(selectItems);

  const [input,setinput]=useState("");

    
  const search = () => {

    router.push({
        pathname: '/search',
        query: {
           mytitle: input
        }
    });
}

  return (
    
    <header>

      {/*left area*/}

      <div className="flex items-center bg-amazon_blue p-1 flex-grow ">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
          
            onClick={()=>router.push("/")}
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>

        {/*middle area*/}

        <div className=" hidden sm:flex flex-grow items-center h-10 rounded-md  cursor-pointer bg-yellow-400 hover:bg-yellow-500 ">
          <input
            className="p-2 h-full w-6 flex-grow rounded-l-md focus:outline-none"
            type="text"
            value={input}
            placeholder="Search ..."
            onChange={(event)=>{
                setinput(event.target.value)
            }}
            
          />
          <SearchIcon onClick={search}  className="h-12 p-4" />
        </div>

        {/*right area*/}

        <div className="text-white flex items-center text-xs space-x-4 mx-6 whitespace-nowrap">
          
          <div  onClick={!session?signIn:signOut} className="link">
            <p onClick={signIn}>
              {session ? " Hello "+session.user.name:"Sign In"}
            </p>
            <p className="font-extrabold">Account & List</p>
          </div>

          <div className="link">
            <p>Return</p>
            <p className="font-extrabold">& Order</p>
          </div>

          <div onClick={()=>router.push("/checkout")} className="realtive link flex items-center">
            <span className=" 
            absolute top-2 right-7 md:right-16 h-4 w-4 text-center
             bg-yellow-400 rounded-full text-black font-bold">{items.length}</span>
            <ShoppingCartIcon  className="h-10"/>
            <p className="hidden md:inline font-extrabold mt-2">Basket</p>
          </div>

        </div>

      </div>
      <div className="flex items-center bg-amazon_blue-light text-white text-sm space-x-3 p-2 pl-6">
       
        {/* bottomn navbar*/}

        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1"/>All
        </p>
        <p  className="link"> Prime video</p>
        <p className="link"> Amazon Business</p>
        <p className="link"> Today's deals</p>
        <p className="link hidden md:inline">Electornics</p>
        <p className="link hidden md:inline">Food & Groceries</p>
        <p className="link hidden md:inline">Prime</p>
        <p className="link hidden md:inline">Buy Again</p>
        <p className="link hidden md:inline">Shopper Toolkit</p>
        <p className="link hidden md:inline">Health & personal Care</p>
      </div>

    </header>
  );
}
export default Header;
