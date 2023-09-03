// api key = 9b6b424f000143109c4120743231105
import axios from "axios";
import { apiKey } from './ApiKey';

const forecastEndpoint = params=> `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${params.cityName}&days=${params.days}&aqi=no`;
const locationsEndpoint = params=> `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${params.cityName}&aqi=no`;

const apiCall = async (endpoint)=>{
    const option = {
        method:'GET',
        url:endpoint
    }
    try{
        const response = await axios.request(option);
        return response.data;
    }catch(err){
        console.log('error: ',err);
        return null;
    }
}

export const fetchWeatherForecast = params=>{
    return apiCall(forecastEndpoint(params));
}
export const fetchLocations = params=>{
    return apiCall(locationsEndpoint(params));
}