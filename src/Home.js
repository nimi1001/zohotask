import react, {useEffect, useState} from "react";
import Trending from "./Trending";
import'./index.css';
import Nav from "./Navbar";
import {featureFunc} from "./Services/featureService";

function Home(props) {

    const [feature,setFeature]= useState([])
    const [error,setError]= useState(false)

    useEffect( ()=>{

        featureFunc().then((res) => {
            if(res){
                if(res.results && res.results.length > 0){
                    setFeature(res.results)
                }else{
                    setFeature([])
                }
            }
        })

    },[])


    if (feature.length ===0){
        return <h1>No data</h1>
    }

    const gifRender=()=>{
        return feature.map((arr,i)=>{
            return <img key={i} src={arr.media_formats.tinygif.url} alt="gif" className='p-1'/>
        })
    }


    return (
        <>
            <Nav />
            <div className='container'>
                <Trending />
                <section className='mt-5' >
                    <h1 className='m-2'>Featured Gif</h1>
                    <div className='img-div justify-content-center align-content-center d-flex flex-wrap'>{gifRender()}</div>
                </section>

            </div>
        </>

    );

}

export default Home;
