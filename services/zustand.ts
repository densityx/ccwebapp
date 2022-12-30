import create from 'zustand';
import {orderBy} from 'lodash';

export const useAppStore = create((set, get) => ({
    jobs: [],
    index: 0,
    term: '',
    selectedJob: {},
    showSort: false,
    sort: 'new',
    sortType: 'desc',
    setIndex: (index) => set({index}),
    setJobs: (jobs) => set({jobs}),
    setSelectedJob: (selectedJob) => set({selectedJob}),
    setTerm: (term) => set({term}),
    getJobs: () => orderBy(
        get().jobs,
        [
            get().sort === 'new'
                ? 'postedAt'
                : (get().sort === 'salary' ? 'minSalary' : 'top')
        ],
        [get().sortType]
    ).filter(job => job.name.toLowerCase().includes(get().term.toLowerCase())),
    setShowSort: (showSort) => set({showSort}),
    setSort: (sort) => set({sort}),
    setSortType: (sortType) => set({sortType}),
}))