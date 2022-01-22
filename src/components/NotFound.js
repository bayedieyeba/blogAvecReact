import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="404">
            <p>pas non trouve</p>
            <Link to='/'> Allez à la page d'accueil</Link>
        </div>
     );
}
 
export default NotFound;