"use client"

export function About() {

return (

<div id="About" className=" flex flex-col justify-center items-center py-16">
    <div className='md:justify-center flex flex-col justify-items-center md:max-w-6xl w-full gap-10'>
        <div className="flex flex-col w-full items-start justify-start relative -top-10 gap-10">
            <p className="text-blue-950 font-bold uppercase text-4xl">SOBRE A OLIMPÍADA</p>
            <p className="text-Blue-950 border-l-4 border-Green-900 pl-2 max-w-2xl text-xl">A OLIMPÍADA NACIONAL DE
                NANOTECNOLOGIA (ONANO) é um evento inédito no Brasil, dedicado a promover o conhecimento, popularizar e
                divulgar o fascinante campo da nanociência e os avanços da nanotecnologia.</p>
            
            <div>
                <p className="text-Blue-950 text-4xl max-w-4xl pt-10">Será <span className="text-amber-400 uppercase font-bold">GRATUITA</span> e voltada para estudantes do</p>
                <span className="font-bold text-5xl w-full text-Blue-950">ensino fundamental, médio e técnico</span>
                <p className="text-4xl text-blue-950"> de escolas públicas e privadas.</p>
            </div>
        </div>
        <div className="flex w-full items-start justify-start relative -top-14 gap-8 pt-20">
            <p className="text-Blue-950 max-w-lg text-xl">Nossa missão é despertar a curiosidade científica e tecnológica e
                estimular o interesse dos jovens pela Ciência, Tecnologia, Engenharia e Matemática (STEM).</p>
            <div className="relative flex items-start justify-start">
                <picture>
                    <img src="/img-about2.webp" className="" alt="" />
                </picture>
                <div
                    className="absolute top-28 z-20 w-full flex-col flex items-start justify-start text-amber-400 max-w-xs ml-14">
                    <span className="font-semibold uppercase text-7xl">PARTICIPE</span>
                    <span className="text-3xl font-normal"> e seja parte de uma</span>
                    <span className="text-5xl font-normal">REVOLUÇÃO</span>
                    <span className="text-2xl font-normal">que moldará o futuro!</span>
                </div>
            </div>
        </div>
    </div>
</div>
);
}