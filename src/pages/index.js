import Head from "next/head";
import Header from "../components/header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";
import Footer from "../components/Footer";

export default function Home({products}) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>
          
        <Header products={products} />
        
        <main className="max-w-screen-2xl mx-auto">
                     {/* banner */}
                     <Banner />
                     <ProductFeed  products={products} />
        </main>
     
      <Footer />
      
    </div>
  );
}

export async function getServerSideProps(context){
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res)=>res.json()
  );

  return{
    props:{
      products,
    }
  }
}