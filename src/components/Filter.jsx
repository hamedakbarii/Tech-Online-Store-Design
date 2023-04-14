import React, { useEffect, useState } from "react";

/**
 

  [
    {
      title : price , 
      range : [1000,2000] ; 
    }






  ]
  let item.title (range) {
    product.filet 
    product = prod
  } ;
  price() 
array.map((item)=>item.title())

product 
producttemp = product
setProduct(producttemp) ; 




{products.length > 0 ? (
            products
              .filter(
                (p) =>
                  p.name.fa.toLowerCase().includes(search.text) &&
                  p.price >= search.price?.start &&
                  p.price <= search.price?.end &&
                  (search.category[p.category] ||
                    Object.values(search.category).every((c) => !c))
              )
              .map(({ id, name, price, category }) => (
                <Link
                  href={`/




                  {products.length > 0 ? (
            products
              .filter(
                (p) =>
                  p.name.fa.toLowerCase().includes(search.text) &&
                  p.price >= search.price?.start &&
                  p.price <= search.price?.end &&
                  (search.category[p.category] ||
                    Object.values(search.category).every((c) => !c))
              )
              .map(({ id, name, price, category }) => (
                <Link
                  href={`/products/${name.en
                    .toLowerCase()
                    .replaceAll(" ", "-")}`}
                  key={id}
                >
                  {" "}
                  <ProductCard
                    productImg={productImgs[category]}
                    productTitle={name[i18n.language as keyof iMultiLangProp]}
                    productPrice={price}
                  />
                </Link>
              ))
          ) : (
            <div className="flex opacity-90 items-center w-full mt-10 flex-col gap-5">
              <FlowerSpinner size={100} color="#646466" />
              <p className="text-lg text-secondary font-medium">
                {t("products-loading-text")}
              </p>
            </div>
          )}
        </div>



 */

import { ArrowDown2, CloseIcon } from "./Icon";
import { filterOptions } from "../utils";
const Filter = ({ setShowFilter , filter , setFilter }) => {
  const HandleSetFilter = (filter , setFilter , ItemTitle , Category) => {
    if(filter[`${ItemTitle.toLowerCase()}`].indexOf(Category) !== -1){
      setFilter(draft=>{draft[`${ItemTitle.toLowerCase()}`].splice(filter[`${ItemTitle.toLowerCase()}`].indexOf(Category) , 1)})
    }else{
      setFilter(draft=>{draft[`${ItemTitle.toLowerCase()}`]=[...draft[`${ItemTitle.toLowerCase()}`] , Category]}) 
    }

    // delete filter
  }
  useEffect(()=>{console.log(filter)},[filter]) ; 
  return (
    <div>
      <div className="flex justify-between items-center border-b">
        <h3 className="text-xl font-semibold  p-2">Filter By</h3>
        <span onClick={() => setShowFilter(false)}>
          <CloseIcon />
        </span>
      </div>
      {filterOptions.map((item) => (
        <div
          className="flex justify-between items-center p-2 font-semibold"
          // onClick={(event) => filterItemsHandler(event)}
        >
          <details className="w-full">
            <summary className="w-full list-none flex items-center justify-between">
              {item.title}
              <span className="text-xs font-light">
                <ArrowDown2 />
              </span>
            </summary>
            {item.title === "Color" ? (
              <div className="flex p-2 gap-2">
                <div className="w-4 h-4 rounded-full bg-black"></div>
                <div className="w-4 h-4 rounded-full bg-red-800"></div>
              </div>
            ) : (
              <>
                {item.items.map((category) => (
                  <p
                    className="p-2 text-sm flex items-center before:block before:transition-all before:p-0 before:gap-0"
                    onClick={(e)=>{
                      HandleSetFilter(filter , setFilter , item.title , category) ; 
                    }}
                  >
                    {category}
                  </p>
                ))}
              </>
            )}
          </details>
          {/* <span>{item}</span> */}
        </div>
      ))}
      <button className="text-white border-2 border-[#0156FF] bg-[#0156FF] px-10 py-2 font-semibold flex m-auto rounded-3xl transition-all ease-in-out duration-300 hover:bg-white hover:text-[#0156FF]">
        Apply Filters
      </button>
    </div>
  );
};

export default Filter;
