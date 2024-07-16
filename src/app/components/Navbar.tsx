"use client"

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { BiMenu } from 'react-icons/bi';
import { IoCloseSharp } from 'react-icons/io5';

export function Navbar() {
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
        <div className="bg-blue-950 py-5" id='Top'>
            {/* Sidebar */}
            <div className={`fixed bg-blue-950 text-white w-full z-50 min-h-screen overflow-y-auto transition-transform
                ${isSidebarOpen ? 'right-0' : 'right-full' } ease-in-out duration-300`} ref={sidebarRef}>
                <div className="p-10">
                    <div className="flex justify-between items-center mb-4">
                        <picture>
                            <img src="/logo.webp" className="w-40" alt="" />
                        </picture>
                        <button onClick={closeSidebar}
                            className="text-white hover:text-white focus:outline-none focus:text-white">
                            <IoCloseSharp className="block h-10 w-10 text-white" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-8 flex justify-center flex-col gap-5">
                        <Link href='#About' onClick={closeSidebar} className="text-white text-[17px]">Sobre</Link>
                        <Link href='#ObjectivesAndBenefits' onClick={closeSidebar} className="text-white text-[17px]">Objetivos</Link>
                        <Link href='#HowItWorks' onClick={closeSidebar} className="text-white text-[17px]">Como Funciona</Link>
                        <Link href='#Programming' onClick={closeSidebar} className="text-white text-[17px]">Programação</Link>
                        <Link href='#WhoCanParticipate' onClick={closeSidebar} className="text-white text-[17px]">Quem pode participar</Link>
                        <Link href='#Contact' onClick={closeSidebar} className="text-white text-[17px]">Contato</Link>
                    </div>
                </div>
            </div>
            {/* Conteúdo */}
            <div className="flex-1 flex flex-col overflow-hidden w-full">
                <div className="bg-blue-950 text-white shadow">
                    <div className="container mx-auto max-w-6xl flex items-center justify-center">
                        <div className='flex items-center justify-center p-2 md:hidden'>
                            <picture>
                                <img src="/logo.webp" className="" alt="" />
                            </picture>
                        </div>
                        <div className="flex justify-end items-center py-4 px-2 w-full">
                            {/* Itens do menu */}
                            <div className="space-x-4 items-center justify-center hidden md:flex">
                                <Link href='#About' className="text-white">Sobre</Link>
                                <Link href='#ObjectivesAndBenefits' className="text-white">Objetivos</Link>
                                <Link href='#HowItWorks' className="text-white">Como Funciona</Link>
                                <Link href='#Programming' className="text-white">Programação</Link>
                                <Link href='#WhoCanParticipate' className="text-white">Quem pode participar</Link>
                                <Link href='#Contact' className="text-white">Contato</Link>
                            </div>
                            <button onClick={toggleSidebar}
                                className="text-white hover:text-whitebar flex items-center justify-center ml-5">
                                          <BiMenu className="block h-12 w-12 text-white" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
