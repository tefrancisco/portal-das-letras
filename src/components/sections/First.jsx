import { Link } from 'react-router-dom';

export const First = () => {
    return (
        <section
            id="first"
            className="min-h-screen w-screen flex flex-col md:flex-row overflow-visible background-beige"
        >
            <div
                id="first-left"
                className="min-h-[50vh] w-full pb-10 pt-10 md:w-[70%] flex items-center md:justify-start md:pl-20 p-10"
            >
                <div className="grade-content">
                    <h1 className="text-6xl md:text-8xl title-font text-center text-black break-words">
                        Conteúdo do 1º ano
                    </h1>

                    <ul className="text-2xl mt-10 list-disc list-inside text-black p-font">
                        <li className="pl-4">
                            <a
                                className="inline-flex items-center hover:text-red-800 hover:underline"
                            >
                                <span><Link to='/literatura/introducao'>Introdução à literatura</Link></span>
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
                                <span><Link to='/literatura/poema'>Poemas</Link></span>
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
                                <span><Link to='/literatura/generosliterarios'>Os gêneros literários</Link></span>
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
                                className="inline-flex items-center space-x-2 text-black hover:text-red-800 hover:underline"
                            >
                                <span><Link to='/literatura/trovadorismo'>Trovadorismo (1100 - 1450)</Link></span>
                                
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
                                className="inline-flex items-center space-x-2 text-black hover:text-red-800 hover:underline"
                            >
                                <span><Link to='/literatura/humanismo'>Humanismo (1450 - 1500)</Link></span>
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
                                href="1ano/classicismo.html"
                                className="inline-flex items-center space-x-2 text-black hover:text-red-800 hover:underline"
                            >
                                <span><Link to='/literatura/classicismo'>Classicismo (1500 - 1600)</Link></span>
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
                                href="1ano/quinhentismo.html"
                                className="inline-flex items-center space-x-2 text-black hover:text-red-800 hover:underline"
                            >
                                <span><Link to='/literatura/quinhentismo'>Quinhentismo (1500 - 1600)</Link></span>
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
                                href="1ano/barroco.html"
                                className="inline-flex items-center space-x-2 text-black hover:text-red-800 hover:underline"
                            >
                                <span><Link to='/literatura/barroco'>Barroco (1600 - 1750)</Link></span>
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
                                href="1ano/arcadismo.html"
                                className="inline-flex items-center space-x-2 text-black hover:text-red-800 hover:underline"
                            >
                                <span><Link to='/literatura/arcadismo'>Arcadismo (1750 - 1830)</Link></span>
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
                id="first-right"
                className="min-h-[50vh] md:w-[30%] pb-10 pt-10 flex items-center justify-center mb-0 overflow-visible"
            >
                <img src="img/primeiro.png" className="" />
            </div>
        </section>
    );
};