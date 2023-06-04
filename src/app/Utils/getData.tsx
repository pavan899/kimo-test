import axios from 'axios';

export function getData( route :string ) {
    const apiUrl = `https://web-dev.dev.kimo.ai/v1/${route}`;
    const options = {
        method: 'GET',
        url: apiUrl,
        mode: 'cors',
        origin: 'web-dev.dev.kimo.ai',
        transformRequest: [(data:any, headers:any) => {
          // transform the data
          return data;
        }]
      };
      axios(options);
    // const apiUrl = `https://web-dev.dev.kimo.ai/v1/${route}`;
    // axios.get(apiUrl, { data: {mode: 'cors'} }).then((res) =>{
    //     // res.results
    //     console.log("res data: ", res);
    // }).catch((e)=>{
    //     console.log("error: ", e);
    // })
}