import { Component } from "react";

export class Landingpage extends Component{
    render(){
        return(
            <>
                <div id="Landing_page_container">
                    <div id="header">
                        <li><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png" alt="Swiggy Logo" id="swiggy_logo"/></li>
                        <li className="headings" id="swiggy_corporate_heading">Swiggy Corporate</li>
                        <li className="headings">Partner with us</li>
                        <li><button id="get_app_button">Get the App <span className="arrow">↗</span></button></li>
                        <li><img src="https://images.ctfassets.net/wtodlh47qxpt/6bJdGLRkksNvWP4LI9ZiFF/cb89d6393492fd093e0f99980abfa39e/Account_Icon.svg?h=36&w=36&fm=webp&fit=fill" alt="" id="profile_logo" /></li>
                    </div>
                    <div id="main_content">
                        <div id="first_image"></div>
                        <div id="middel_division">
                            <h1 id="middel_division_heading">Order food & groceries. Discover<br></br> best restaurants. Swiggy it!</h1>
                            <div id="search_bar_container">
                                <select name="Enter your delivery location" id="dropdown_container">
                                    <option value="content">Enter your delivery location</option>
                                    <option value="Hyderabad">Hyderabad</option>
                                    <option value="Bangalur">Bangalur</option>
                                    <option value="Chennai">Chennai</option>
                                </select>
                                <input type="text" name="search resturents" id="search_resturents_input_box" placeholder="Search for restaurant, item or more"/>
                            </div>
                            <div id="cards_containers">
                                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png " alt=""  id="food_delivery_image"/>
                                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png" alt=""  id="food_delivery_image"/>
                                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png" alt=""  id="food_delivery_image"/>
                            </div>
                        </div>
                        <div id="second_image"></div>
                    </div>
                    {/* <div id="cards_main_container"> */}
                        
                        {/* <div className="cards">
                            <h1 className="cards_heading_first"></h1>
                            <h2 className="cards_heading_second"></h2>
                            <h3 className="cards_heading_third"></h3>
                            <div className="image_arrow_byutton">
                                <button className="right_arrow_button"></button>
                            </div>
                        </div>
                        <div className="cards">
                            <h1 className="cards_heading_first"></h1>
                            <h2 className="cards_heading_second"></h2>
                            <h3 className="cards_heading_third"></h3>
                            <div className="image_arrow_byutton">
                                <button className="right_arrow_button"></button>
                            </div>
                        </div>
                        <div className="cards">
                            <h1 className="cards_heading_first"></h1>
                            <h2 className="cards_heading_second"></h2>
                            <h3 className="cards_heading_third"></h3>
                            <div className="image_arrow_byutton">
                                <button className="right_arrow_button"></button>
                            </div>
                        </div> */}
                    {/* </div> */}
                </div>
            </>
        )
    }
}