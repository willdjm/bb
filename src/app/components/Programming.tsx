"use client"

export function Programming() {

return (

<div className=" relative flex flex-col justify-start items-center">
    <div className="relative flex items-center justify-center -top-52">
        <picture>
            <img src="/img-programacao.webp" className="" alt="" />
        </picture>
        <div className="absolute bottom-44 z-20 w-full flex items-center justify-center">
            <h1 className="text-white font-bold uppercase text-5xl ml-5">INSCREVA-SE!</h1>
        </div>
    </div>
    <div id="Programming"
        className='md:justify-center items-center flex flex-col md:max-w-6xl w-full py-10 relative gap-16 -top-10'>
        <p className="text-blue-950 font-bold text-4xl uppercase">PROGRAMAÇÃO</p>
        <p className="text-Blue-950 text-4xl">Fique atento as datas importantes:</p>
        <div className="flex w-full items-center justify-center gap-48 text-center max-w-2xl relative -bottom-28">
            <div className="flex items-start justify-start gap-5">
                <div
                    className="flex flex-col items-start justify-start text-green-900 border-l-4 border-green-900 pl-5">
                    <p className="text-left font-bold text-4xl">Início</p>
                    <p className="text-left text-xl text-blue-950">das Inscrições:</p>
                    <p className="text-left font-bold text-3xl text-blue-950">12 de Agosto</p>
                </div>
            </div>
            <div className="flex items-start justify-start gap-5">
                <div
                    className="flex flex-col items-start justify-start text-amber-400 border-l-4 border-amber-400 pl-5">
                    <p className="text-left font-bold text-4xl">Fim</p>
                    <p className="text-left text-xl text-blue-950">das Inscrições:</p>
                    <p className="text-left font-bold text-3xl text-blue-950">12 de Outubro</p>
                </div>
            </div>
        </div>
    </div>
    <div className="relative flex items-center justify-center w-full">
        <picture className=" w-full relative">
            <img src="/bg-programacao.webp" className="w-full h-auto relative" alt="" />
        </picture>
        <div id="WhoCanParticipate" className="absolute z-20 w-full flex flex-col items-center justify-center md:max-w-6xl gap-10">
            <p className="text-white font-bold text-4xl uppercase max-w-72 text-center pt-44">QUEM PODE PARTICIPAR</p>
            <div className="flex flex-col w-full items-center justify-center pt-16 gap-4">
                {/* Primeira coluna */}
                <p className="text-white text-lg">A participação é </p>
                <p className="text-white font-bold text-4xl uppercase">TOTALMENTE GRATUITA</p>
                <p className="text-white text-lg">e as inscrições em podem ser realizadas em uma das duas categorias:</p>
            </div>
            <div className="grid grid-cols-2 w-full items-center justify-center gap-16 text-center pt-5">
                <div className="flex items-end justify-end gap-5">
                    <div
                        className="flex flex-col gap-5 items-end justify-end text-white border-r-4 border-amber-400 pr-5">
                        <p className="text-right font-bold text-xl">Categoria 1</p>
                        <p className="text-right text-lg max-w-sm">Estudantes regularmente matriculados do 6º ao 9º anos do <span
                                className="font-bold">Ensino Fundamental.</span></p>
                    </div>
                </div>
                <div className="flex items-start justify-start gap-5">
                    <div
                        className="flex flex-col gap-5 items-start justify-start text-white border-l-4 border-amber-400 pl-5">
                        <p className="text-left font-bold text-xl">Categoria 2</p>
                        <p className="text-left text-lg max-w-sm">Estudantes regularmente matriculados no <span
                                className="font-bold">Ensino Médio</span> (ou Técnico)*</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full items-center justify-center pt-10">
                <a href="" className="text-white text-base">*Desde que não estejam matriculados em algum curso superior.</a>
            </div>
        </div>
    </div>
</div>
);
}