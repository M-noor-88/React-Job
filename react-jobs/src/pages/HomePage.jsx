import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HomeCard from '../components/HomeCard';
import JobListinigs from '../components/JobListinigs';
import ViewAllJobs from '../components/ViewAllJobs';
const HomePage = () => {
    return (
        <>
    
            <Hero />
            <HomeCard />
            <JobListinigs isHome={true} />
            <ViewAllJobs />
        </>
    )
}

export default HomePage