import {useAppStore} from "../../services/zustand";

const ChevronDownIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-2">
        <path fillRule="evenodd"
              d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
              clipRule="evenodd"
        />
    </svg>
);

const ChevronUpIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-2">
        <path fillRule="evenodd"
              d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z"
              clipRule="evenodd"
        />
    </svg>
);

export default function JobSorter() {
    const appStore = useAppStore();

    return (
        <div className={'mb-4 flex items-center'}>
            <p className={'font-semibold text-sm'}>
                Sort:
            </p>

            <div className="flex ml-2 space-x-2">
                <button
                    className={`flex items-center nav-link ${appStore.sort === 'new' ? 'nav-link-active' : null}`}
                    onClick={() => {
                        appStore.setSort('new');
                        appStore.setSortType(appStore.sortType === 'asc'
                            ? 'desc'
                            : (appStore.sortType === 'desc' ? 'asc' : null));
                    }}
                >
                    New

                    {appStore.sort === 'new' && appStore.sortType === 'asc' ? (
                        <ChevronUpIcon/>
                    ) : (appStore.sort === 'new' && appStore.sortType === 'desc' ?
                            <ChevronDownIcon/> : null
                    )}
                </button>

                <button
                    className={`flex items-center nav-link ${appStore.sort === 'top' && 'nav-link-active'}`}
                    onClick={() => {
                        appStore.setSort('top');
                        appStore.setSortType(appStore.sortType === 'asc'
                            ? 'desc'
                            : (appStore.sortType === 'desc' ? 'asc' : null));
                    }}
                >
                    Top

                    {appStore.sort === 'top' && appStore.sortType === 'asc' ? (
                        <ChevronUpIcon/>
                    ) : (appStore.sort === 'top' && appStore.sortType === 'desc' ?
                            <ChevronDownIcon/> : null
                    )}
                </button>

                <button
                    className={`flex items-center nav-link ${appStore.sort === 'salary' && 'nav-link-active'}`}
                    onClick={() => {
                        appStore.setSort('salary');
                        appStore.setSortType(appStore.sortType === 'asc'
                            ? 'desc'
                            : (appStore.sortType === 'desc' ? 'asc' : null));
                    }}
                >
                    Salary

                    {appStore.sort === 'salary' && appStore.sortType === 'asc' ? (
                        <ChevronUpIcon/>
                    ) : (appStore.sort === 'salary' && appStore.sortType === 'desc' ?
                            <ChevronDownIcon/> : null
                    )}
                </button>
            </div>
        </div>
    )
}