import { Link } from "react-router-dom";
import "../general.css";

function Landing () {


    return (<>
    <div className="page-margins">
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