import { Link } from 'react-router-dom';

export const Second = () => {
    return (
        <section
            id="second"
            className="h-full w-screen flex flex-col md:flex-row overflow-hidden bg-black"
        >
            <div
                id="second-left"
                className="h-1/2 w-full pb-10 pt-10 md:w-[70%] md:h-screen flex items-center md:justify-start md:pl-20 p-10"
            >

                <div class="grade-content">

                    <h1 className="text-8xl title-font text-center text-beige">Conteúdo do 2º ano</h1>

                    <ul className="text-2xl mt-10 list-disc list-inside text-beige p-font">
                        <li className="pl-4">
                            <a
                                href="1ano/introLiteratura.html"
                                className="inline-flex items-center hover:text-red-700 hover:underline"
                            >
                                <span><Link to='/literatura/romantismo'>Romantismo (1836 - 1880)</Link></span>
                                <img
                                    src="img/click-here.gif"
                                    className="w-20 h-20"
                                />
                            </a>

                        </li>

                        <li className="p-4">
                            <a
                                href="1ano/poemaProsa.html"
                                className="inline-flex items-center space-x-2 hover:text-red-700 hover:underline"
                            >
                                <span><Link to='/literatura/realismo'>Realismo (1881 - 1893)</Link></span>
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
                                className="inline-flex items-center space-x-2 hover:text-red-700 hover:underline"
                            >
                                <span><Link to='/literatura/naturalismo'>Naturalismo (1880 - 1893)</Link></span>
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
                                href="1ano/trovadorismo.html"
                                className="inline-flex items-center space-x-2 hover:text-red-700 hover:underline"
                            >
                                <span><Link to='/literatura/parnasianismo'>Parnasianismo (1850 - 1900)</Link></span>
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
                                href="1ano/humanismo.html"
                                className="inline-flex items-center space-x-2 hover:text-red-700 hover:underline"
                            >
                                <span><Link to='/literatura/simbolismo'>Simbolismo (1890 - 1922)</Link></span>
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
                id="second-right"
                className="h-1/2 md:w-[30%] pb-10 pt-10 md:h-screen flex items-center justify-center mb-0 overflow-hidden"
            >

                <img src="img/segundo.png" className="" />

            </div>
        </section>
    );
};
