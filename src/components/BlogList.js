import { Link } from "react-router-dom";

const BlogList = ({blogs, title}) => {
    
    return ( 
        <div className="bloglist">
            <h2> {title} </h2>
                {
                    blogs.map((blog) =>(
                        <div className="blog" key={blog.id}>
                            <Link to={`/blogs/${blog.id}`} className="blog-titre"> {blog.title} </Link>
                            <smal className="blog-publication-date">Publier le: {blog.date} </smal>
                            <p className="blog-author">Publié par: {blog.author} </p>
                      </div>
                    ))
                }
            </div>
     );
}
 
export default BlogList;