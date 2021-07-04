import axios from "axios";

export default function customAxios(url, callback){
    axios(
        {
            url : '/api' + url,

            method : 'post',
            //cross domain issue test code
            baseURL : 'http://ec2-15-165-141-204.ap-northeast-2.compute.amazonaws.com:8080/',
            
        }
    ).then(function(response){
        callback(response.data);
    });
}