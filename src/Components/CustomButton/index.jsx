export default function CustomButton({children}){
    return(
        <button className="w-full h-12 bg-[#4682B4] hover:bg-[#4682b4]/90 hover:text-[17px] rounded-xl text-white font-semibold cursor-pointer flex justify-center items-center gap-2">
            {children}
        </button>
    )
}