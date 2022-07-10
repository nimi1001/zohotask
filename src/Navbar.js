import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useEffect, useState} from "react";
import {searchFunc} from "./Services/searchService";
import {useNavigate} from 'react-router-dom'



function Nav(props) {
    let navigate = useNavigate()
    const [term,setTerm] = useState(props ? props.term : '')


    const handleSearchSubmit = (e) => {
        e.preventDefault()

        if(term !== ''){
            searchFunc(term).then((res) => {
                if(res){
                    navigate(`/search/${term}`, {state: { search: res.results, term: term }})
                }
            })
        }
    }


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
                            value={term}
                            onChange={(e)=>setTerm(e.target.value)}
                        />
                        <Button variant="outline-primary" onClick={handleSearchSubmit}>Search</Button>
                    </Form>
                </Container>
            </Navbar>
            {/*<Home feature={feature} error={error}/>*/}
        </>
    )
}

export default Nav;