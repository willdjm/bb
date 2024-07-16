"use client"

import { SlArrowDown } from "react-icons/sl";

export function RulesAndRegulations() {

return (

<div id="RulesAndRegulations" className="flex flex-col justify-start items-center bg-Teal-600 relative -top-[45rem]">
    <div className='md:justify-center flex flex-col justify-items-center md:max-w-6xl w-full gap-10'>
    </div>
    <div className="relative flex items-center justify-center w-full">
        <picture className=" w-full relative">
            <img src="/bg-regras.webp" className="w-full h-[30rem] relative" alt="" />
        </picture>
        <div className="absolute gap-14 z-20 w-full flex flex-col items-center justify-center">
            <p className="text-blue-950 font-bold text-[35px] uppercase">REGRAS E REGULAMENTOS</p>
            <p className="text-blue-950 text-[17px]">Para garantir uma competição justa e organizada, todos os participantes
                devem seguir as regras e regulamentos da olimpíada:</p>
            <button className="flex flex-col w-full items-center justify-center">
                <a href="#" target="_blank"
                    className="text-blue-950 text-[17px] flex items-center justify-center gap-2">Ver mais
                    <SlArrowDown /></a>
            </button>
        </div>
    </div>
    <div className="relative flex items-center justify-center w-full pt-52">
        <div className="absolute z-0 w-full flex items-start justify-start -top-56 mr-8">
            <picture className="">
                <img src="/img-regras.webp" className="" alt="" />
            </picture>
        </div>
    </div>
    <div className="relative flex items-center justify-center -top-20 ml-20">
        <picture>
            <img src="/img-oportunidades-pos-graduandos.webp" className="" alt="" />
        </picture>
        <div className="absolute top-60 z-20 w-full flex flex-col items-start justify-center max-w-6xl gap-3">
            <p className="text-white uppercase text-[24.62px]">OPORTUNIDADE PARA</p>
            <p className="text-amber-400 font-bold uppercase max-w-2xl text-[50.42px] pt-4">PÓS-GRADUANDOS EM NANOTECNOLOGIA!
            </p>
            <p className="text-white max-w-3xl text-xl pt-4">Se você está cursando <span className="font-bold"> mestrado
                    ou doutorado</span> e possui um projeto
                de pesquisa nesta área fascinante, temos um convite especial para você!</p>
            <p className="text-white max-w-3xl text-xl font-bold">Cadastre-se para o processo de seleção dos
                Embaixadores da ONANO.</p>
            <p className="text-white max-w-3xl text-xl">
                Faça parte da Comissão Organizadora da 1ª edição da Olimpíada Nacional de Nanotecnologia como membro
                VOLUNTÁRIO, tendo a oportunidade de contribuir diretamente para a educação científica nas escolas e nos
                ajudar a promover um evento de grande impacto ensino de ciências e na educação básica do Brasil.
            </p>
        </div>
    </div>
</div>
);
}