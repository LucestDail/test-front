import axios from "axios";

export default function customAxios(url, callback){
    axios(
        {
            url : '/api' + url,

            method : 'post',
            //cross domain issue test code
            baseURL : 'http://localhost:8080',
            withCredentials : true,
            
        }
    ).then(function(response){
        callback(response.data);
    });
}