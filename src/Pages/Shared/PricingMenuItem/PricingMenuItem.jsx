

const PricingMenuItem = ({ priceMenuItem }) => {
    const { serve_name, details, price } = priceMenuItem;
    return (
        <div>
            <div className="flex space-x-3 items-start mt-3">
                {/* <img style={{ borderRadius: ' 0 200px 200px 200px' }} className="w-[100px]" src={image} alt="" /> */}
                <div className="">
                    <h3 className="uppercase text-cyan-600">{serve_name}  <span>----------------</span></h3>
                    <p className="text-gray-400">{details}</p>
                </div>
                <p className="text-cyan-600 mt-0 pt-0 font-semibold text-xl">${price}</p>
            </div>
        </div>
    );
};

export default PricingMenuItem;