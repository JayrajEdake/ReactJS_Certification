import {Link ,useNavigate} from 'react-router-dom';
function HomePage(){

    const navigate = useNavigate();

    function navigateHandler(){
        navigate('/products')
    }
    return (
    <>
    <h1>My home page</h1>
         <Link to="/products">Go to products page</Link>  <br/>
         <button onClick={navigateHandler}>Navigate</button>
    </>  
    )
}

export default HomePage;