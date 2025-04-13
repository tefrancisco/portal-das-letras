export const Cards = () => {
  return (
    <section
      id="cards"
      className="min-h-screen flex items-center justify-center relative"
    >



      <div className="h-full md:w-screen flex items-center justify-around flex-wrap gap-5 p-5">

      <div class="max-w-sm border border-red-950 rounded-lg shadow-sm background-beige">
        <a href="#">
          <img class="rounded-t-lg w-full h-full" src="img/gif-card-1.gif" alt="" />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-black">1º ano</h5>
          </a>
          <p class="mb-3 font-normal text-black text-justify">Começaremos com uma introdução à literatura, apresentação aos poemas e aos primeiros períodos literários.</p>
          <button className="card-button"><a href="#first">Ver conteúdos</a></button>
        </div>
      </div>
      
      <div class="max-w-sm border border-red-950 rounded-lg shadow-sm background-beige">
        <a href="#">
          <img class="rounded-t-lg w-full h-full" src="img/gif-card-2.gif" alt="" />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-black">2º ano</h5>
          </a>
          <p class="mb-3 font-normal text-black text-justify">Aqui passaremos por diversos e importantes períodos literários, que vão do romantismo ao simbolismo.</p>
          <button className="card-button"><a href="#second">Ver conteúdos</a></button>
        </div>
      </div>

      <div class="max-w-sm border border-red-950 rounded-lg shadow-sm background-beige">
        <a href="#">
          <img class="rounded-t-lg w-full h-full" src="img/gif-card-3.gif" alt="" />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-black">3º ano</h5>
          </a>
          <p class="mb-3 font-normal text-black text-justify">Por último, daremos ênfase aos períodos literários modernistas, passando desde o pré ao pós-modernismo.</p>
          <button className="card-button"><a href="#third">Ver conteúdos</a></button>
        </div>
      </div>

      </div>


    </section>
  );

}