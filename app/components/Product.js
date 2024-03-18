import Link from "next/link";
import { useEffect, useState } from "react";
import Cookies from 'universal-cookie';

export default function Product({ product }) {

  const cookies = new Cookies();
  const [activeLink, setActiveLink] = useState(null);
  const [showProduct, setShowProduct] = useState(true);

  useEffect(() => {
    const storedActiveLink = cookies.get('activeLink');
    if (storedActiveLink) {
      setActiveLink(storedActiveLink);
    }
  }, [cookies]);

  useEffect(() => {
    if (activeLink && activeLink !== "" && activeLink!=="home") {
      // Check if the product category matches the activeLink
      if (product.category === activeLink) {
        setShowProduct(true);
      } else {
        setShowProduct(false);
      }
    } else {
      setShowProduct(true); // Show all products if activeLink is empty or null
    }
  }, [activeLink, product]);

  if (!showProduct) {
    return null; // Don't render the product if it doesn't belong to the active category
  }

  return ( 
    <>
      <Link 
        href={`/product/${product?.id}`} 
        className='max-w-[200px] p-1.5 border border-gray-50 hover:border-gray-200 hover:shadow-xl bg-gray-100 rounded mx-auto'
      >
        { 
          product?.url ? 
          <img 
            className="rounded cursor-pointer" 
            src={product.id > 20 ? product.url : product.url + '/190'} 
            alt={product.title} 
          /> 
          : 
          null 
        }

        <div className="pt-2 px-1">

          <div className="font-semibold text-[15px] hover:underline cursor-pointer">{product?.title}</div>
          <div className="font-extrabold">Ksh{(product?.price / 100).toFixed(2)}</div>

          <div className="relative flex items-center text-[12px] text-gray-500">
              <div className="line-through">Ksh{((product?.price * 1.2) / 100).toFixed(2)}</div>
              <div className="px-2">-</div>
              <div className="line-through">20%</div>
          </div>

        </div>
      </Link>
    </>
  );
}
