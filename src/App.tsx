import React from 'react';
import './App.css';
import {NavBar} from "./static/commons/navbar";
import {Home} from "./static/home";
import {Footer} from "./static/commons/footer";


export const App: React.FC = () => {

    return (
        <div>
            <div className="App">
                <NavBar/>
                <Home />
                <Footer />
            </div>
        </div>
    )
}

export default App;
