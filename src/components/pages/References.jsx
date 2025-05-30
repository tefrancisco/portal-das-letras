import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import contentData from "../data/contentData";

function References() {
    const { contentId } = useParams();
    const content = contentData[contentId];

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" }); // Reseta o scroll para o topo
    }, [contentId]); // Atualiza sempre que contentId mudar

    if (!content) {
        return <h2>Conteúdo não encontrado!</h2>;
    }

    return (
        <section
            id="page"
            className="min-h-screen w-screen flex justify-center relative mt-16 bg-white"
        >
            <div className="text-up z-10 px-4 md:w-[70%] bg-white" id="page-main">
                <header>
                    {/* Título da Página */}
                    <h1 className="text-center font-mono font-bold text-4xl md:text-5xl mb-6 bg-clip-text leading-right mt-6 text-black">
                        {content.title}
                    </h1>

                </header>

                <hr className="text-dark-red" />

                <main>


                    <p
                        className="text-black font-normal text-xl mb-10 text-justify mt-10"
                    >


                        SOUZA, Warley. "Literatura"; Brasil Escola. Disponível em:
                        <a href="https://brasilescola.uol.com.br/literatura"><span className="text-blue-600"> https://brasilescola.uol.com.br/literatura </span></a>. Acesso em 24 de setembro de 2024.
                    </p>

                    <p
                        className="text-black font-normal text-xl mb-10 text-justify"
                    >


                        SOUZA, Warley. "Poema"; Brasil Escola. Disponível em:
                        <a href="https://brasilescola.uol.com.br/literatura/o-poema-caracteristicas-especificas.htm"><span className="text-blue-600"> https://brasilescola.uol.com.br/literatura/o-poema-caracteristicas-especificas.htm </span></a>. Acesso em 24 de setembro de 2024.
                    </p>

                     <p
                        className="text-black font-normal text-xl mb-10 text-justify"
                    >


                        DIANA, Daniela. Poema. Toda Matéria, [s.d.]. Disponível em:
                        <a href="https://www.todamateria.com.br/o-que-e-um-poema/"><span className="text-blue-600"> https://www.todamateria.com.br/o-que-e-um-poema/ </span></a>.  Acesso em: 24 set. 2024
                    </p>

                     <p
                        className="text-black font-normal text-xl mb-10 text-justify"
                    >


                        DIANA, Daniela. Quinhentismo. Toda Matéria, [s.d.]. Disponível em: 
                        <a href="https://www.todamateria.com.br/quinhentismo/"><span className="text-blue-600"> https://www.todamateria.com.br/quinhentismo/ </span></a>. Acesso em: 29 out. 2024
                    </p>

                     <p
                        className="text-black font-normal text-xl mb-10 text-justify"
                    >


                        SOUZA, Warley. "Barroco"; Brasil Escola. Disponível em:
                        <a href="https://brasilescola.uol.com.br/literatura/o-barroco.htm"><span className="text-blue-600"> https://brasilescola.uol.com.br/literatura/o-barroco.htm </span></a>. Acesso em 29 de outubro de 2024.
                    </p>

                     <p
                        className="text-black font-normal text-xl mb-10 text-justify"
                    >


                        DIANA, Daniela. Classicismo. Toda Matéria, [s.d.]. Disponível em:
                        <a href="https://www.todamateria.com.br/classicismo/"><span className="text-blue-600"> https://www.todamateria.com.br/classicismo/ </span></a>. Acesso em: 29 out. 2024
                    </p>

                     <p
                        className="text-black font-normal text-xl mb-10 text-justify"
                    >


                        FERNANDES, Márcia. Trovadorismo. Toda Matéria, [s.d.]. Disponível em:
                        <a href="https://www.todamateria.com.br/trovadorismo/"><span className="text-blue-600"> https://www.todamateria.com.br/trovadorismo/ </span></a>. Acesso em 24 de setembro de 2024.
                    </p>

                    <p
                        className="text-black font-normal text-xl mb-10 text-justify"
                    >


                        RIGONATTO, Mariana. "O que foi o Humanismo?"; Brasil Escola. Disponível em:
                        <a href="https://brasilescola.uol.com.br/o-que-e/portugues/o-que-foi-humanismo.htm"><span className="text-blue-600"> https://brasilescola.uol.com.br/o-que-e/portugues/o-que-foi-humanismo.htm </span></a>. Acesso em 29 de outubro de 2024.
                    </p>

                    <p
                        className="text-black font-normal text-xl mb-10 text-justify"
                    >


                        MARINHO, Fernando. "Arcadismo"; Brasil Escola. Disponível em:
                        <a href="https://brasilescola.uol.com.br/literatura/arcadismo.htm"><span className="text-blue-600"> https://brasilescola.uol.com.br/literatura/arcadismo.htm </span></a>. Acesso em 24 de setembro de 2024.
                    </p>

                     <p
                        className="text-black font-normal text-xl mb-10 text-justify"
                    >


                        DIANA, Daniela. Romantismo. Toda Matéria, [s.d.]. Disponível em:
                        <a href="https://www.todamateria.com.br/romantismo/"><span className="text-blue-600"> https://www.todamateria.com.br/romantismo/ </span></a>. Acesso em: 15 jan. 2025
                    </p>

                     <p
                        className="text-black font-normal text-xl mb-10 text-justify"
                    >


                        MARINHO, Fernando. "Romantismo no Brasil"; Brasil Escola. Disponível em:
                        <a href="https://brasilescola.uol.com.br/literatura/romantismo-no-brasil.htm"><span className="text-blue-600"> https://brasilescola.uol.com.br/literatura/romantismo-no-brasil.htm </span></a>. Acesso em 15 de janeiro de 2025.
                    </p>

                     <p
                        className="text-black font-normal text-xl mb-10 text-justify"
                    >


                        AIDAR, Laura. Realismo. Toda Matéria, [s.d.]. Disponível em:
                        <a href="https://www.todamateria.com.br/realismo/"><span className="text-blue-600"> https://www.todamateria.com.br/realismo/ </span></a>. Acesso em: 15 jan. 2025
                    </p>

                     <p
                        className="text-black font-normal text-xl mb-10 text-justify"
                    >


                        BRANDINO, Luiza. "Naturalismo"; Brasil Escola. Disponível em:
                        <a href="https://brasilescola.uol.com.br/literatura/o-naturalismo.htm"><span className="text-blue-600"> https://www.todamateria.com.br/trovadorismo/ </span></a>. Acesso em 15 de janeiro de 2025.
                    </p>

                      <p
                        className="text-black font-normal text-xl mb-10 text-justify"
                    >


                        GUIMARãES, Leandro. "Parnasianismo"; Brasil Escola. Disponível em:
                        <a href="https://brasilescola.uol.com.br/literatura/parnasianismo.htm"><span className="text-blue-600"> https://brasilescola.uol.com.br/literatura/parnasianismo.htm </span></a>. Acesso em 15 de janeiro de 2025.
                    </p>

                      <p
                        className="text-black font-normal text-xl mb-10 text-justify"
                    >


                        DIANA, Daniela. Simbolismo. Toda Matéria, [s.d.]. Disponível em:
                        <a href="https://www.todamateria.com.br/simbolismo-caracteristicas-e-contexto-historico/"><span className="text-blue-600"> https://www.todamateria.com.br/simbolismo-caracteristicas-e-contexto-historico/ </span></a>. Acesso em: 15 jan. 2025
                    </p>

                      <p
                        className="text-black font-normal text-xl mb-10 text-justify"
                    >


                        GUIMARãES, Leandro. "Pré-modernismo"; Brasil Escola. Disponível em: 
                        <a href="https://brasilescola.uol.com.br/literatura/pre-modernismo.htm"><span className="text-blue-600"> https://brasilescola.uol.com.br/literatura/pre-modernismo.htm </span></a>. Acesso em 12 de fevereiro de 2025.
                    </p>

                    <p
                        className="text-black font-normal text-xl mb-10 text-justify"
                    >


                        AIDAR, Laura. Modernismo. Toda Matéria, [s.d.]. Disponível em:
                        <a href="https://www.todamateria.com.br/o-modernismo/"><span className="text-blue-600"> https://www.todamateria.com.br/o-modernismo/ </span></a>. Acesso em: 16 fev. 2025 
                    </p>

                    <p
                        className="text-black font-normal text-xl mb-10 text-justify"
                    >


                        AIDAR, Laura. Pós-Modernismo. Toda Matéria, [s.d.]. Disponível em:
                        <a href="https://www.todamateria.com.br/pos-modernismo/"><span className="text-blue-600"> https://www.todamateria.com.br/pos-modernismo/ </span></a>.  Acesso em: 20 fev. 2025 
                    </p>



                    
                </main>

                <hr className="text-dark-red mb-10" />
            </div>
        </section>
    );
}

export default References;
