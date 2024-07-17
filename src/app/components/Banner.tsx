"use client"

export function Banner() {

return (

<div id="" className="relative flex flex-col justify-start items-center">
    <div className="relative flex items-center justify-center w-full">
        <picture className=" w-full relative">
            <img src="/banner.png" className="w-full h-auto relative" alt="" />
        </picture>
        {/* <div className="absolute top-[36rem] ml-10 z-20 w-full flex items-start justify-start max-w-6xl gap-[67px]">
            <h3 className="text-white uppercase text-3xl w-60 flex flex-col gap-4 relative">ENTRE NESTE <span
                    className="text-white font-bold text-6xl">SUPER DESAFIO</span></h3>
            <h3 className="text-white text-xl w-32 text-justify flex flex-col">explorando <span className="text-2xl"> o
                    mundo</span><span className="text-white font-bold uppercase text-4xl">NANO</span></h3>
        </div> */}
    </div>
    {/* <div
        className="absolute z-40 gap-5 flex items-center justify-center w-full bg-gradient-to-b from-blue-950 blue to-blue-950/5">
        <picture className="">
            <img src="/logo.webp" className="" alt="" />
        </picture>
        <p className="text-amber-400 font-bold uppercase text-2xl max-w-xs">OLIMPÍADA NACIONAL DE NANOTECNOLOGIA</p>
    </div> */}
</div>
);
}