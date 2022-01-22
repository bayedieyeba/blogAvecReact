
import BlogList from "./BlogList";
import useRecuperation from "./useRecuperation";

const Home = () => {
   
    const {data: blogs, isloading, error} = useRecuperation('http://localhost:8000/blogs?_sort=id&_order=desc')
    return (
        <div className="home">
            { error &&  <div style={{'color':'red'}}>{error} </div>}
            {isloading && <div> en cours de traitement...</div>}
            { blogs && <BlogList blogs={blogs} title={'List de nos blogs'} />}
            {/* <BlogList blogs={blogs.filter((blog)=>blog.author == 'Baye Dieye')} title={'List des blogs de Baye Dieye'} /> */}
        </div>
      );
}
 
export default Home;