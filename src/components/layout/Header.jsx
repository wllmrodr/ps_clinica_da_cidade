// ========================================================================
// FUNÇÃO: Componente de layout para o cabeçalho da página.
// ========================================================================
import React from 'react';
import { LogoIcon, FacebookIcon, InstagramIcon, LinkedinIcon } from '../common/Icons';
import logoDaEmpresa from '../../assets/images/logo.jpg'; 

// Organiza todo os componentes e hyperlinks do cabeçalho do site, se conectando com o site real da empresa.

const Header = () => (
    <header className="bg-[#00adbd] shadow-md text-white">
        <div className="bg-opacity-10 bg-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-8">
                <nav className="flex space-x-8 text-base items-center">
                    <a href="https://clinicadacidade.com.br/quem-somos/" className="hover:underline border-b-2 border-white pb-1">Quem somos</a>
                    <a href="https://clinicadacidade.com.br/seja-um-medico-parceiro-2/" className="hover:underline">Seja um médico parceiro</a>
                    <a href="https://clinicadacidade.com.br/parceria-saudavel/" className="hover:underline">Parceria Empresas</a>
                    <a href="https://clinicadacidade.com.br/blog/" className="hover:underline">Blog</a>
                    <a href="https://franquia.clinicadacidade.com.br/seja-franqueado" className="hover:underline">Seja um Franqueado</a>
                </nav>
                <div className="flex space-x-4 items-center">
                    <a href="https://www.facebook.com/clinicadacidadecampinas/?locale=pt_BR" aria-label="Facebook"><FacebookIcon /></a>
                    <a href="https://www.instagram.com/clinicadacidadecampinas/" aria-label="Instagram"><InstagramIcon /></a>
                    <a href="https://br.linkedin.com/company/clinicadacidade" aria-label="LinkedIn"><LinkedinIcon /></a>
                </div>
            </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-9">
            <div className="flex items-center">
                <a href="#" className="flex items-center">
                    <img src={logoDaEmpresa} alt="Clínica da Cidade Logo" className="h-20 w-auto" />
                    <div className="ml-8">
                        <h1 className="text-5xl font-bold">Clínica da Cidade</h1>
                        <p className="text-2xl items-center ml-12 font-extralight mt-3">Medicina Acessível</p>
                    </div>
                </a>
            </div>
            <nav className="flex space-x-8 text-md font-semibold">
                <a href="https://clinicadacidade.com.br/check-ups/" className="hover:underline">Check-ups</a>
                <a href="https://clinicadacidade.com.br/nossas-especialidades/" className="hover:underline">Consultas</a>
                <a href="https://clinicadacidade.com.br/exames/" className="hover:underline">Exames</a>
                <a href="https://clinicadacidade.com.br/centros-medicos/" className="hover:underline">Centros Médicos</a>
            </nav>
        </div>
    </header>
);

export default Header;