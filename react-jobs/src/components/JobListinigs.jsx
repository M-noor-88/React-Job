import React from 'react'
import JobListinig from './JobListing';
import { useState, useEffect } from 'react';
import Spinner from './Spinner';
const JobListinigs = ({ isHome = false }) => {
    // const recentJobs = isHome ? jobs.slice(0, 3) : jobs;

    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {

            const apiUrl = isHome ? 'api/jobs?_limit=3' : 'api/jobs'
            
            try {
                const res = await fetch(apiUrl);
                const data = await res.json();
                setJobs(data);
            } catch (error) {
                console.log('Errors Fetching Data', error);
            } finally {
                setLoading(false);
            }
        }
        fetchJobs();
    }, []);

    return (

        <>
            {/* <!-- Browse Jobs --> */}
            <section className="px-4 py-10 bg-blue-50">
                <div className="m-auto container-xl lg:container">
                    <h2 className="mb-6 text-3xl font-bold text-center text-indigo-500">
                        {isHome ? 'Recenet Jobs' : 'Browse Jobs'}
                    </h2>

                    {loading ?
                        <Spinner loading={loading} />
                        :
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                            {
                                jobs.map((job) => {
                                    return (<JobListinig key={job.id} job={job} />)
                                })
                            }
                        </div>
                    }

                </div>
            </section>
        </>
    )
}

export default JobListinigs