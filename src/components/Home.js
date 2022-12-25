import {useContext,useState,useEffect} from 'react';
import {AppContext} from '../App';

const Home = (props) => {

  const {token} = useContext(AppContext);

  useEffect(()=>{
    console.log('token home=>',token);
  },[token]);

  return(
    <div>
      <h1>Home</h1>
    </div>
  )
}
export default Home
