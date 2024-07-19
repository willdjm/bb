import React, { useState, useEffect } from 'react';
import { GoMoveToTop } from 'react-icons/go';
import Link from 'next/link';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Função para verificar a posição de rolagem da página
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Exibir o botão quando a posição de rolagem for maior que 400 pixels
      if (currentScrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Adiciona um event listener para o evento de rolagem
    window.addEventListener('scroll', handleScroll);

    // Remove o event listener ao desmontar o componente para evitar vazamentos de memória
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // O array vazio assegura que o useEffect só será executado uma vez, sem dependências

  // Renderiza o botão somente se isVisible for true
  return (
    <>
      {isVisible && (
        <div className="fixed right-5 bottom-3 md:group z-50">
          <Link href="/" className="flex items-center justify-center text-blue-600 bg-slate-100 rounded-lg w-14 h-14 hover:bg-slate-200 cursor-pointer">
              <GoMoveToTop size={30} />
          </Link>
        </div>
      )}
    </>
  );
}
