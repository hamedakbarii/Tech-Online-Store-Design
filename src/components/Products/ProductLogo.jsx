let ProductLogoArray = [
  "./assets/ModelLogo/Roccat.png",
  "./assets/ModelLogo/Msi.png",
  "./assets/ModelLogo/Razer.png",
  "./assets/ModelLogo/Maltake.png",
  "./assets/ModelLogo/Adata.png",
  "./assets/ModelLogo/Hp.png",
  "./assets/ModelLogo/Gigabyte.png",
];
let ProductLogo = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 px-2 gap-3 container mx-auto place-items-center mt-8">
      {ProductLogoArray.map((itemLogo) => (
        <div className="p-1 transation-all duration-[.2s] hover:bg-[#F5F7FF] rounded-lg hover:-translate-y-[.5rem]">
          <img src={itemLogo} className="object-center object-cover" />
        </div>
      ))}
    </div>
  );
};
export default ProductLogo;
