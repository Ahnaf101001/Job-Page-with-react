import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, []);

    return (
        <div>
            <div>
                <h2 className="text-5xl font-bold text-center">Featured Jobs: {jobs.length}</h2>
            </div>
            <div className="grid lg:grid-cols-2 m-auto gap-6">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={dataLength === jobs.length ? 'hidden' : ''}>
                <button onClick={() => setDataLength(jobs.length)}
                className="btn m-auto mb-[130px] bg-indigo-500 text-white hover:bg-transparent hover:border-indigo-500 hover:text-indigo-500">Show All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;