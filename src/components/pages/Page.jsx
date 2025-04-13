import React from 'react';
import { useParams } from 'react-router-dom';
import contentData from '../data/contentData';

function Page() {
  const { contentId } = useParams();
  const content = contentData[contentId];

  if (!content) {
    return <h2>Conteúdo não encontrado!</h2>;
  }

  return (
    <section
      id='page'
      className='min-h-screen w-screen flex justify-center relative mt-16 bg-white'
    >
      <div className='text-up z-10 px-4 md:w-[70%] bg-pink-100' id='page-top'>
        
        {/* Título da Página */}
        <h1 className='text-center font-mono font-bold text-4xl md:text-5xl mb-6 bg-clip-text leading-right mt-6 text-black'>
          {content.title}
        </h1>

        {/* Quote */}
        <p className='md:text-2xl text-xl mb-8 w-full mx-auto font-weight-400 p-font text-black text-center'>
          <i>{content.quote.text}</i>
        </p>
        <p className='md:text-2xl text-xl mb-8 w-full mx-auto font-weight-400 p-font text-black text-center'>
          {content.quote.author}
        </p>

        <hr className='text-dark-red' />

        {/* Imagem Principal */}
        <figure className='w-full max-h:md:h-2/7 mt-2'>
          <img src={content.image} alt={content.title} className='w-full h-full' />
        </figure>

        <hr className='text-dark-red' />

        {/* Renderizando Seções */}
        {content.sections.map((section, index) => (
          <section key={index}>
            <h2 className='font-mono font-bold text-black text-3xl mt-5 mb-2'>
              {section.title}
            </h2>

            {section.content && section.content.map((paragraph, i) => (
              <p key={i} className='text-black font-normal text-xl mb-10 text-justify'>
                {paragraph}
              </p>
            ))}

            {/* Lista dentro da seção */}
            {section.list && (
              <ul className='text-black font-normal text-xl list-disc list-inside'>
                {section.list.map((item, l) => (
                  <li key={l}>{item}</li>
                ))}
              </ul>
            )}

            {/* Imagem dentro da seção */}
            {section.image && (
              <div className='flex flex-col justify-center items-center w-full md:h-2/7 overflow-hidden my-5 text-black'>
                <img src={section.image} className='md:w-[50%] h-full' alt={section.caption} />
                <caption className='font-mono font-bold text-dark-red text-xl mt-2'>
                  {section.caption}
                </caption>
              </div>
            )}

            {/* Renderizando Subtítulos */}
            {section.subsections && section.subsections.map((subsection, j) => (
              <div key={j}>
                <h3 className='font-mono font-semibold text-black text-2xl mt-4 mb-2'>
                  {subsection.subtitle}
                </h3>
                {subsection.content.map((paragraph, k) => (
                  <p key={k} className='text-black font-normal text-xl text-justify'>
                    {paragraph}
                  </p>
                ))}

                {/* Imagem dentro da subsection */}
                {subsection.image && (
                  <div className='flex flex-col justify-center items-center w-full md:h-2/7 overflow-hidden my-5 text-black'>
                    <img src={subsection.image} className='md:w-[50%] h-full' alt={subsection.caption} />
                    <caption className='font-mono font-bold text-dark-red text-xl mt-2'>
                      {subsection.caption}
                    </caption>
                  </div>
                )}

                {/* Lista dentro da subsection */}
                {subsection.list && (
                  <ul className='text-black font-normal text-xl list-disc list-inside'>
                    {subsection.list.map((item, l) => (
                      <li key={l}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* Imagem opcional entre sections */}
            {content.imageBetweenSections && (
              <div className='flex flex-col justify-center items-center w-full md:h-2/7 overflow-hidden my-5 text-black'>
                <img src={content.imageBetweenSections} className='md:w-[50%] h-full' alt='Imagem separadora' />
                <caption className='font-mono font-bold text-dark-red text-xl mt-2'>
                  Imagem de transição entre seções
                </caption>
              </div>
            )}
          </section>
        ))}
      </div>

      <hr className='text-dark-red' />

    </section>
  );
}

export default Page;