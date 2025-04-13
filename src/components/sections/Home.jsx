export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative mt-16"
    >

        <div className="text-center z-10 px-4" id="home-main">
          <h1 className="text-7xl md:text-9xl mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right title-font">
            Seja bem-vindo!
          </h1>

          <p className="text-2xl mb-8 max-w-lg mx-auto font-weight-400 p-font text-beige">
            Que tal mergulhar no mundo da literatura e aprender o conteúdo 
            literário do ensino médio?
          </p>
          
          <div className="flex justify-center space-x-4">

          <button id="home-button"><a href="#about">Continuar</a></button>

          </div>
        </div>

    </section>
  );
};
