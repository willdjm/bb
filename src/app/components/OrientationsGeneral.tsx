"use client"

export function OrientationsGeneral() {

return (

<div id="OrientationsGeneral" className=" relative flex flex-col justify-start items-center -top-80">
    <div className="relative flex items-center justify-center w-full">
        <picture className=" w-full relative">
            <img src="/bg-orientacoes.webp" className="w-full h-auto relative" alt="" />
        </picture>
        <div className="absolute z-20 w-full flex flex-col items-center justify-center md:max-w-6xl gap-10 top-28">
            <p className="text-white font-bold text-[39.69px] uppercase text-center">ORIENTAÇÕES GERAIS</p>
            <div className="grid grid-cols-2 w-full items-start justify-center gap-16 text-center pt-5 relative top-3">
                <div className="flex items-start justify-start gap-5">
                    <div
                        className="flex flex-col gap-2 items-start justify-start text-white">
                        <p className="text-left font-semibold border-l-[6px] border-amber-400 pl-3 uppercase text-[23px]">AULAS PREPARATÓRIAS EXCLUSIVAS</p>
                        <p className="text-left text-[17px] pt-2">Você terá acesso a aulas preparatórias exclusivas, ministradas pelo Prof. Delmárcio Gomes, especialista em ensino e divulgação da nanociência. Aprendendo sobre nanotecnologia de uma forma descomplicada e interdisciplinar.</p>
                        <p className="text-left text-[17px]">E o melhor, todo o contéudo das aulas será usado diretamente nas questões da olimpíada! Isso mesmo, cada aula preparatória foi planejada para garantir que você esteja pronto para brilhar na competição!</p>
                    </div>
                </div>
                <div className="flex items-start justify-start gap-5">
                    <div
                        className="flex flex-col gap-2 items-start justify-start text-white">
                        <p className="text-left border-l-[6px] border-amber-400 pl-3 uppercase text-[23px]">TRILHA DE <span className="font-bold">APRENDIZAGEM COMPLETA</span></p>
                        <p className="text-left text-[17px] pt-2">A ONANO é mais do que uma competição - é uma trilha de aprendizagem completa!</p>
                        <p className="text-left text-[17px]">Onde cada etapa da olimpíada será acompanhada de aulas preparatórias e simulados, garantindo que você se sinta seguro e bem-preparado para os desafios e questões que serão propostas.</p>
                    </div>
                </div>
                <div className="flex items-start justify-start gap-5">
                    <div
                        className="flex flex-col gap-2 items-start justify-start text-white">
                        <p className="text-left border-l-[6px] border-amber-400 pl-3 uppercase text-[23px]">BASEADO NO <span className="font-bold">CURRÍCULO ESCOLAR</span></p>
                        <p className="text-left text-[17px] pt-2">As questões da olimpíada serão fundamentadas nos conceitos que você já aprendeu no ensino médio nas disciplinas de Química, Física, Biologia e Matemática.</p>
                        <p className="text-left text-[17px]">Não sendo necessário ter conhecimento prévio em nanociência. Vamos usar temas de nanotecnologia apenas como contexto para aplicar os conhecimentos que você já possui.</p>
                    </div>
                </div>
                <div className="flex items-start justify-start gap-5">
                    <div
                        className="flex flex-col gap-2 items-start justify-start text-white">
                        <p className="text-left font-semibold border-l-[6px] border-amber-400 pl-3 uppercase text-[23px]">SIMULADOS <span className="font-normal">PARA PRATICAR</span></p>
                        <p className="text-left text-[17px] pt-2">Para garantir que você esteja realmente preparado, oferecemos simulados que imitam as provas da olimpíada. </p>
                        <p className="text-left text-[17px]">Será a oportunidade perfeita para você praticar, testar seus conhecimentos e se familiarizar com o formato das questões, para que o aluno se sinta mais confiante e seguro!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
);
}