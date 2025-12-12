export default function CustomSelect ({label, icon, options}){
    
    return (
        <div className="space-y-2">
            <label htmlFor="category" className="font-semibold text-[#121721] gap-2 flex flex-row items-center">
                {icon}
                {label}             
            </label>

            <select id="category" className="flex w-full rounded-xl border border-[#87CEEB] bg-[#f8fafc] px-3 py-2 text-base outline-none focus:border focus:border-[#4682b4] cursor-pointer">
                {options.map((opc) => {
                    return (
                        <option value={opc.value}>
                            {opc.text}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}