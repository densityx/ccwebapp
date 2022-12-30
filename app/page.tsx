'use client';

import Header from './Components/Header'
import JobCard from './Components/JobCard'
import JobDetails from './Components/JobDetails';
import {collection, getDocs, getFirestore} from "firebase/firestore";
import {app} from '../services/firebase';
import {useCallback, useEffect, useState} from "react";
import LoadingSkeleton from "./Components/LoadingSkeleton";
import LoadingSkeletonComplex from "./Components/LoadingSkeletonComplex";
import {useAppStore} from "../services/zustand";

const ChevronDown = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-2">
        <path fillRule="evenodd"
              d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
              clipRule="evenodd"
        />
    </svg>
);

const ChevronUp = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-2">
        <path fillRule="evenodd"
              d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z"
              clipRule="evenodd"
        />
    </svg>
);

export default function Home() {
    const appStore = useAppStore();

    /** Retrieve all jobs from firestore */
    const retrieveJobs = useCallback(async (term = null) => {
        const db = getFirestore(app)
        const data = [];

        const querySnapshot = await getDocs(collection(db, "jobs"));

        querySnapshot.forEach((doc) => {
            let tempData = doc.data();
            tempData.id = doc.id;

            data.push(tempData);
        });

        appStore.setJobs(data);
        appStore.setSelectedJob(data[0]);
    }, []);

    useEffect(() => {
        retrieveJobs();
    }, []);

    return (
        <div className="mx-4 md:mx-8">
            {appStore.showSort && (
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
                                <ChevronUp/>
                            ) : (appStore.sort === 'new' && appStore.sortType === 'desc' ?
                                    <ChevronDown/> : null
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
                                <ChevronUp/>
                            ) : (appStore.sort === 'top' && appStore.sortType === 'desc' ?
                                    <ChevronDown/> : null
                            )}
                        </button>
                    </div>
                </div>
            )}

            <div className={'grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12'}>
                <div className={'grid-cols-1 lg:col-span-4'}>
                    <div className={'jobs-listing'}>
                        {appStore.getJobs().length
                            ? appStore.getJobs().map((job, index) => (
                                <JobCard
                                    key={job.id}
                                    job={job}
                                    index={index}
                                    selectJob={() => {
                                        appStore.setSelectedJob(appStore.getJobs()[index]);
                                        appStore.setIndex(index);
                                    }}
                                />
                            )) : (
                                <>
                                    <LoadingSkeleton/>
                                    <LoadingSkeleton/>
                                    <LoadingSkeleton/>
                                    <LoadingSkeleton/>
                                </>
                            )}
                    </div>
                </div>

                <div className={'grid-cols-1 lg:col-span-8'}>
                    {!!appStore.selectedJob.name
                        ? <JobDetails
                            index={appStore.index}
                            job={appStore.selectedJob}
                        />
                        : <LoadingSkeletonComplex/>
                    }
                </div>
            </div>
        </div>
    )
}
