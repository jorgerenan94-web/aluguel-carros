import { FiUsers } from "react-icons/fi";
import { PiGearFine } from "react-icons/pi";
import { TbBrandSpeedtest } from "react-icons/tb";

export default function CustomCard({image, cat,model, cambio, pot}){
    return (
        <div className="w-full mx-auto h-auto rounded-lg border border-[#a9a9a9]/50 group">
            <div className="w-full relative overflow-hidden">
                <img src={image} alt="Fiat Mobi preto" className="w-full h-48 rounded-t-lg hover:scale-110 transition-transform duration-500 group-hover:scale-105"/>
                <div className=" absolute px-2.5 py-0.5 bg-blue-400 top-1 right-1 inline-flex rounded-full text-white font-semibold">{cat}</div>
            </div>
            
            <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">{model}</h3>
                <div className="flex justify-between w-45">
                    <div className="flex items-center gap-1">
                        <FiUsers />
                        <p className="">5</p>
                    </div>

                    <div className="flex items-center gap-1">
                        <PiGearFine />
                        <span>{cambio}</span>
                    </div>

                    <div className="flex items-center gap-1">
                        <TbBrandSpeedtest />
                        <span>{pot}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}