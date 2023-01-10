import { Link } from "react-router-dom";


function Landing () {


    return (<>
    <div>
        <h1>Welcome to the landing page</h1>
        <Link
         to="/resume"
        >
            Go to Resume
        </Link>
    </div>
    </>)
}

export default Landing;