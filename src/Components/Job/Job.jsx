import 'boxicons'
const Job = ({ job }) => {

    const {logo, job_title, company_name, remote_or_onsite, job_type, location, salary} = job;

    return (
        <div className='m-auto mb-[235px]'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={logo} alt={job_title} /></figure>
                <div className="card-body">
                    <h3 className="font-semibold">{job_title}</h3>
                    <p>{company_name}</p>
                    <div className="flex gap-4">
                        <div className="border-2 border-indigo-300 w-[100px] h-[30px] text-center"><p className="text-indigo-500">{remote_or_onsite}</p></div>
                        <div className="border-2 border-indigo-300 w-[100px] h-[30px] text-center"><p className="text-indigo-500">{job_type}</p></div>
                    </div>
                    <div className='flex gap-6'>
                        <p className='flex text-center'><box-icon name='location-plus'></box-icon>{location}</p>
                        <p className='flex text-center'><box-icon name='money-withdraw'></box-icon>{salary}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn bg-indigo-500 text-white hover:bg-transparent hover:border-indigo-500 hover:text-indigo-500">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Job;