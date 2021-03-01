import React from "react";
import AddPlantForm from "./AddPlantForm";

//Landing Page after Login
//Authenticated user can Create, Update and Delete a plant object. At a minimum, each plant must have the following properties: 
    //id: Integer
    //nickname: String
    //species : String
    //h2oFrequency: Type determined by implementation
    //image: (optional)
//Authenticated user can view a list of created plants.
//A plant can be deleted or selected to present user with a detail view where user can then update any property of the selected plant.


const MyPlants = () => {

    return(
        <div>
            <h2>My Plants</h2>
            <AddPlantForm />
        </div>
    )
}

export default MyPlants;