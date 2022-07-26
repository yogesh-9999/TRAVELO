import React from "react";
import bgi from "./bgi.jpg";
import travel from "./TRavelblogs.jpg"
export const Header1 = () => {
    return (
        <section className="bg-gray-400 dark:bg-gray-900">
            <div className="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row">
                <div className="flex justify-center xl:w-1/2">
                    <img
                        className="h-80 w-80 sm:w-[30rem] sm:h-[30rem] flex-shrink-0 object-cover rounded-full"
                        src={travel}
                        alt=""
                    />
                </div>

                <div className="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-800 xl:text-4xl dark:text-white">
                    Explore the world with TRAVELO</h2>



                    <p className="block max-w-2xl mt-4 text-xl text-gray-500 dark:text-gray-300">
                    Finding someone whose travel philosophy aligns well with yours is essential if you're going to be stuck in a foreign land with someone for an extended period of time!It's important to remember that just because you've spent a lot of quality time with someone at home, that doesn't mean they will be the same easy-going person on the road when faced with the challenges travelers go through.

                    </p>

                    <div className="mt-6 sm:-mx-2">
                        <div className="inline-flex w-full overflow-hidden rounded-lg shadow sm:w-auto sm:mx-2">
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLSep8IQF3RC9d63WdDdjc8zfqpZeKBIpqsRXZxMt4fqVZEtRuw/viewform?usp=pp_url" 
                                target="_blank"

                                className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-600 sm:w-auto"
                            >
                                <span className="mx-2">Offline support</span>
                            </a>
                        </div>

                        <div className="inline-flex w-full mt-4 overflow-hidden rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0">
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLSep8IQF3RC9d63WdDdjc8zfqpZeKBIpqsRXZxMt4fqVZEtRuw/viewform?usp=pp_url"
                                target="_blank"
                                className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white transition-colors duration-150 transform sm:w-auto bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-600"
                            >
                                <span className="mx-2">View Departments</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
