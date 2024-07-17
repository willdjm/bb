"use client"

export function OurPartnersAndSponsors() {

return (

<div id="OurPartnersAndSponsors" className=" relative flex flex-col justify-start items-center -top-[55rem] h-[28rem]">
    <div className="relative flex items-center justify-center w-full">
        <picture className=" w-full relative">
            <img src="/bg-parceiros.webp" className="w-full h-[75rem] relative" alt="" />
        </picture>
        <div className="absolute z-20 w-full gap-12 flex flex-col items-center justify-center md:max-w-6xl top-44">
            <h2 className="text-white font-bold uppercase text-4xl pt-28">NOSSOS PARCEIROS E PATROCINADORES</h2>
            <div className="w-full flex flex-col items-center justify-center">
                <p className="flex items-center justify-center mb-2 text-base text-white">Apoio:</p>
                <div className="flex w-full items-center justify-center gap-8 bg-white max-w-3xl rounded-lg h-32">
                    <picture>
                        <img src="/apoio-cnpq.webp" className="" alt="" />
                    </picture>
                    <picture>
                        <img src="/apoio-governo.webp" className="" alt="" />
                    </picture>
                    <picture>
                        <img src="/apoio-mackenzie.webp" className="" alt="" />
                    </picture>
                </div>
            </div>
            <div className="w-full flex flex-col items-center justify-center ">
                <p className="flex items-center justify-center mb-2 text-base text-white">Parceiros:</p>
                <div className="flex w-full items-center justify-center gap-8 bg-white max-w-3xl rounded-lg h-32">
                    <picture>
                        <img src="/parceiro-ensinano.webp" className="" alt="" />
                    </picture>
                    <picture>
                        <img src="/parceiro-medalhei.webp" className="" alt="" />
                    </picture>
                </div>
            </div>
            <div className="w-full flex flex-col items-center justify-center ">
                <p className="flex items-center justify-center mb-2 text-base text-white">Patrocinadores:</p>
                <div className="flex w-full items-center justify-center gap-8 bg-white max-w-3xl rounded-lg h-32">
                    <picture>
                        <img src="" className="" alt="" />
                    </picture>
                    <picture>
                        <img src="" className="" alt="" />
                    </picture>
                </div>
            </div>
        </div>
    </div>
</div>
);
}