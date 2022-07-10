import react, {Fragment, useEffect, useState} from "react";
import {trendingFunc} from "./Services/trendingService";
import {searchFunc} from "./Services/searchService";
import './index.css'
import {useNavigate} from "react-router-dom";

const  Trending = () => {
    let navigate = useNavigate()

    const [trendKey, setTrendKey] = useState([])
    const [trendGif, setTrendGif] = useState([])
    const [current, setCurrent] = useState({
        start: 1,
        end: 5
    })

    const length = trendGif && trendGif.length > 0 && trendGif.length
    let found = false

    useEffect(() => {
        trendingFunc().then((res) => {
            if(res){
                if(res.results && res.results.length > 0){
                    setTrendKey(res.results)
                }else{
                    setTrendKey([])
                }
            }
        })
    },[])

    useEffect(() => {
        loadTrendingGif()
    },[trendKey])


    const loadTrendingGif = () => {

        trendKey && trendKey.length && trendKey.map((term,i) => {
            searchFunc(term).then((res) => {
                if(res.results && res.results.length > 0){
                    res.results[0].title = term
                    setTrendGif(oldArray => [...oldArray,res.results[0]])
                }
            })
        })
    }

    if (trendGif.length ===0){
        return <h1>No data</h1>
    }


    const nextSlide = () => {
        setCurrent({
            start: current.end + 1,
            end: current.end + 5
        })
    };

    const prevSlide = () => {
        setCurrent({
            start: current.start - 5,
            end: current.end - 5
        })
    }

    const handleSearchSubmit = (e, term) => {
        e.preventDefault()

        if(term !== ''){
            searchFunc(term).then((res) => {
                if(res){
                    navigate(`/search/${term}`, {state: { search: res.results, term: term }})
                }
            })
        }
    }

    const gifRender=()=>{
        return trendGif && trendGif.length && trendGif.map((arr,i)=>{

            return(
                <Fragment key={i}>
                    {(i + 1 <= current.end && i + 1 >= current.start) &&
                        <div className='col-2' onClick={(e) => handleSearchSubmit(e,arr.title)}>
                            <img src={arr.media_formats.tinygif.url} alt="gif" className='m-3 trending'/>
                            <p className=''><b>{arr.title}</b></p>
                        </div>

                    }
                </Fragment>
            )
        })
    }


    return(
        <div className='container'>
            <h1 className='m-2'>Trending Gif</h1>
            <div className="d-flex carousel-container justify-content-around">
                {current.start !== 1 && <div className="position-relative" onClick={prevSlide}><img className="position-absolute left-arrow " src="/img/carousel-arrow_prev.svg" alt="left-arrow"/></div>
                }
                {gifRender()}


                {!found && <div className="position-relative"  onClick={nextSlide}><img className="position-absolute right-arrow " src="/img/carousel-arrow_next.svg" alt="right-arrow"/></div>
                }
            </div>

        </div>
    )
}

export default Trending