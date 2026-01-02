import { GoShieldCheck } from "react-icons/go";

export default function CustomExtras(icon, titulo, frase ){
    return(
        <div className="w-full mx-auto h-auto rounded-lg border border-[#377CF4]/50 flex justify-center p-6 flex-col items-center">
            <div className="w-15 h-15 bg-[#4682B4] flex justify-center items-center text-white text-3xl rounded-xl mb-4">
                <GoShieldCheck />
            </div>

            <h3 className="text-xl font-bold mb-2">Seguro Completo</h3>

            <p className="text-center text-sm">Proteção total durante toda a viagem</p>
        </div>
    )
}