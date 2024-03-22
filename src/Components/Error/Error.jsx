import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div>
           <h1>You have run into an error</h1>
           <Link to="/">Go back to home</Link>
        </div>
    );
};

export default Error;