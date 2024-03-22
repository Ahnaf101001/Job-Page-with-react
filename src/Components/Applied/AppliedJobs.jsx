import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/localstorage";

const AppliedJobs = () => {

    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleJobsFilter = filter => {
        if (filter === 'all') {
            setDisplayJobs(appliedJobs);
        }
        else if (filter === 'remote') {
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        }
        else if (filter === 'onsite') {
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs);
        }
    }

    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))

            const jobsApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job)
                }
            }

            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);

            // console.log(jobsApplied)
        }
    }, [jobs])

    return (
        <div>
            <h1 className="text-3xl">Jobs applied: {appliedJobs.length}</h1>
            <details className="dropdown">
                <summary className="m-1 btn">Filter By</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
                    <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                    <li onClick={() => handleJobsFilter('onsite')}><a>Onsite</a></li>
                </ul>
            </details>
            <ul className="flex flex-col m-auto gap-6">
                {
                    displayJobs.map(job =>
                        <li key={job.id}>
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure><img src={job.logo} alt={job.job_title} /></figure>
                                <div className="card-body">
                                    <h3 className="font-semibold">{job.job_title}</h3>
                                    <p>{job.company_name}</p>
                                    <div className="flex gap-4">
                                        <div className="border-2 border-indigo-300 w-[100px] h-[30px] text-center"><p className="text-indigo-500">{job.remote_or_onsite}</p></div>
                                        <div className="border-2 border-indigo-300 w-[100px] h-[30px] text-center"><p className="text-indigo-500">{job.job_type}</p></div>
                                    </div>
                                    <div className='flex gap-6'>
                                        <p className='flex text-center'><box-icon name='location-plus'></box-icon>{job.location}</p>
                                        <p className='flex text-center'><box-icon name='money-withdraw'></box-icon>{job.salary}</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    )
                }
            </ul>
        </div>
    );
};

export default AppliedJobs;