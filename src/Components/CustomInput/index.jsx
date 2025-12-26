

export default function CustomInput ({label, icon, type, placeholder,value,onChange}){
    return (
        <div className="space-y-2">
            
            <label htmlFor="days" className="font-semibold text-[#121721] gap-2 flex flex-row items-center">
                {icon}
                {label}             
            </label>
            
            <input 
                //value={value}
                //onChange={onChange}
                type={type} 
                placeholder={placeholder} 
                id="days" 
                className="flex w-full rounded-xl border border-[#87CEEB] bg-[#f8fafc] px-3 py-2 text-base outline-none focus:border focus:border-[#4682b4]"
            />        
        </div>
    )
}