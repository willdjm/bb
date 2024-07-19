"use client"

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { SlArrowDown } from "react-icons/sl";

export function DepositionsMobile() {

return (

<>
<div id="DepositionsMobile" className="relative md:hidden flex flex-col justify-center items-center h-screen">
    <div className="relative flex items-center justify-center w-full">
        <div className="absolute z-20 w-full flex items-start justify-center ">
            <picture className="w-full h-full">
                <img src="/bg-depoimentos-mobile.png" className="w-full h-full" alt="" />
            </picture>
        </div>
        <picture className="">
            <img src="/bg-depoimentos.webp" className="w-full h-auto relative" alt="" />
        </picture>
        <div className="absolute z-20 w-full flex flex-col items-center justify-center">
            <h3 className="flex items-center justify-center text-white font-bold uppercase text-2xl pb-5 pt-10">DEPOIMENTOS
            </h3>
            <Carousel
    className='w-full max-w-7xl flex pt-10'
    showStatus={false}
    showThumbs={false}
    infiniteLoop
    showArrows={true}
    showIndicators={false}
    renderArrowPrev={(onClickHandler, hasPrev) =>
        hasPrev && (
            <button
                type="button"
                onClick={onClickHandler}
                className="absolute top-1/2 transform -translate-y-1/2 left-2 z-10 bg-transparent border-none cursor-pointer text-amber-400"
            >
                <FaChevronLeft size={40} />
            </button>
        )
    }
    renderArrowNext={(onClickHandler, hasNext) =>
        hasNext && (
            <button
                type="button"
                onClick={onClickHandler}
                className="absolute top-1/2 transform -translate-y-1/2 right-2 z-10 bg-transparent border-none cursor-pointer text-amber-400"
            >
                <FaChevronRight size={40} />
            </button>
        )
    }
>
    <div className="flex items-center justify-center w-full ">
        <div className="flex flex-col items-end justify-center text-white border-l-[6px] border-amber-400 pl-3 max-w-64">
            <p className="text-left text-sm">
                “Participar de uma olimpíada científica mudou minha vida. Aprendi muito e fiz amizades incríveis. Mal posso esperar para competir na OLIMPÍADA NACIONAL DE NANOTECNOLOGIA!”
            </p>
            <p className="text-right text-sm pt-5">João Silva,</p>
            <p className="text-right text-sm">Finalista da Olimpíada de Física.</p>
        </div>
    </div>
    <div className="flex items-center justify-center w-full">
        <div className="flex flex-col items-end justify-center text-white border-l-[6px] border-amber-400 pl-3 max-w-64">
            <p className="text-left text-sm">
                “Participar de uma olimpíada científica mudou minha vida. Aprendi muito e fiz amizades incríveis. Mal posso esperar para competir na OLIMPÍADA NACIONAL DE NANOTECNOLOGIA!”
            </p>
            <p className="text-right text-sm pt-5">Maria Oliveira,</p>
            <p className="text-right text-sm">Vencedora da Olimpíada de Química.</p>
        </div>
    </div>
</Carousel>

        </div>
    </div>

</div>
<div  className="relative md:hidden flex flex-col justify-center items-center px-5 pt-10">

    <div className="flex flex-col items-center justify-center gap-5">
        <div className="text-center">
            <p className="text-blue-950 font-bold text-base uppercase">FAQ</p>
            <p className="text-blue-950 text-base">(Perguntas Frequentes)</p>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-5">
            <div className="">
                <p className="text-blue-950 font-bold text-base text-center">Como faço para me inscrever?</p>
                <p className="text-blue-950 text-base text-center">Acesse o formulário de inscrição online e preencha todos os campos obrigatórios.</p>
            </div>
            <div className="mb-4">
                <p className="text-blue-950 font-bold text-base text-center">Há algum custo para participar?</p>
                <p className="text-blue-950 text-base text-center">A inscrição na OLIMPÍADA NACIONAL DE NANOTECNOLOGIA é <span className='underline'>gratuita.</span></p>
            </div>
            <button className="w-full">
                <a href="#" target="_blank" className="text-blue-950 text-base flex items-center justify-center gap-2">Ver mais <SlArrowDown /></a>
            </button>
        </div>
    </div>
</div>
</>
);
}

