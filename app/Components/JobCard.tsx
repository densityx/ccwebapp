import {format} from "../../services/currency";

interface JobCardProps {
    index: number;
    job: any;

    selectJob(): void
}

export default function JobCard({index, job, selectJob}: JobCardProps) {
    return (
        <div
            onClick={() => selectJob(index)}
            className={'relative p-4 flex flex-column rounded-lg bg-[#f5f5f5] cursor-pointer hover:shadow-lg transition-color ease-in-out duration-300 min-w-[300px] lg:min-w-auto mr-6 lg:mr-0 last:mr-0'}
        >
            <div
                className={'flex items-center justify-center w-12 lg:w-16 h-12 lg:h-16 bg-pink-50 rounded-full flex-shrink-0 border border-[#676767] overflow-hidden'}
            >
                <img
                    className={'w-full h-full'}
                    src={`https://picsum.photos/id/${index}/200/200`}
                    alt={job.name + ' poster'}
                />
            </div>

            <div className={'ml-4'}>
                <h3 className={'text-sm lg:text-lg font-semibold'}>
                    {job.name}
                </h3>
                <p className={'text-sm lg:font-medium'}>
                    {job.company}
                </p>

                <div className={'mt-2'}>
                    <p className={'text-xs lg:text-sm'}>
                        {job.type} | {job.location}
                    </p>
                    <p className={'text-xs lg:text-sm'}>
                        {
                            job.minSalary === job.maxSalary
                                ? `${job.currency} ${format(job.minSalary)}`
                                : `${job.currency} ${format(job.minSalary)} - ${job.currency} ${format(job.minSalary)}`
                        }
                    </p>
                </div>
            </div>

            <div className={'absolute top-0 right-0 mr-4 mt-4 cursor-pointer'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     strokeWidth={1.5}
                     stroke="currentColor"
                     className="w-5 h-5 hover:fill-purple-400">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"/>
                </svg>
            </div>
        </div>
    )
}