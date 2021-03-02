import axios from "axios";

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token");
    return axios.create({
        headers:{
            Authorization: token,
        },
        baseURL: `https://greenthumbs-tt2.herokuapp.com/api`,
})
};

