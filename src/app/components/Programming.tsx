"use client"

export function Programming() {

return (

<>
<div className="relative hidden md:flex flex-col justify-start items-center">
    <div className="relative flex items-center justify-center -top-[35rem]">
        <picture>
            <img src="/img-programacao.webp" className="" alt="" />
        </picture>
        {/* <div className="absolute bottom-44 z-20 w-full flex items-center justify-center">
            <h1 className="text-white font-bold uppercase text-5xl ml-5">INSCREVA-SE!</h1>
        </div> */}
    </div>
    <div id="Programming"
        className='md:justify-center items-center flex flex-col md:max-w-6xl w-full py-10 relative gap-10 -top-[32rem]'>
        <p className="text-blue-950 font-bold text-4xl uppercase">PROGRAMAÇÃO</p>
        <p className="text-blue-950 text-3xl">Fique atento as datas importantes:</p>
        <div className="flex w-full items-center justify-center gap-48 text-center max-w-3xl relative -bottom-10">
            <div className="flex items-start justify-start">
                <div
                    className="flex flex-col items-start justify-start text-green-900 border-l-[6px] border-green-900 pl-7">
                    <p className="text-left font-bold text-3xl">Início</p>
                    <p className="text-left text-xl text-blue-950">das Inscrições:</p>
                    <p className="text-left font-bold text-2xl text-blue-950">12 de Agosto</p>
                </div>
            </div>
            <div className="flex items-start justify-start">
                <div
                    className="flex flex-col items-start justify-start text-amber-400 border-l-[6px] border-amber-400 pl-7">
                    <p className="text-left font-bold text-3xl">Fim</p>
                    <p className="text-left text-xl text-blue-950">das Inscrições:</p>
                    <p className="text-left font-bold text-2xl text-blue-950">12 de Outubro</p>
                </div>
            </div>
        </div>
    </div>
    <div className="relative flex items-center justify-center -top-[35rem]">
        <picture>
            <img src="/bg-programacao.webp" className="" alt="" />
        </picture>
        <div className="absolute z-20 w-full flex flex-col items-center justify-center md:max-w-6xl gap-16">
            <p id="WhoCanParticipate" className="text-white font-bold text-4xl uppercase max-w-72 text-center pt-52">QUEM PODE PARTICIPAR</p>
            <div className="flex flex-col w-full items-center justify-center gap-3">
                {/* Primeira coluna */}
                <p className="text-white text-base">A participação é </p>
                <p className="text-white font-bold text-4xl uppercase">TOTALMENTE GRATUITA</p>
                <p className="text-white text-base">e as inscrições em podem ser realizadas em uma das duas categorias:</p>
            </div>
            <div className="grid grid-cols-2 w-full items-center justify-center gap-20 text-center ">
                <div className="flex items-end justify-end gap-5">
                    <div
                        className="flex flex-col gap-5 items-end justify-end text-white border-r-[6px] border-amber-400 pr-5">
                        <p className="text-right font-bold text-[29px]">Categoria 1</p>
                        <p className="text-right text-[17px] max-w-[23rem]">Estudantes regularmente matriculados do 6º ao 9º anos do <span
                                className="font-bold">Ensino Fundamental.</span></p>
                    </div>
                </div>
                <div className="flex items-start justify-start gap-5">
                    <div
                        className="flex flex-col gap-5 items-start justify-start text-white border-l-[6px] border-amber-400 pl-5">
                        <p className="text-left font-bold text-[29px]">Categoria 2</p>
                        <p className="text-left text-[17px] max-w-[23rem]">Estudantes regularmente matriculados no <span
                                className="font-bold">Ensino Médio</span> (ou Técnico)*</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full items-center justify-center">
                <a href="" className="text-white text-[15px]">*Desde que não estejam matriculados em algum curso superior.</a>
            </div>
        </div>
    </div>
</div>



{/* MOBILE */}
<div className="md:hidden relative flex flex-col justify-start items-center h-screen">
    <div id="Programming"
        className='md:justify-center items-center flex flex-col w-full py-10 relative gap-20'>
        <p className="text-blue-950 font-bold text-3xl uppercase text-center">PROGRAMAÇÃO</p>
        <p className="text-blue-950 text-2xl text-center">Fique atento as datas importantes:</p>
        <div className="flex flex-col items-center justify-center gap-10 text-center">
            <div className="flex items-start justify-start w-full">
                <div
                    className="flex flex-col items-start justify-start text-green-900 border-l-[6px] border-green-900 pl-7">
                    <p className="text-left font-bold text-3xl">Início</p>
                    <p className="text-left text-xl text-blue-950">das Inscrições:</p>
                    <p className="text-left font-bold text-2xl text-blue-950">12 de Agosto</p>
                </div>
            </div>
            <div className="flex items-start justify-start w-full">
                <div
                    className="flex flex-col items-start justify-start text-amber-400 border-l-[6px] border-amber-400 pl-7">
                    <p className="text-left font-bold text-3xl">Fim</p>
                    <p className="text-left text-xl text-blue-950">das Inscrições:</p>
                    <p className="text-left font-bold text-2xl text-blue-950">12 de Outubro</p>
                </div>
            </div>
        </div>
    </div>
</div>


<div className="md:hidden relative flex flex-col justify-start items-center">
    <div className="relative flex items-center justify-center">
        <picture>
            <img src="/bg-programacao-mobile.png" className="" alt="" />
        </picture>
        <div className="absolute z-20 w-full flex flex-col items-center justify-center px-5 gap-8">
            <p id="WhoCanParticipate" className="text-white font-bold text-3xl uppercase text-center pt-5">QUEM PODE PARTICIPAR</p>
            <div className="flex flex-col w-full items-center justify-center gap-2">
                {/* Primeira coluna */}
                <p className="text-white text-base text-center">A participação é </p>
                <p className="text-white font-bold text-2xl uppercase text-center">TOTALMENTE GRATUITA</p>
                <p className="text-white text-base text-center">e as inscrições em podem ser realizadas em uma das duas categorias:</p>
            </div>
            <div className="flex flex-col w-full items-center justify-center text-center gap-10 px-5">
                <div className="flex items-end justify-end gap-5">
                    <div
                        className="flex flex-col gap-5 items-start justify-start text-white border-l-[6px] border-amber-400 pl-5">
                        <p className="text-left font-bold text-2xl">Categoria 1</p>
                        <p className="text-left text-lg">Estudantes regularmente matriculados do 6º ao 9º anos do <span
                                className="font-bold">Ensino Fundamental.</span></p>
                    </div>
                </div>
                <div className="flex items-start justify-start gap-5">
                    <div
                        className="flex flex-col gap-5 items-start justify-start text-white border-l-[6px] border-amber-400 pl-5">
                        <p className="text-left font-bold text-2xl">Categoria 2</p>
                        <p className="text-left text-lg">Estudantes regularmente matriculados no <span
                                className="font-bold">Ensino Médio</span> (ou Técnico)*</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full items-center justify-center px-5">
                <a href="" className="text-white text-sm text-left">*Desde que não estejam matriculados em algum curso superior.</a>
            </div>
        </div>
    </div>
</div>

</>
);
}