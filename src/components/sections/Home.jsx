export const Home = () => {
    return <section id="home" className="min-h-screen w-screen flex flex-col md:flex-row overflow-hidden py-16">

        {/* No celular, fazer o h da div tomar apenas metade da tela! */}
           
           <div id="l1" className="w-full md:w-1/2 h-screen bg-amber-400 shadow-lg text-white flex items-center justify-center">

                <img src="../src/assets/img/330e184ac126ee13ed36092bcb6f3dff.jpg" className="h-full w-full"/>

           </div>

           <div id="r1" className="w-full md:w-1/2 h-screen bg-blue-900 p-6 shadow-lg text-white flex items-center justify-center">  

                <h2 className="text-2xl font-bold">
                    Div 2
                </h2>

                <p className="text-2xl font-bold">
                    Conteúdo div 2
                </p>

           </div>
           
        </section>
    
}