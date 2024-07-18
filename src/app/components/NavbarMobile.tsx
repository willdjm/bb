"use client"

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { BiMenu } from 'react-icons/bi';
import { IoCloseSharp } from 'react-icons/io5';
import { BsThreeDotsVertical } from "react-icons/bs";


export function NavbarMobile() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const sidebarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (sidebarRef.current && !(sidebarRef.current.contains(event.target as Node))) {
                setIsSidebarOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
<>
{/* MOBILE */}
<div className="absolute z-50 bg-transparent md:hidden block w-full" id='Top'>
            {/* Sidebar */}
            <div className={`fixed bg-amber-400 text-white w-full z-50 min-h-screen overflow-y-auto transition-transform
                ${isSidebarOpen ? 'right-0' : 'right-full' } ease-in-out duration-300`} ref={sidebarRef}>
                <div className="">
                    <div className="flex justify-end items-center">

                        <button onClick={closeSidebar}
                            className="text-white hover:text-white focus:outline-none focus:text-white p-4">
                            <IoCloseSharp className="block h-10 w-10 text-white" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="p-8 flex justify-center flex-col gap-5">
                        <Link href='#About' onClick={closeSidebar} className="text-white text-lg">Sobre</Link>
                        <Link href='#ObjectivesAndBenefits' onClick={closeSidebar} className="text-white text-lg">Objetivos</Link>
                        <Link href='#HowItWorks' onClick={closeSidebar} className="text-white text-lg">Como Funciona</Link>
                        <Link href='#Programming' onClick={closeSidebar} className="text-white text-lg">Programação</Link>
                        <Link href='#WhoCanParticipate' onClick={closeSidebar} className="text-white text-lg">Quem pode participar</Link>
                        <Link href='#Contact' onClick={closeSidebar} className="text-white text-lg">Contato</Link>
                    </div>
                </div>
            </div>
            {/* Conteúdo */}


<div className='flex items-end justify-end w-full'>
    
<button onClick={toggleSidebar}
                            className="text-white hover:text-white focus:outline-none focus:text-white p-4">
                                          <BsThreeDotsVertical className="block h-10 w-10 text-white" aria-hidden="true" />
                            </button>
          
</div>
         
        </div>
</>
    );
};
