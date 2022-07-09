import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useEffect, useState} from "react";
import {searchFunc} from "./Services/searchService";
import App from "./App";
import {featureFunc} from "./Services/featureService";
import {trendingFunc} from "./Services/trendingService";

function Nav() {
    const [term,setTerm] = useState('')
    const [error,setError]= useState(false)
    const[search,setSearch]=useState([])
    const [trend,setTrend]= useState([])
    const [feature,setFeature]= useState([])

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

    useEffect( ()=>{
      if(term !== ''){
          searchFunc(term).then((res) => {
              if(res){
                  console.log(res)
              }
          })
      }
    },[term])


    return (
        <>
            <Navbar bg="light">
                <Container>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            onChange={(e)=>setTerm(e.target.value)}
                        />
                        <Button variant="outline-primary">Search</Button>
                    </Form>
                </Container>
            </Navbar>
            <App feature={feature} error={error}/>
        </>
    )
}

export default Nav;