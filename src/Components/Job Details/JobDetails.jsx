import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/localstorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
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
            <div className="grid lg:grid-cols-4 gap-4 mb-8">
                <div className="border lg:col-span-3">
                    <div className="flex flex-col gap-4 mb-8 mt-4">
                        <p><span className="font-bold">Job description: </span>{job.job_description}</p>
                        <p><span className="font-bold">Job responsibility: </span>{job.job_responsibility}</p>
                        <p><span className="font-bold">Educational requirements: </span>{job.educational_requirements}</p>
                        <p><span className="font-bold">Experiences: </span>{job.experiences}</p>
                    </div>
                </div>
                <div className="border bg-indigo-200 rounded-xl m-auto p-4">
                    <h1 className="font-bold mb-4">Job Details</h1>
                    <hr />
                    <div className="mb-4">
                        <p>Salary: {job.salary}</p>
                        <p>Job title: {job.job_title}</p>
                    </div>
                    <h1 className="font-bold mb-4">Contact Information</h1>
                    <hr />
                    <div>
                        <p>Phone: {job.contact_information.phone}</p>
                        <p>Phone: {job.contact_information.email}</p>
                        <p>Phone: {job.contact_information.address}</p>
                    </div>
                </div>
            </div>
            <button onClick={handleApplyJob} className="btn m-auto mb-[130px] bg-indigo-500 text-white hover:bg-transparent hover:border-indigo-500 hover:text-indigo-500">Apply Now</button>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;