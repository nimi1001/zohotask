import react from "react";
import {useLocation} from "react-router-dom";
import Nav from "./Navbar";

const SearchComponent = () => {

    const { state } = useLocation()

    const gifRender=()=>{
        return state && state.search.length && state.search.map((arr,i)=>{
            return <img key={i} src={arr.media_formats.tinygif.url} alt="gif" className='p-1'/>
        })
    }

    return(
        <>
            <Nav term={state && state.term}/>
            <div className="container">
                <section className='mt-5' >
                    <div className='img-div justify-content-center align-content-center d-flex flex-wrap'>{gifRender()}</div>
                </section>

            </div>
        </>
    )
}

export default SearchComponent