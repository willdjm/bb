
export function Footer() {

return (

<footer className="bg-blue-950 flex justify-center items-center py-10 px-2 lg:px-0">
<div className='md:justify-between flex flex-col justify-items-center md:max-w-6xl w-full gap-3'>

    <div className='grid lg:flex lg:items-baseline w-full lg:justify-center'>
        <span className="lg:text-[15px] text-white text-center">Copyright 2024   : :   Onano - Olímpíada Nacional de Nanotecnologia.   : :   Todos os direitos reservados.</span>
    </div>
    <div className='flex items-baseline justify-center gap-5 w-auto'>
                <a className='' href="https://sacorp.tec.br/?utm_source=www.onamo.com.br&utm_medium=banner&utm_campaign=slogan" target='_blank' rel="noreferrer">
                    <picture>
                        <img src="/logo-sacorp.svg" alt="logo Sacorp" width={100} height={100} loading="lazy" className='lg:w-16 w-14' />
                    </picture>
                </a>
                <a href="https://www.gukenz.com.br/" target='_blank' rel="noreferrer">
                    <picture>
                        <img src="/logo-gukenz.svg" alt="logo Gukenz" width={100} height={100} className='lg:w-16 w-14' />
                    </picture>
                </a>
            </div>
</div>
</footer>
);
}