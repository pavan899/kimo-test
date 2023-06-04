import axios from 'axios';

export function getData( route :string ) {
    const apiUrl = `https://web-dev.dev.kimo.ai/v1/${route}`;
    axios.get(apiUrl).then((res) =>{
        // res.results
        console.log("res data: ", res);
    }).catch((e)=>{
        console.log("error: ", e);
    })
}