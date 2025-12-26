import { LuCar } from "react-icons/lu";
import CustomForm from "./Components/CustomForm";
import Calculator from "./Components/Calculator";
import { useState } from "react"
import CustomCard from "./Components/CustomCard";

export default function App(){
  const [dias, setDias] = useState("")
  const [categ, setCateg] = useState("")
  const [opcoes, setOpcoes] = useState([])

  return (
    <div className="w-full min-h-screen bg-[#F0F3F5] flex justify-center flex-col items-center">
      <section>
        <div className="w-200 h-100 flex flex-col items-center justify-center">
          <div className="w-20 h-20 bg-[#4682B4] rounded-full flex justify-center items-center">
            <LuCar className="text-[55px] text-white" />
          </div>
          <h1 className="text-8xl font-semibold bg-linear-to-r from-blue-500 to-[#87CEEB] text-transparent bg-clip-text pb-5">Aluguel de Carros</h1>
          <p className="text-xl text-center py-4 text-[#a9a9a9] ">
            Escolha a melhor opção de carro para a sua rotina ou para sua viagem sempre com transparência total
          </p>
        </div>
      </section>

      <section className="container py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-[#0F1729]/80">Simule seu Aluguel</h2>
            <p className="text-xl text-[#a9a9a9]">Calcule o valor do seu aluguel em segundos!</p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="border rounded-lg bg-white text-[#1a1f2c] border-[#4682b4] shadow-sm p-8">
              <CustomForm
                setDias={setDias}
                setCateg={setCateg}
                setOpcoes={setOpcoes}
                dias={dias}
                categ={categ}
                opcoes={opcoes}
              />
            </div>
            <div className=" border rounded-lg bg-white text-[#1a1f2c] border-[#4682b4] shadow-sm p-8 flex justify-center items-center">
              <Calculator
                dias={dias}
                categ={categ}
                opcoes={opcoes}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container py-20 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-[#0F1729]/80">Nossa Frota</h2>
            <p className="text-xl text-[#a9a9a9]">Veículos modernos e bem conservados para sua segurança</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <CustomCard 
                image="/src/images/Captura de tela 2025-12-26 110426.png"
                cat="Econômico"
                model="Fiat Mobi"
                cambio="Manual"
                pot="1.0"
              />

              <CustomCard 
                image="/src/images/Captura de tela 2025-12-26 110426.png"
                cat="Compacto"
                model="Pálio"
                cambio="Manual"
                pot="1.4"
              />

              <CustomCard 
                image="/src/images/Captura de tela 2025-12-26 110426.png"
                model="Corolla Cross"
                cat="SUV"
                cambio="Automático"
                pot="2.0"
              />
          </div>
        </div>
      </section>
    </div>
  )
}