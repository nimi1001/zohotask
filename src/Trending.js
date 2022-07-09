import react, {useEffect, useState} from "react";
import {trendingFunc} from "./Services/trendingService";
import {searchFunc} from "./Services/searchService";
import './index.css'

const  Trending = () => {
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

    const gifRender=()=>{
        return trendGif && trendGif.length && trendGif.map((arr,i)=>{
            return(
                <>
                    {(i + 1 <= current.end && i + 1 >= current.start) &&
                        <div className='col-2'>
                            <img key={i} src={arr.media_formats.tinygif.url} alt="gif" className='p-1 trending'/>
                        </div>

                    }
                </>
            )
        })
    }


    return(
        <div className='container'>
            <h1>Trending Gif</h1>
            <div className="row">
                {gifRender()}
                {current.start !== 1 && <div onClick={prevSlide}>----</div>
                }

                {!found && <div onClick={nextSlide}>----</div>
                }
            </div>

        </div>
    )
}

export default Trending