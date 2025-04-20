import { Link } from 'react-router-dom';

export const Third = () => {
    return (
        <section
            id="third"
            className="h-full w-screen flex flex-col md:flex-row overflow-hidden background-beige"
        >
            <div
                id="third-left"
                className="h-1/2 w-full pb-10 pt-10 md:w-[70%] md:h-screen flex items-center md:justify-start md:pl-20 p-10"
            >

                <div class="grade-content">

                    <h1 className="text-8xl title-font text-center text-black">Conteúdo do 3º ano</h1>

                    <ul className="text-2xl mt-10 list-disc list-inside text-black p-font">
                        <li className="pl-4">
                            <a
                                href="1ano/introLiteratura.html"
                                className="inline-flex items-center hover:text-red-800 hover:underline"
                            >
                                <span><Link to='premodernismo'>Pré-modernismo (1890 - 1914)</Link></span>
                                <img
                                    src="img/click-here.gif"
                                    className="w-20 h-20"
                                />
                            </a>

                        </li>

                        <li className="p-4">
                            <a
                                href="1ano/poemaProsa.html"
                                className="inline-flex items-center space-x-2 text-black hover:text-red-800 hover:underline"
                            >
                                <span><Link to='modernismo'>Modernismo (1922 - 1960)</Link></span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                                    />
                                </svg>
                            </a>
                        </li>
                        <li className="p-4">
                            <a
                                href="1ano/generosLiterarios.html"
                                className="inline-flex items-center space-x-2 text-black hover:text-red-800 hover:underline"
                            >
                                <span><Link to='posmodernismo'>Pós-modernismo (1960 - tempos atuais)</Link></span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                                    />
                                </svg>
                            </a>
                        </li>
                        
                    </ul>

                </div>

            </div>

            <div
                id="third-right"
                className="h-1/2 md:w-[30%] pb-10 pt-10 md:h-screen flex items-center justify-center mb-0 overflow-hidden"
            >

                <img src="img/terceiro.png" className="" />

            </div>
        </section>
    );
};
