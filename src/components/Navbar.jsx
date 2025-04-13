import { useEffect } from "react"
import { Link } from 'react-router-dom';

export const Navbar = ({ menuOpen, setMenuOpen }) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : ""
    }, [menuOpen])


    return (
        <nav className="fixed top-0 left-0 w-full z-40 bg-[rba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="font-mono text-xl font-bold text-white"> {" "}
                        <span className="text-beige nav-links text-3xl">Portal das Letras</span>
                    </a>

                    <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        &#9776;
                    </div>

                    <div className="hidden md:flex items-center space-x-8">

                        <Link to='/' className="text-beige nav-links">
                            {""}
                            Início
                            {""}
                        </Link>

                        <a href="#about" className="text-beige nav-links">
                            {""}
                            Sobre
                            {""}
                        </a>

                        <a href="#cards" className="text-beige nav-links">
                            {""}
                            Conteúdo
                            {""}
                        </a>

                        <a href="#references" className="text-beige nav-links">
                            {""}
                            Referências
                            {""}
                        </a>



                    </div>

                </div>
            </div>
        </nav>
    )
}