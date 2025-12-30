import { Component } from "react"

export class Menu extends Component{
    render(){
        return(
            <>
                <div id="best_food_options_container">
                    <div id="best_food_options_head_container">
                        <h2 id="best_food_option_heading">Order our best food options</h2>
                            <div id="best_food_option_buttons">
                                <button className="arrow_buttons" id="left_arrow"><i class="fa-solid fa-arrow-left"></i> </button>
                                <button className="arrow_buttons"><i class="fa-solid fa-arrow-right"></i> </button>
                            </div>
                        </div>
                        <div id="menu_items">
                            <div id="first_row_best_food_option">
                                <button className="menu_image_buttons"><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Biryani.png" alt="" className="menu_images"/></button>
                                <button className="menu_image_buttons"><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/South%20Indian.png" alt="" className="menu_images"/></button>
                                <button className="menu_image_buttons"><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pizza.png" alt=" FirstImage" className="menu_images"/></button>
                                <button className="menu_image_buttons"><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Cake.png" alt="" className="menu_images"/></button>
                                <button className="menu_image_buttons"><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Burger.png" alt="" className="menu_images"/></button>
                                <button className="menu_image_buttons"><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Rolls.png" alt="" className="menu_images"/></button>
                            </div>
                            <div id="second_row_best_food_option">
                                <button className="menu_image_buttons"><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/North%20Indian.png" alt="" className="menu_images"/></button>
                                <button className="menu_image_buttons"><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pasta.png" alt="" className="menu_images"/></button>
                                <button className="menu_image_buttons"><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Shawarma.png" alt=" FirstImage" className="menu_images"/></button>
                                <button className="menu_image_buttons"><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Ice%20Cream.png" alt="" className="menu_images"/></button>
                                <button className="menu_image_buttons"><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Shake.png" alt="" className="menu_images"/></button>
                                <button className="menu_image_buttons"><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Salad.png" alt="" className="menu_images"/></button>
                            </div>
                        </div>
                    </div>
            </>
        )
    }
} 