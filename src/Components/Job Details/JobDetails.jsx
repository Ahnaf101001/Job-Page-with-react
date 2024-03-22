import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/localstorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt)
    const handleApplyJob = () => {
        saveJobApplication(idInt);
        toast('You have applied successfully for the Job!');
    }
    console.log(job)
    return (
        <div>
            <h1 className="text-3xl font-bold text-center">Job Details of: {job.job_title}</h1>
            <div className="grid lg:grid-cols-4 gap-4">
                <div className="border lg:col-span-3"></div>
                <div className="border"></div>
            </div>
            <button onClick={handleApplyJob} className="btn m-auto mb-[130px] bg-indigo-500 text-white hover:bg-transparent hover:border-indigo-500 hover:text-indigo-500">Apply Now</button>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;