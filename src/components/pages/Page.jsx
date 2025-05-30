import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import contentData from "../data/contentData";

function Page() {
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

          {/* Quote */}
          <p className="md:text-2xl text-xl mb-8 w-full mx-auto font-weight-400 p-font text-black text-center">
            <i>{content.quote.text}</i>
          </p>
          <p className="md:text-2xl text-xl mb-8 w-full mx-auto font-weight-400 p-font text-black text-center">
            {content.quote.author}
          </p>
        </header>

        <hr className="text-dark-red" />

        {/* Imagem Principal */}
        <figure className="w-full md:h-[500px] mt-2">
          <img
            src={content.image}
            alt={content.title}
            className="w-full h-full"
          />
        </figure>

        <hr className="text-dark-red" />

        <main>
          {/* Renderizando Seções */}
          {content.sections.map((section, index) => (
            <section key={index}>
              <h2 className="font-mono font-bold text-black text-3xl mt-5 mb-2">
                {section.title}
              </h2>

              {section.content &&
                section.content.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-black font-normal text-xl mb-10 text-justify"
                  >
                    {paragraph}
                  </p>
                ))}

              {/* Texto destacado em negrito */}
              {section.highlight && (
                <p className="text-dark-red font-mono font-bold text-xl mb-4">
                  {section.highlight}
                </p>
              )}

              {/* Lista dentro da seção */}
              {section.list && (
                <ul className="text-black font-normal text-xl list-disc list-inside">
                  {section.list.map((item, l) => (
                    <li key={l}>{item}</li>
                  ))}
                </ul>
              )}

              {/* Renderizando Exemplos */}
              {section.examples &&
                section.examples.map((example, e) => (
                  <div
                    key={e}
                    className="bg-gray-100 p-4 border-l-4 border-red-900 mt-4 mb-10"
                  >
                    <h3 className="font-mono font-semibold text-black text-2xl mb-3">
                      {example.title}
                    </h3>

                    {/* Verificando se o exemplo é prosa (string) ou poesia (array) */}
                    {typeof example.content === "string" ? (
                      <p className="text-black font-normal text-xl text-justify">
                        {example.content}
                      </p>
                    ) : (
                      <div className="flex flex-col items-center">
                        {example.content.map((line, i) => (
                          <p
                            key={i}
                            className={`text-black font-normal text-xl text-center ${
                              line === "" ? "mt-6" : "mt-1"
                            }`}
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

              {/* Imagem dentro da seção */}
              {section.image && (
                <div className="flex flex-col justify-center items-center w-full md:h-2/7 overflow-hidden my-5 text-black">
                  <img
                    src={section.image}
                    className="md:w-[50%] h-full"
                    alt={section.caption}
                  />
                  <caption className="font-mono font-bold text-dark-red text-xl mt-2">
                    {section.caption}
                  </caption>
                </div>
              )}

              {/* Renderizando Subtítulos */}
              {section.subsections &&
                section.subsections.map((subsection, j) => (
                  <div key={j}>
                    <h3 className="font-mono font-semibold text-black text-2xl mt-4 mb-2">
                      {subsection.subtitle}
                    </h3>
                    {subsection.content &&
                      subsection.content.map((paragraph, k) => (
                        <p
                          key={k}
                          className="text-black font-normal text-xl text-justify"
                        >
                          {paragraph}
                        </p>
                      ))}


                    {/* Texto destacado em negrito */}
                    {subsection.highlight && (
                      <p className="text-dark-red font-bold text-xl mb-4">
                        {subsection.highlight}
                      </p>
                    )}

                    {/* Lista dentro da subsection */}
                    {subsection.list && (
                      <ul className="text-black font-normal text-xl list-disc list-inside">
                        {subsection.list.map((item, l) => (
                          <li key={l}>{item}</li>
                        ))}
                      </ul>
                    )}

                    {/* Múltiplos exemplos dentro da subsection */}
                    {subsection.examples &&
                      subsection.examples.map((example, e) => (
                        <div
                          key={e}
                          className="bg-gray-100 p-4 border-l-4 border-red-900 mt-4"
                        >
                          <h3 className="font-mono font-semibold text-black text-2xl">
                            {example.title}
                          </h3>

                          {/* Verificando se o exemplo é prosa (string) ou poesia (array) */}
                          {typeof example.content === "string" ? (
                            <p className="text-black font-normal text-xl text-justify">
                              {example.content}
                            </p>
                          ) : (
                            <div className="flex flex-col items-center">
                              {example.content.map((line, i) => (
                                <p
                                  key={i}
                                  className={`text-black font-normal text-xl text-center ${
                                    line === "" ? "mt-6" : "mt-1"
                                  }`}
                                >
                                  {line}
                                </p>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}

                        {/* Imagem dentro da subsection */}
                    {subsection.image && (
                      <div className="flex flex-col justify-center items-center w-full md:h-2/7 overflow-hidden my-5 text-black">
                        <img
                          src={subsection.image}
                          className="md:w-[50%] h-full"
                          alt={subsection.caption}
                        />
                        <caption className="font-mono font-bold text-dark-red text-xl mt-2">
                          {subsection.caption}
                        </caption>
                      </div>
                    )}
                    
                  </div>
                ))}

              {/* Imagem opcional entre sections */}
              {content.imageBetweenSections && (
                <div className="flex flex-col justify-center items-center w-full md:h-2/7 overflow-hidden my-5 text-black">
                  <img
                    src={content.imageBetweenSections}
                    className="md:w-[50%] h-full"
                    alt="Imagem separadora"
                  />
                  <caption className="font-mono font-bold text-dark-red text-xl mt-2">
                    Imagem de transição entre seções
                  </caption>
                </div>
              )}
            </section>
          ))}
        </main>

        <hr className="text-dark-red mb-10" />
      </div>
    </section>
  );
}

export default Page;
