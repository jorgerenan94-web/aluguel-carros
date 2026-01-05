export default function CustomExtras({icon, titulo, frase}){
    return(
        <div className="w-full mx-auto h-auto rounded-lg border border-[#377CF4]/50 flex justify-center p-6 flex-col items-center">
            <div className="w-15 h-15 bg-[#4682B4] flex justify-center items-center text-white text-3xl rounded-xl mb-4">
                {icon}
            </div>
            
            <h3 className="text-xl font-bold mb-2">{titulo}</h3>

            <p className="text-center text-sm">{frase}</p>
        </div>
    )
}