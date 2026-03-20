import { LuCalculator } from "react-icons/lu";

export default function Calculator({ativado,dias, categ, op}) {
    function formatCateg(value){
        const format = value;
        switch(format){
            case "Econômico":
                return 89
            case "Compacto":
                return 119
            case "Sedan":
                return 159
            case "SUV":
                return 229
            case "Premium":
                return 349
            case "Híbrido":
                return 450
        }
    }
    
    const valorTotal = dias * formatCateg(categ);
    return (
        <div className="space-y-6 w-full">
            <div className={`w-full mx-auto h-auto flex justify-center items-center flex-col ${ativado? "" : "hidden"}`}>
                    <div className="flex justify-center items-center flex-col pb-8">
                     <p className="text-[17px]">Valor Total</p>
                     <span className="text-[#377CF4] font-bold text-6xl">R$ {valorTotal},00</span>
                    </div>
                    
                    <div className="border-t border-[#a9a9a9] space-y-3 pt-6 w-full pb-6">
                        <div className="flex justify-between">
                            <p className="text-[18px]">Período:</p>
                            <span className="flex font-semibold text-[18px]">
                                {dias}
                                <p className="pl-1">dias</p>
                            </span>
                        </div>

                        <div className="flex justify-between">
                            <p className="text-[18px]">Categoria:</p>
                            <span className="flex font-semibold text-[18px]">
                                {categ}
                            </span>
                        </div>

                        <div className={`flex justify-between`}>
                            <p className="text-[18px]">Opcionais:</p>
                            <span className="flex font-semibold text-[18px]">
                                {op}
                            </span>
                        </div>
                    </div>

                    <button className="w-full h-12 bg-[#F9862A] hover:bg-[#F9862A]/90 hover:text-[17px] rounded-xl text-white font-semibold cursor-pointer flex justify-center items-center gap-2">
                        Reservar Agora
                    </button>
            </div>

            <div className={`w-full h-auto mx-auto flex flex-col items-center ${ativado? "hidden" : ""} `}>
                <div className="w-25 h-25 bg-[#a9a9a9]/30 rounded-full flex justify-center items-center">
                    <LuCalculator className="text-5xl"/>
                </div>
                <p className="text-xl text-center">Preencha os dados ao lado para ver o resultado da simulação</p>
            </div>
        </div>
    )
}