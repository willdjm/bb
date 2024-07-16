"use client"

export function InformationsForEducators() {

return (

<div id="InformationsForEducators" className="flex flex-col justify-center items-center w-full relative -top-[45rem]">
    <div className='md:justify-center flex flex-col justify-items-center md:max-w-6xl w-full gap-10 py-28'>
        <h3 className="text-amber-400 font-bold text-[39.69px] uppercase text-center">INFORMAÇÕES PARA EDUCADORES</h3>
        <div className="flex flex-col w-full items-center justify-center gap-10 text-center">
<div>
<p className="text-center text-xl">Queremos convidá-lo(a) a se cadastrar e aproveitar uma série de</p>
<span className="font-bold text-xl"> benefícios exclusivos para você e seus alunos.</span>
</div>
<div>
<p className="text-center max-w-[43rem] text-xl">Nossa missão é promover o ensino da nanotecnologia nas escolas e
                <span className="font-bold"> capacitar os educadores</span> para que possam explorar esse campo fascinante de forma eficiente e inspiradora.
            </p>
</div>
        </div>
        <div className="grid grid-cols-2 w-full items-start justify-start text-blue-950">
            <div className="flex items-start justify-start gap-10">
                <div className="flex items-center justify-center">
                    <picture className="h-[98px] w-[98px] bg-amber-400 rounded-full flex items-center justify-center">
                        <img src="/icon-cursocapacitacao.webp" className="" alt="" />
                    </picture>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start">
                    <p className="text-left font-bold text-[17px]">CURSOS DE CAPACITAÇÃO:</p>
                    <p className="text-left text-[17px] max-w-[23rem]">Participe de cursos online focados no ensino da nanotecnologia, elaborados
                        pelo Prof.
                        Delmárcio Gomes e especialistas da área. </p>
                    <p className="text-left text-[17px] max-w-[22rem]">Você terá acesso a materiais didáticos, planos de aula e atividades
                        práticas que podem ser
                        facilmente integrados ao currículo escolar.</p>
                </div>
            </div>
            <div className="flex items-start justify-start gap-10">
                <div className="flex items-center justify-center">
                <picture className="h-[98px] w-[98px] bg-amber-400 rounded-full flex items-center justify-center">
                <img src="/icon-livecomespecialistas.webp" className="" alt="" />
                    </picture>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start">
                    <p className="text-left font-bold text-[17px]">LIVE COM ESPECIALISTAS:</p>
                    <p className="text-left text-[17px] max-w-[42rem] w-full">Oportunidade de assistir a lives exclusivas com profissionais da indústria,
                        pesquisadores nacionais renomados e alunos de pós-graduação que estão no ramo da pesquisa da
                        nanotecnologia.</p>
                    <p className="text-left text-[17px]">Essas sessões oferecerão insights valiosos e responderão a perguntas
                        relevantes sobre o o tema.</p>
                </div>
            </div>
            <div className="flex items-start justify-start gap-10 pt-10">
                <div className="flex items-center justify-center">
                <picture className="h-[98px] w-[98px] bg-amber-400 rounded-full flex items-center justify-center">
                <img src="/icon-reconhecimento.webp" className="" alt="" />
                    </picture>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start">
                    <p className="text-left font-bold text-[17px]">REDE DE CONTATOS:</p>
                    <p className="text-left text-[17px] max-w-[22rem]">Conecte-se com outros educadores, pesquisadores e profissionais da
                        indústria.</p>
                    <p className="text-left text-[17px] max-w-[22rem]">Amplie sua rede de contatos, trocando experiências e ideias para enriquecer
                        seu ensino e o aprendizado de seus alunos.</p>
                </div>
            </div>
            <div className="flex items-start justify-start gap-10 pt-10">
                <div className="flex items-center justify-center">
                <picture className="h-[98px] w-[98px] bg-amber-400 rounded-full flex items-center justify-center">
                <img src="/icon-reconhecimento.webp" className="" alt="" />
                    </picture>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start">
                    <p className="text-left font-bold text-[17px]">RECONHECIMENTO E CERTIFICAÇÃO:</p>
                    <p className="text-left text-[17px]">Ao participar dos cursos de capacitação, você receberá certificados que
                        atestam sua participação e dedicação ao ensino da nanotecnologia.</p>
                    <p className="text-left text-[17px]">Esses certificados podem enriquecer seu currículo e abrir portas para novas
                        oportunidades.</p>
                </div>
            </div>
        </div>
    </div>
    <div className="relative flex items-center justify-start w-full">
        <picture className=" w-full relative">
            <img src="/bg-informacoes.webp" className="w-full h-auto relative" alt="" />
        </picture>
        <div className="absolute -top-5 z-20 w-[97rem] flex">
            <picture className="w-full relative">
                <img src="/img-informacoes.webp" className="w-full h-auto relative" alt="" />
            </picture>
            <div className="absolute ml-20 top-24 z-20 w-full flex flex-col items-center justify-center max-w-6xl gap-5">
                <h3 className="text-black font-bold uppercase text-[22px] text-center">Como se cadastrar?</h3>
                <p className="text-black max-w-md text-[17px] text-center">Para se inscrever, basta clicar no botão abaixo e
                    preencher o formulário com suas informações.</p>
                <p className="text-black max-w-lg text-[17px] text-center">Nossa equipe entrará em contato com você para
                    fornecer mais detalhes sobre os cursos e eventos disponíveis.
                </p>
                <button className="py-2 px-6 font-semibold bg-green-900 text-white rounded-xl text-[17px] text-center">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdfzakKCipVM9q33nUQLI25IMSS4nUH1kUjmDyxCbU2K82VCA/viewform" target="_blank">QUERO ME CADASTRAR</a>
                </button>
            </div>
        </div>
    </div>
</div>
);
}