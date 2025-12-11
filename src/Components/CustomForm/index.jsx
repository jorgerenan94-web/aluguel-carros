import CustomInput from "../CustomInput";
import { LuCalendar } from "react-icons/lu";
import CustomInputList from "../CustomInputList";
import { CiViewList } from "react-icons/ci";

export default function CustomForm (){
    return (
        <form className="space-y-6">
            <CustomInput 
                label = "Quantos dias?"
                icon = {<LuCalendar className="text-blue-500"/>}
                type = "number"
                placeholder = "Ex: 5"
            />
            <CustomInputList
                label = "Categoria do veículo"
                icon = {<CiViewList className="text-lg text-blue-500"/>}
                
            />
        </form>
    )
}