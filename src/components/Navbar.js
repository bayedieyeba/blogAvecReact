import { Link } from "react-router-dom";

const Navbar = () => {
   
    return (  
        <nav className="navbar">
            <div>
                <link className="logo" href="" >Notre blog</link>
            </div>
            <ul className="liens">
                <li>
                    <Link to="/" className="lien" >Accueil</Link>
                </li>
                <li>
                    <Link to="/ajouter" className="lien btnArticle" >Créer article</Link>
                </li>
            </ul>
        </nav>
    );
}
 
export default Navbar;