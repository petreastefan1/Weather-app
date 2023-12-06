import React from "react";

function api(path,method) {

    const url = "http://api.weatherapi.com/v1" + path;
    const options = {
        method,
        headers: {
            accept: 'Content-Type: application/json',
            key: 'bf5d83ccf8724afebb0102308230412'
        }
    }

    return fetch(url, options)
}

function ipApi(){
    const url="http://ip-api.com/json";
    const options = {
        headers: {
            accept: 'Content-Type: application/json',
        }
    }
    return fetch(url, options)
}


export async function getCityWeather(){
    try{
        let data = await api("/current.json?q=Paris&lang=english","GET")

        let response = await data.json();

        return response

    }

    catch(error){
        console.log(error.code)
        console.log(error.message)
        return[]
    }


}

export async function getCurrentIp(){
    try{
        let data = await ipApi()

        let response = await data.json()

        return response
    }

    catch(error){
        console.log(error.code)

    }

}