import CustomInput from "../CustomInput";
import { LuCalculator, LuCalendar } from "react-icons/lu";
import { CiViewList } from "react-icons/ci";
import  CustomSelect from "../CustomSelect";
import CustomCheckbox from "../CustomCheckbox";
import CustomButton from "../CustomButton";
 
export default function CustomForm (dias,setDias,categ,setCateg,opcoes,setOpcoes){
    return (
        <form className="space-y-6">
            <CustomInput 
                label = "Quantos dias?"
                icon = {<LuCalendar className="text-blue-500"/>}
                type = "number"
                placeholder = "Ex: 5"
                //value={dias}
                //onChange={(event) => setDias(event.target.value)}
            />
            <CustomSelect
                label = "Categoria do veículo"
                icon = {<CiViewList className="text-lg text-blue-500"/>}
                options = {
                    [
                        {
                            text: "Selecione a categoria",
                            value: 0
                        },
                        {
                            text: "Econômico - R$ 89/dia",
                            value: 1
                        },
                        {
                            text: "Compacto - R$ 119/dia",
                            value: 2
                        },
                        {
                            text: "Sedan - R$ 159/dia",
                            value: 3
                        },
                        {
                            text: "SUV - R$ 229/dia",
                            value: 4
                        },
                        {
                            text: "Premium - R$ 349/dia",
                            value: 5
                        },
                        {
                            text: "Híbrido - R$ 450/dia",
                            value: 6
                        }
                    ]
                }
            />
            <div className="space-y-2">
                <p className="font-semibold text-[#121721]">Opcionais</p>
                <CustomCheckbox info="GPS" value="R$ 10/dia"/>
                <CustomCheckbox info="Cadeirinha infantil" value="R$ 20/dia"/>
                <CustomCheckbox info="Assistência 24Hrs" value="R$ 25/dia"/>
                <CustomCheckbox info="Seguro completo" value="R$ 50/dia"/>
            </div>
            <CustomButton>
                <LuCalculator />
                Calcular valor
            </CustomButton>
        </form>
    )
}