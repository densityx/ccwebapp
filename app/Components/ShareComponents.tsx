interface ShareComponentsProps {
    className?: string;
}

export default function ShareComponents({className = ''}: ShareComponentsProps) {
    return (
        <div className={`flex space-x-4 ${className || 'mt-4 lg:mt-0'}`}>
            <button
                className={'flex flex-row items-center justify-center w-full lg:w-auto px-6 py-1 bg-[#150e27] hover:bg-purple-900 text-white text-sm rounded-lg transition-color ease-in-out duration-300 shadow'}
            >
                Apply Now
            </button>

            <button
                className={'flex flex-row items-center justify-center w-full lg:w-auto px-6 py-1 bg-[#150e27] hover:bg-purple-900 text-white text-sm rounded-lg transition-color ease-in-out duration-300 shadow'}
            >
                Share

                <svg
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                    />
                </svg>

            </button>
        </div>
    )
}