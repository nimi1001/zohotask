import react from "react";
import Trending from "./Trending";
import'./index.css';
import {searchFunc} from "./Services/searchService";


function App(props) {

    const {feature, error, search} = props


    if (feature.length ===0){
        return <h1>No data</h1>
    }

    if (search){
        console.log("se", search)
    }


    const gifRender=()=>{
        return feature.map((arr)=>{
            return <img src={arr.media_formats.tinygif.url} alt="gif" className='p-1'/>
        })
    }
    console.log("feature",feature)

    return (
        <div className='container'>

            <Trending />
            <section className='mt-5' >
                <h1 className='m-2'>Featured Gif</h1>
                <div className='img-div justify-content-center align-content-center d-flex flex-wrap'>{gifRender()}</div>
            </section>

        </div>
    );

}

export default App;
