import axios from 'axios';
const httpClient = axios.create({ timeout: 2 * 60 * 1000 });
httpClient.defaults.timeout = 10000;


export const fetchApi = async (url,data) => {

  

  try {

    const response = await httpClient.post(url,data)
    if (response.status == '200' || response.status == '201') {
      return response;
    }

  } catch (error) {
    if(error.response==undefined){
      const error={
        data:{
        message:"Unable to reach the servers. Check if your internet connection is stable"
        }
      }
      return {
        error: error
      };
    }else{
      return {
        error: error.response
      };
    }
  }
};