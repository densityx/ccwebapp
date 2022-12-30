'use client';

import JobCard from './Components/JobCard'
import JobDetails from './Components/JobDetails';
import {collection, getDocs, getFirestore} from "firebase/firestore";
import {app} from '../services/firebase';
import {useCallback, useEffect, useState} from "react";
import LoadingSkeleton from "./Components/LoadingSkeleton";
import LoadingSkeletonComplex from "./Components/LoadingSkeletonComplex";
import {useAppStore} from "../services/zustand";
import JobSorter from './Components/JobSorter';

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
            {appStore.showSort && (<JobSorter/>)}

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
