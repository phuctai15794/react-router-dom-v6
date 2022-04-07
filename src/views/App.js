import React from 'react';
import { Outlet } from "react-router-dom";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Nav from "./layouts/Nav";

class App extends React.Component {
    render() {
        return (
            <>
                <div className="container pb-4">
                    <Header />
                    <Nav />
                    <div className="bg-light rounded-1 mb-4 p-3">
                        <Outlet />
                    </div>
                    <Footer />
                </div>
            </>
        );
    }
}

export default App;