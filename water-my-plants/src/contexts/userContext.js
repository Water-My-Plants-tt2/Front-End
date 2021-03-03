import { createContext } from "react";

const userContext = createContext({
    id:"",
    username:"",
	password:"",
	phone_number:"",
})

export default userContext;