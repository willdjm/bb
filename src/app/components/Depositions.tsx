"use client"

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { SlArrowDown } from "react-icons/sl";

export function Depositions() {

return (

<div id="Depositions" className=" relative flex flex-col justify-center items-center">
    <div className="relative flex items-center justify-center w-full">
        <div className="absolute z-20 w-full flex items-start justify-end -top-32 mr-8">
            <picture className="">
                <img src="/img-depoimentos.webp" className="" alt="" />
            </picture>
        </div>
        <picture className=" w-full relative">
            <img src="/bg-depoimentos.webp" className="w-full h-auto relative" alt="" />
        </picture>


        <div className="absolute z-20 w-full gap-10 flex flex-col items-center justify-center top-36">
                    <h3 className="flex items-start justify-center text-white font-bold uppercase text-4xl">DEPOIMENTOS</h3>

                    <Carousel
                        className='w-full max-w-[90rem] flex pt-10'
                        showStatus={false}
                        showThumbs={false}
                        infiniteLoop
                        autoPlay
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
                            <div className="flex items-center justify-center w-full gap-10">
                                <div className="flex flex-col items-end justify-center text-white border-l-4 border-amber-400 pl-5 max-w-lg">
                                    <p className="text-left text-xl">“Participar de uma olimpíada científica mudou minha vida. Aprendi muito e fiz amizades incríveis. Mal posso esperar para competir na OLIMPÍADA NACIONAL DE NANOTECNOLOGIA!”</p>
                                    <p className="text-right text-lg pt-5">João Silva,</p>
                                    <p className="text-right text-lg">Finalista da Olimpíada de Física.</p>
                                </div>
                                <div className="flex flex-col items-end justify-center text-white border-l-4 border-amber-400 pl-5 max-w-lg">
                                    <p className="text-left text-xl">“Participar de uma olimpíada científica mudou minha vida. Aprendi muito e fiz amizades incríveis. Mal posso esperar para competir na OLIMPÍADA NACIONAL DE NANOTECNOLOGIA!”</p>
                                    <p className="text-right text-lg pt-5">Maria Oliveira,</p>
                                    <p className="text-right text-lg">Vencedora da Olimpíada de Química.</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-center w-full gap-10">
                                <div className="flex flex-col items-end justify-center text-white border-l-4 border-amber-400 pl-5 max-w-lg">
                                    <p className="text-left text-xl">“Participar de uma olimpíada científica mudou minha vida. Aprendi muito e fiz amizades incríveis. Mal posso esperar para competir na OLIMPÍADA NACIONAL DE NANOTECNOLOGIA!”</p>
                                    <p className="text-right text-lg pt-5">Ana Santos,</p>
                                    <p className="text-right text-lg">Finalista da Olimpíada de Matemática.</p>
                                </div>
                                <div className="flex flex-col items-end justify-center text-white border-l-4 border-amber-400 pl-5 max-w-lg">
                                    <p className="text-left text-xl">“Participar de uma olimpíada científica mudou minha vida. Aprendi muito e fiz amizades incríveis. Mal posso esperar para competir na OLIMPÍADA NACIONAL DE NANOTECNOLOGIA!”</p>
                                    <p className="text-right text-lg pt-5">Carlos Silva,</p>
                                    <p className="text-right text-lg">Vencedor da Olimpíada de Biologia.</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-center w-full gap-10">
                                <div className="flex flex-col items-end justify-center text-white border-l-4 border-amber-400 pl-5 max-w-lg">
                                    <p className="text-left text-xl">“Participar de uma olimpíada científica mudou minha vida. Aprendi muito e fiz amizades incríveis. Mal posso esperar para competir na OLIMPÍADA NACIONAL DE NANOTECNOLOGIA!”</p>
                                    <p className="text-right text-lg pt-5">João Silva,</p>
                                    <p className="text-right text-lg">Finalista da Olimpíada de Física.</p>
                                </div>
                                <div className="flex flex-col items-end justify-center text-white border-l-4 border-amber-400 pl-5 max-w-lg">
                                    <p className="text-left text-xl">“Participar de uma olimpíada científica mudou minha vida. Aprendi muito e fiz amizades incríveis. Mal posso esperar para competir na OLIMPÍADA NACIONAL DE NANOTECNOLOGIA!”</p>
                                    <p className="text-right text-lg pt-5">Maria Oliveira,</p>
                                    <p className="text-right text-lg">Vencedora da Olimpíada de Química.</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-center w-full gap-10">
                                <div className="flex flex-col items-end justify-center text-white border-l-4 border-amber-400 pl-5 max-w-lg">
                                    <p className="text-left text-xl">“Participar de uma olimpíada científica mudou minha vida. Aprendi muito e fiz amizades incríveis. Mal posso esperar para competir na OLIMPÍADA NACIONAL DE NANOTECNOLOGIA!”</p>
                                    <p className="text-right text-lg pt-5">Ana Santos,</p>
                                    <p className="text-right text-lg">Finalista da Olimpíada de Matemática.</p>
                                </div>
                                <div className="flex flex-col items-end justify-center text-white border-l-4 border-amber-400 pl-5 max-w-lg">
                                    <p className="text-left text-xl">“Participar de uma olimpíada científica mudou minha vida. Aprendi muito e fiz amizades incríveis. Mal posso esperar para competir na OLIMPÍADA NACIONAL DE NANOTECNOLOGIA!”</p>
                                    <p className="text-right text-lg pt-5">Carlos Silva,</p>
                                    <p className="text-right text-lg">Vencedor da Olimpíada de Biologia.</p>
                                </div>
                            </div>
                    </Carousel>
                </div>


    </div>



    <div className='md:justify-center items-center flex flex-col py-36 md:max-w-6xl w-full gap-16'>
        <div className="flex flex-col w-full items-center justify-center">
            <p className="text-blue-950 font-bold text-4xl uppercase">FAQ</p>
            <p className="text-Blue-950 text-4xl">(Perguntas Frequentes)</p>
        </div>
        <div className="flex flex-col w-full items-center justify-center">
            <p className="text-blue-950 font-bold text-xl">Como faço para me inscrever?</p>
            <p className="text-Blue-950 text-xl">Acesse o formulário de inscrição online e preencha todos os campos
                obrigatórios.</p>
        </div>
        <div className="flex flex-col w-full items-center justify-center">
            <p className="text-blue-950 font-bold text-xl">Há algum custo para participar?</p>
            <p className="text-Blue-950 text-xl">A inscrição na OLIMPÍADA NACIONAL DE NANOTECNOLOGIA é gratuita.</p>
        </div>
        <button className="flex flex-col w-full items-center justify-center">
            <a href="https://www.google.com.br" target="_blank"
                className="text-Blue-950 text-lg flex items-center justify-center gap-2">Ver mais
                <SlArrowDown /></a>
        </button>
    </div>
</div>
);
}