"use client"

export function About() {

return (

<>
<div className="hidden md:flex flex-col justify-center items-center py-16">
    <div className='md:justify-center flex flex-col justify-items-center md:max-w-6xl w-full gap-12'>
        <div className="flex flex-col w-full items-start justify-start relative -top-36 gap-10">
            <p id="About" className="text-blue-950 font-bold uppercase text-4xl">SOBRE A OLIMPÍADA</p>
            <p className="text-blue-950 border-l-[7px] border-Green-900 pl-5 max-w-[51rem] text-xl pt-4">A OLIMPÍADA NACIONAL DE
                NANOTECNOLOGIA (ONANO) é um evento inédito no Brasil, dedicado a promover o conhecimento, popularizar e
                divulgar o fascinante campo da <span className="font-bold">nanociência e os avanços da nanotecnologia.</span></p>
            
            <div>
                <p className="text-blue-950 text-4xl font-bold">Será <span className="text-amber-400 uppercase font-bold">GRATUITA</span> e voltada para estudantes do</p>
                <span className="font-bold text-5xl w-full text-blue-950">ensino fundamental, médio e técnico</span>
                <p className="text-4xl font-bold text-blue-950"> de escolas públicas e privadas.</p>
            </div>
        </div>
        <div className="flex w-full items-start justify-start relative -top-36 gap-8">
            <p className="text-blue-950 max-w-xl text-[19.04px]">Nossa missão é despertar a curiosidade científica e tecnológica e
                estimular o interesse dos jovens pela Ciência, Tecnologia, Engenharia e Matemática (STEM).</p>
            <div className="relative flex items-start justify-start">
                <picture>
                    <img src="/img-about2.webp" className="" alt="" />
                </picture>
                {/* <div
                    className="absolute top-28 z-20 w-full flex-col flex items-start justify-start text-amber-400 max-w-xs ml-14">
                    <span className="font-semibold uppercase text-7xl">PARTICIPE</span>
                    <span className="text-3xl font-normal"> e seja parte de uma</span>
                    <span className="text-5xl font-normal">REVOLUÇÃO</span>
                    <span className="text-2xl font-normal">que moldará o futuro!</span>
                </div> */}
            </div>
        </div>
    </div>
</div>


{/* MOBILE */}
<div className="md:hidden flex flex-col justify-center items-center ">
    <div className='justify-center flex flex-col justify-items-center w-full gap-10'>
        <div className="flex flex-col w-full items-center justify-center relative gap-10 px-4 pt-10">
            <p id="About" className="text-blue-950 font-bold uppercase text-3xl text-center max-w-xs">SOBRE A OLIMPÍADA</p>
            <p className="text-blue-950 border-l-[7px] border-Green-900 pl-5 text-xl ">A OLIMPÍADA NACIONAL DE
                NANOTECNOLOGIA (ONANO) é um evento inédito no Brasil, dedicado a promover o conhecimento, popularizar e
                divulgar o fascinante campo da <span className="font-bold">nanociência e os avanços da nanotecnologia.</span></p>
            
            <div className="">
                <p className="text-blue-950 text-lg font-bold">Será <span className="text-amber-400 uppercase font-bold">GRATUITA</span> e voltada para estudantes do</p>
                <span className="font-bold text-2xl w-full text-blue-950">ensino fundamental, médio e técnico</span>
                <p className="text-lg font-bold text-blue-950"> de escolas públicas e privadas.</p>
            </div>
        </div>
        <div className="flex flex-col w-full items-start justify-start relative gap-8">
            <p className="text-blue-950 text-base px-4">Nossa missão é despertar a curiosidade científica e tecnológica e
                estimular o interesse dos jovens pela Ciência, Tecnologia, Engenharia e Matemática (STEM).</p>
            <div className="relative flex items-start justify-start">
                <picture>
                    <img src="/img-about-mobile.png" className="" alt="" />
                </picture>
            </div>
        </div>
    </div>
</div>
</>
);
}