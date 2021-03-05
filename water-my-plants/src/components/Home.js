import React from "react";
import "../components/Styling";

export default function Home ( props ) {

    return(
        <div className="body-content">
				<h2>Plant Lives Matter</h2>
				<p>Do you keep throwing away your houseplants each season? Do you have yellow or brown leaves forming? Too busy to maintain consist water cycles? Don't have a green thumb?<br/>If you said yes to any of these questions, well you're in luck! The fellas'at <span>WeWetYourPlants</span> are proud to bring your plants back from the brink of death. You're just moments away to getting the routine of watering your plants in a timely manner! Sign up or login to see which of your plants need your attention. </p><br/>

            <div className="other-container">
                <h2>Things to consider</h2>
                    <p>Even thought water is a very important factor to keep your plants alive, there's a host of other variables at play to keep in mind. Here's a few....</p><br/> 
                <div className="info-container">
                    <div className="box-info">
                        <h3>Light</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et magnis dis parturient montes.</p>
                    </div>
                    <div className="box-info">
                        <h3>Soil</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam.</p>
                    </div>
                    <div className="box-info">
                        <h3>Temperture</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A lacus vestibulum sed arcu non odio euismod lacinia.</p>
                    </div>
                    <div className="box-info">
                        <h3>Humidity</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc lobortis mattis aliquam faucibus purus in massa tempor nec.</p>
                    </div>
                </div>
            </div>


		</div>
    )
}