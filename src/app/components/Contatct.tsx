"use client"

export function Contact() {

return (

<>
<div id="Contact" className="md:flex hidden flex-col justify-center items-center bg-Teal-600 py-10 md:py-0 relative z-20">
    <div className='md:justify-center flex flex-col justify-items-center md:max-w-6xl w-full gap-10'>
        <div className="relative flex items-center justify-center -top-56">
            <picture>
                <img src="/img-contact.webp" className="" alt="" />
            </picture>
            {/* <div className="absolute top-20 z-20 w-full flex items-center justify-center">
                <h1 className="text-white font-bold uppercase text-5xl">Contato</h1>
            </div> */}
        </div>
        <div className="flex flex-col w-full items-center justify-center relative -top-28">
            <p className="text-blue-950 font-bold text-base">Tem alguma dúvida ou precisa de mais informações?</p>
            <p className="text-blue-950 text-base">Entre em contato conosco!</p>
            <p className="text-blue-950 mt-10 text-base">E-mail: <a href="mailto:onanobrasil@gmail.com">onanobrasil@gmail.com</a></p>
        </div>
    </div>
</div>

{/* MOBILE */}
<div id="Contact" className="md:hidden flex flex-col justify-center items-center bg-Teal-600 py-10 md:py-0 relative z-20">
    <div className='md:justify-center flex flex-col justify-items-center md:max-w-6xl w-full gap-10'>
        <div className="relative flex items-center justify-center -top-44 px-10">
            <picture>
                <img src="/img-contact.webp" className="" alt="" />
            </picture>
            {/* <div className="absolute top-20 z-20 w-full flex items-center justify-center">
                <h1 className="text-white font-bold uppercase text-5xl">Contato</h1>
            </div> */}
        </div>
        <div className="flex flex-col w-full items-center justify-center relative -top-28 px-5">
            <p className="text-blue-950 font-bold text-lg text-center">Tem alguma dúvida ou precisa de mais informações?</p>
            <p className="text-blue-950 text-lg">Entre em contato conosco!</p>
            <p className="text-blue-950 mt-10 text-lg">E-mail: <a href="mailto:onanobrasil@gmail.com">onanobrasil@gmail.com</a></p>
        </div>
    </div>
</div>
</>
);
}