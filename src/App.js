import react from "react";
import Trending from "./Trending";
import'./index.css'
import {findAllByDisplayValue} from "@testing-library/react";

function App(props) {

    const {feature, error} = props

    const isError=()=>{
        if (error){
            return <h1>Error occured</h1>
        }
    }
    if (feature.length ===0){
        return <h1>No data</h1>
    }

    const gifRender=()=>{
        return feature.map((arr,i)=>{
            return (
                <div className='row'>
                    <div className="col-xl-3">
                        <img key={i} src={arr.media_formats.tinygif.url} alt="gif" className='p-1'/>
                    </div>
                </div>
            )
        })
    }


    return (
        <div className='container'>

            <Trending />
            <h1>Featured Gif</h1>
            <div className='row'>{feature && feature.length&&feature.map((arr,i)=> {
                return (
                    <div className="col-3" key={i}>
                        <img src={arr.media_formats.tinygif.url} alt="gif" className='giflist column'/>
                    </div>
                    )
            })}
            </div>

        </div>
    );
}

export default App;
