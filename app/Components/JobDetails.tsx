import ShareComponents from "./ShareComponents";
import {format} from "../../services/currency";
import moment from "moment";

export default function JobDetails({job, index}) {
    return (
        <div className={'relative bg-[#f5f5f5] overflow-hidden rounded-xl'}>
            <div className={'flex items-center h-[260px] lg:h-[320px] overflow-hidden'}>
                <img
                    className={'w-full h-auto'}
                    src={`https://picsum.photos/id/${index}/1000/600`}
                    alt={job.name + ' poster'}
                />
            </div>

            <div
                className={'flex flex-col justify-between absolute top-0 left-0 p-6 lg:p-8 z-10 bg-gray-800/40 w-full h-[260px] lg:h-[320px]'}
            >
                <div className={'flex justify-between'}>
                    <div>
                        <h1 className={'text-2xl lg:text-4xl text-white'}>
                            {job.name}
                        </h1>

                        <p className={'mt-2 text-sm lg:text-base text-white'}>
                            Job Posted by <a href={'#'} className={'underline'}>{job.company}</a>
                        </p>
                    </div>

                    <div className={'cursor-pointer fill-current text-white'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             strokeWidth={1.5}
                             stroke="currentColor"
                             className="w-6 lg:w-8 w-6 lg:h-8 hover:fill-purple-400">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"/>
                        </svg>
                    </div>
                </div>

                <div className={`flex flex-col lg:flex-row justify-between lg:items-end`}>
                    <div>
                        <p className={'text-base lg:text-lg text-white'}>
                            {moment(job.postedAt.toDate()).startOf('hour').fromNow()} | {job.applicants} Applicants
                        </p>

                        <p className={'mt-2 text-white text-sm font-medium'}>
                            {job.location}
                        </p>
                    </div>

                    <ShareComponents/>
                </div>
            </div>

            <div className={'p-6 lg:p-8'}>
                <div className={'grid grid-cols-2 gap-4 lg:gap-8'}>
                    <div>
                        <h3 className={'text-base lg:text-xl font-semibold text-gray-800'}>
                            Employment Type
                        </h3>

                        <p className={'inline-flex mt-2 text-sm font-medium px-3 py-1 rounded bg-[#ff6e00]'}>
                            {job.type}
                        </p>
                    </div>

                    <div>
                        <h3 className={'text-base lg:text-xl font-semibold text-gray-800'}>
                            Salary Range
                        </h3>

                        <p className={'inline-flex mt-2 text-sm font-medium'}>
                            {
                                job.minSalary === job.maxSalary
                                    ? `${job.currency} ${format(job.minSalary)}`
                                    : `${job.currency} ${format(job.minSalary)} - ${job.currency} ${format(job.minSalary)}`
                            }
                        </p>
                    </div>

                    <div>
                        <h3 className={'text-base lg:text-xl font-semibold text-gray-800'}>
                            Education Level
                        </h3>

                        <p className={'inline-flex mt-2 text-sm font-medium px-3 py-1 rounded bg-[#ffb200]'}>
                            {job.education}
                        </p>
                    </div>

                    <div>
                        <h3 className={'text-base lg:text-xl font-semibold text-gray-800'}>
                            Working Days
                        </h3>

                        <p className={'inline-flex mt-2 text-sm font-medium'}>
                            {job.workingDays}
                        </p>
                    </div>

                    <div className={'col-span-2'}>
                        <h3 className={'text-base lg:text-xl font-semibold text-gray-800'}>
                            Experience Level
                        </h3>

                        <p className={'inline-flex mt-2 text-sm font-medium px-3 py-1 rounded bg-[#b0dffd]'}>
                            {job.experience}
                        </p>
                    </div>
                </div>

                <div className="mt-6 lg:mt-12 p-6 rounded-3xl bg-[#ebe5d8] shadow-xl">
                    <div>
                        <h3 className={'text-base lg:text-xl font-semibold text-gray-800'}>
                            The Role
                        </h3>

                        <p className={'mt-2 text-sm'}>
                            {job.company} is looking for a Creative Intern to assist us in the development
                            of
                            our campaigns
                        </p>
                    </div>

                    <div className={'mt-8'}>
                        <h3 className={'text-base lg:text-xl font-semibold text-gray-800'}>
                            Responsibilities
                        </h3>

                        <ul className={'mt-2 list-disc ml-6 text-sm'}>
                            <li>
                                Assist in the development of marketing campaigns and seasonal
                                campaigns.
                            </li>
                            <li>
                                Attend and coordinate photoshoot sessions.
                            </li>
                            <li>
                                Ideate and conceptualize designs for social media and campaigns.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-6 lg:mt-12">
                    <div>
                        <h3 className={'text-base lg:text-xl font-semibold text-gray-800'}>
                            Perks
                        </h3>

                        <p className={'mt-2 text-sm'}>
                            WFH Fridays, Unlimited Coffee, PTO.
                        </p>
                    </div>

                    <div className={'mt-8'}>
                        <h3 className={'text-base lg:text-xl font-semibold text-gray-800'}>
                            Company Overview
                        </h3>

                        <p className={'mt-2 text-sm'}>
                            {job.company} is an independent apparel label that infuses soft androgyny into
                            every inch of its creation. Designed intimately witih minimal adornment
                            and
                            muted colours, {job.company} reflects clean silhouttes for perfect essentials
                            of
                            capsule wardrobe.
                        </p>
                    </div>
                </div>

                <ShareComponents className={'mt-6 lg:mt-12'}/>
            </div>
        </div>
    )
}