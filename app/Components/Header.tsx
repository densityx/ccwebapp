export default function Header() {
    return (
        <header className={'bg-[#f5f5f5] border-b-2 border-[#676767]'}>
            <div className="container mx-auto">
                <div className={'mx-4 md:mx-8 flex flex-col lg:flex-row justify-between items-center'}>
                    <div
                        className={'flex flex-col lg:flex-row items-center lg:flex-start justify-between lg:items-center py-2 w-full lg:w-auto'}>
                        <a href="#">
                            <img src={'/images/logo.png'} className={'w-12 lg:w-8 h-12 lg:h-8'}/>
                        </a>

                        <div
                            className={'relative flex items-center mt-4 lg:mt-0 ml-4 border-2 border-gray-600 rounded-3xl overflow-hidden'}
                        >
                            <svg className="absolute left-0 ml-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                            </svg>

                            <input
                                type="text"
                                placeholder={'Find Jobs or Resources'}
                                className={'px-10 py-1 w-full w-[280px] lg:w-[320px] focus:outline-0 text-sm'}
                            />

                            <div className={'absolute right-0 cursor-pointer'}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5}
                                     stroke="currentColor" className="mr-2 w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"/>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <nav className={'flex items-stretch lg:block space-x-4 pt-2 pb-4 lg:py-0 w-full lg:w-auto'}>
                        <a href="#"
                           className={'px-3 py-1 w-full lg:w-auto text-center font-medium border-2 border-transparent hover:border-[#2c2c2c] rounded-3xl hover:bg-white transition-color ease-in-out duration-300'}>
                            Jobs
                        </a>

                        <a href="#"
                           className={'px-3 py-1 w-full lg:w-auto text-center font-medium border-2 border-[#2c2c2c] rounded-3xl bg-white transition-color ease-in-out duration-300'}>
                            Sign Up
                        </a>

                        <a href="#"
                           className={'px-3 py-1 w-full lg:w-auto text-center font-medium border-2 border-transparent hover:border-[#2c2c2c] rounded-3xl hover:bg-white transition-color ease-in-out duration-300'}>
                            Login
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    )
}