import CustomInput from "../CustomInput";
import { LuCalendar } from "react-icons/lu";
import { CiViewList } from "react-icons/ci";
import  CustomSelect from "../CustomSelect";
 
export default function CustomForm (){
    return (
        <form className="space-y-6">
            <CustomInput 
                label = "Quantos dias?"
                icon = {<LuCalendar className="text-blue-500"/>}
                type = "number"
                placeholder = "Ex: 5"
            />
            <CustomSelect
                label = "Categoria do veículo"
                icon = {<CiViewList className="text-lg text-blue-500"/>}
                options = {
                    [
                        {
                            text: "SUV",
                            value: 123
                        },
                        {
                            text: "Sedan",
                            value: 123
                        },
                        {
                            text: "Pickup",
                            value: 123
                        }
                    ]
                }
            />
        </form>
    )
}