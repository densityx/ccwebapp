import Image from 'next/image'
import Header from './Components/Header'
import JobCard from './Components/JobCard'
import JobDetails from './Components/JobDetails';


const JOBS = [
    {
        id: 1,
        name: 'Creative Intern',
        company: 'Anaabu Studio',
        type: 'Internship',
        location: 'Remote',
        salary: 'RM 500.00 - RM 1,200.00'
    },
    {
        id: 2,
        name: 'Marketing Director',
        company: 'Media Monks',
        type: 'Full-time',
        location: 'Remote',
        salary: 'RM 5,0000.00'
    },
    {
        id: 3,
        name: 'Studio Manager',
        company: 'MOUTHWASH Studio',
        type: 'Full-time',
        location: 'Remote',
        salary: 'RM 5,0000.00'
    },
];

export default function Home() {
    return (
        <main>
            <Header/>

            <div className={'container mx-auto my-10'}>
                <div className="mx-4 md:mx-8">
                    <div className={'grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12'}>
                        <div className={'grid-cols-1 lg:col-span-4'}>
                            <div
                                className={'flex lg:block overflow-hidden lg:overflow-visible lg:overflow-x-visible overflow-x-scroll w-full lg:space-y-4 hide-scrollbar'}
                            >
                                {JOBS.map(job => (
                                    <JobCard job={job} key={job.id}/>
                                ))}
                            </div>
                        </div>

                        <div className={'grid-cols-1 lg:col-span-8'}>
                            <JobDetails/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
