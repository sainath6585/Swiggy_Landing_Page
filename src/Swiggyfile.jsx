import { Component } from "react";
import { Landingpage } from "./components/Landingpage";
import { Menu } from "./components/Menu";
import { Instamart } from "./components/Instamart";
import { Banner } from "./components/Banner";
import Footer from "./components/Footer";

export class Swiggyfile extends Component{
    render(){
        return(
            <>
                <Landingpage/>
                <Menu/>
                <Instamart/>
                <Banner/>
                <Footer/>
            </>
        )
    }
}