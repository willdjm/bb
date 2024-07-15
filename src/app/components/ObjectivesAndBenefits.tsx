"use client"

export function ObjectivesAndBenefits() {

return (

<div className=" relative flex flex-col justify-start items-center">
    <div id="ObjectivesAndBenefits"
        className="flex items-center justify-center h-72 w-72 rounded-full bg-gray-100 relative -bottom-56 z-30">
        <h1 className="text-blue-900 font-bold uppercase text-4xl text-center">OBJETIVOS E BENEFÍCIOS</h1>
    </div>
    <div className="relative flex items-center justify-center w-full -bottom-20">
        <picture className=" w-full relative">
            <img src="/bg-objetivos.webp" className="w-full h-auto relative" alt="" />
        </picture>
        <div className="absolute z-20 w-full flex flex-col items-start justify-start md:max-w-6xl gap-10 top-28">
            <div className="grid grid-cols-1 w-full items-start justify-start gap-14 text-center pt-5 relative max-w-[29rem]">
                <div className="flex items-start justify-start gap-3">
                    <div
                        className="flex flex-col gap-5 items-start justify-start">
                        <p className="text-left text-5xl font-medium text-amber-400 uppercase">DIVULGAR</p>
                        <p className="text-left border-b border-amber-400 text-amber-400 text-xl">a ciência e popularizar a nanotecnologia</p>
                        <p className="text-left text-white text-lg">A realização de eventos nacionais como a ONANO é essencial para divulgar essa área da Ciência nas escolas e aproximar a nanotecnologia do público em geral. Ao popularizar a ciência, contribuímos para formar uma sociedade mais informada e engajada com as questões científicas e tecnológicas.</p>
                    </div>
                </div>
                <div className="flex items-start justify-start gap-5">
                    <div
                        className="flex flex-col gap-5 items-start justify-start">
                        <p className="text-left text-5xl font-medium text-amber-400 uppercase">PROMOVER</p>
                        <p className="text-left border-b border-amber-400 text-amber-400 text-xl">a educação científica de qualidade</p>
                        <p className="text-left text-white text-lg">A ONANO foi planejada para ser uma plataforma educativa que apresenta os conceitos e fundamentos da nanotecnologia de maneira interdisciplinar e descomplicada. Seu objetivo é enriquecer a formação acadêmica dos participantes, proporcionando uma experiência educacional abrangente e inovadora.</p>
                    </div>
                </div>
                <div className="flex items-start justify-start gap-5">
                    <div
                        className="flex flex-col gap-5 items-start justify-start">
                        <p className="text-left text-5xl font-medium text-amber-400 uppercase">DESENVOLVER</p>
                        <p className="text-left border-b border-amber-400 text-amber-400 text-xl">habilidades críticas e criativas</p>
                        <p className="text-left text-white text-lg">A participação em competições científicas promove o desenvolvimento de habilidades essenciais, como pensamento crítico, resolução de problemas, criatividade e inovação, contribuindo para formar futuros cientistas e engenheiros capazes de enfrentar os desafios tecnológicos e sociais do nosso país. Ao introduzir estudantes ao fascinante mundo do nano, a ONANO deseja reforçar a importância da alfabetização científica na educação básica e promover reflexões sobre as relações entre Ciência, Tecnologia, Sociedade e Meio Ambiente (CTSA).</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className='md:justify-start flex w-full gap-10 ml-32 relative z-20 -bottom-10'>
        <picture className="">
            <img src="/img-objetivos.webp" className="" alt="" />
        </picture>
        <div id="HowItWorks" className="flex items-center justify-center gap-5 max-w-xl">
            <div
                className="flex flex-col gap-8 items-start justify-start text-blue-900">
                <p className="text-left uppercase font-bold text-4xl">COMO FUNCIONARÁ</p>
                <div className="border-l-8 border-blue-900 pl-2 flex flex-col gap-4">
                    <p className="text-left text-xl ml-3">A OLIMPÍADA NACIONAL DE NANOTECNOLOGIA é <span className="font-bold text-3xl">100% digital e totalmente gratuita.</span></p>
                    <p className="text-left text-xl ml-3">Cada estudante irá percorrer uma trilha de aprendizagem e aprender gradativamente os conceitos da nanociência e nanotecnologia.</p>
                    <p className="text-left text-xl ml-3">Todo o conteúdo programático (currículo) da ONANO foi testado em sala de aula por mais de 7 anos e a metodologia que será aplicada garante que ninguém precisa ter conhecimento prévio em nanotecnologia para mandar bem nessa competição.</p>
                </div>
            </div>
        </div>
    </div>
</div>
);
}