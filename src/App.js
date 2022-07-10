import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import SearchComponent from "./SearchComponent";
import Home from "./Home";

const App = () => {
    return(
        <Router>
            <Routes>
                <Route exact path="/" name="Home" element={<Home />} />
                <Route exact path="/search/:name" name="Search" element={<SearchComponent />} />
            </Routes>
        </Router>
    )
}

export default App