'use client';

import {debounce} from 'lodash';
import {useAppStore} from "../../services/zustand";
import Link from "next/link";
import {usePathname} from 'next/navigation';

export default function Header() {
    const pathname = usePathname();
    const appStore = useAppStore();

    const handleSearch = debounce((e) => appStore.setTerm(e.target.value), 500);

    return (
        <header className={'bg-[#f5f5f5] border-b-2 border-[#676767]'}>
            <div className="container mx-auto">
                <div className={'mx-4 md:mx-8 flex flex-col lg:flex-row justify-between items-center'}>
                    <div
                        className={'flex flex-col lg:flex-row items-center lg:flex-start justify-between lg:items-center py-2 w-full lg:w-auto'}>
                        <Link href="/">
                            <img src={'/images/logo.png'} className={'w-12 lg:w-8 h-12 lg:h-8'}/>
                        </Link>

                        <div
                            className={'relative flex items-center mt-4 lg:mt-0 ml-4 border-2 border-gray-600 rounded-3xl overflow-hidden'}
                        >
                            <label htmlFor="search" className={'absolute left-0 ml-2 cursor-pointer'}>
                                <svg className="text-gray-500 w-4 h-4"
                                     xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24" strokeWidth={1.5}
                                     stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                                </svg>
                            </label>

                            <input
                                type="text"
                                id={'search'}
                                onChange={(e) => handleSearch(e)}
                                placeholder={'Find Jobs or Resources'}
                                className={'px-8 py-1 w-full w-[280px] lg:w-[320px] focus:outline-0 text-sm'}
                            />

                            <button
                                className={'absolute text-gray-500 right-0 select-none'}
                                onClick={() => appStore.setShowSort(!appStore.showSort)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5}
                                     stroke="currentColor" className="mr-2 w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"/>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <nav className={'flex items-stretch lg:block space-x-4 pt-2 pb-4 lg:py-0 w-full lg:w-auto'}>
                        <Link
                            href="/"
                            className={`nav-link ${pathname === '/' && 'nav-link-active'}`}
                        >
                            Jobs
                        </Link>

                        <Link
                            href="/signup"
                            className={`nav-link ${pathname === '/signup' && 'nav-link-active'}`}
                        >
                            Sign Up
                        </Link>

                        <Link
                            href="/login"
                            className={`nav-link ${pathname === '/login' && 'nav-link-active'}`}
                        >
                            Login
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}