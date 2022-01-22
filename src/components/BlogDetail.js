import { useParams,useHistory} from 'react-router-dom'

import useRecuperation from './useRecuperation';
const BlogDetail = () => {

    const {id} = useParams()
    const {blog, isloading, error} = useRecuperation('http://localhost:8000/blogs/'+id)
    const history = useHistory()
    const handleDelete =()=>{
        fetch('http://localhost:8000/blogs/'+id,{
            method : 'DELETE',

        }).then( () =>{
            history.push('/')
        })
    }
    return ( 
        <div>
            {isloading && <div>En cours de traitement...</div>}
            {error && <div>{error} </div>}
            {blog && (
                <div className="blog">
                    <h2 className="blog-titre">{blog.title}</h2>
                    <small className="blog-publication-date">{`Publié le: ${blog.date}`}</small>
                    <p className="blog-body">{blog.body}</p>
                    <p className="blog-author">{`Publié par: ${blog.author}`}</p>
                    <button onClick={handleDelete}>supprimer</button>
                </div>
            )}
        </div>
     );
}
 
export default BlogDetail;