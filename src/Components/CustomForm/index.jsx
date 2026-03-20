import CustomInput from "../CustomInput";
import { LuCalculator, LuCalendar } from "react-icons/lu";
import { CiViewList } from "react-icons/ci";
import  CustomSelect from "../CustomSelect";
import CustomCheckbox from "../CustomCheckbox";
import CustomButton from "../CustomButton";
 
export default function CustomForm ({ativar,dias,setDias,categ,setCateg,op,setOp}){
    return (
        <form className="space-y-6">
            <CustomInput 
                label = "Quantos dias?"
                icon = {<LuCalendar className="text-blue-500"/>}
                type = "number"
                placeholder = "Ex: 5"
                value={dias}
                onChange={(event) => setDias(event.target.value)}
            />
            <CustomSelect
                label = "Categoria do veículo"
                icon = {<CiViewList className="text-lg text-blue-500"/>}
                value={categ}
                onChange={(event) => setCateg(event.target.value)}
                options = {
                    [
                        {
                            text: "Selecione a categoria",
                            value: "0"
                        },
                        {
                            text: "Econômico - R$ 89/dia",
                            value: "Econômico"
                        },
                        {
                            text: "Compacto - R$ 119/dia",
                            value: "Compacto"
                        },
                        {
                            text: "Sedan - R$ 159/dia",
                            value: "Sedan"
                        },
                        {
                            text: "SUV - R$ 229/dia",
                            value: "SUV"
                        },
                        {
                            text: "Premium - R$ 349/dia",
                            value: "Premium"
                        },
                        {
                            text: "Híbrido - R$ 450/dia",
                            value: "Híbrido"
                        }
                    ]
                }
            />
            <div className="space-y-2">
                <p className="font-semibold text-[#121721]">Opcionais</p>
                <CustomCheckbox info="GPS" text="R$ 10/dia" value={op} onChange={(event) => setOp(event.target.checked)}/>
                <CustomCheckbox info="Cadeirinha infantil" text="R$ 20/dia" />
                <CustomCheckbox info="Assistência 24Hrs" text="R$ 25/dia"/>
                <CustomCheckbox info="Seguro completo" text="R$ 50/dia"/>
            </div>
            <CustomButton
                onClick={ativar}
            >
                <LuCalculator />
                Calcular valor
            </CustomButton>
        </form>
    )
}