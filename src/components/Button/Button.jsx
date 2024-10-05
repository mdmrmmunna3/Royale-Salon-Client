

const Button = ({ buttonText }) => {
    return (
        <div className=" bg-[--primary-color] hover:bg-[--secondary-color] border-[1px] border-cyan-400 text-center w-52 px-5 py-2 mt-5 rounded-full duration-500">
            <button className="btn-color uppercase font-medium">
                {buttonText}
            </button>
        </div>
    );
};

export default Button;