export default function CustomCheckbox({info,value}){
    const id = info.toLowerCase().trim().replace(/ /g, "-");
    return (
        <label htmlFor={id} className="flex items-center w-full rounded-xl border border-[#87CEEB] bg-[#f8fafc] px-3 py-2 cursor-pointer hover:bg-[#87ceeb]/30">
            <input type="checkbox" id={id} className="w-5 h-5"/>
            <div className="w-full flex justify-between">
                <p className="pl-2 text-[#121721] font-medium">{info}</p>
                <p className="text-[#a9a9a9] font-medium">{value}</p>
            </div>
        </label>      
    )
}