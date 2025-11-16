import {useEffect} from "react";

export default function useFaker(endpoint: string, quantity: number) {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const baseUrl: string = "https://fakerapi.it/api/v2";
                const requestUrl: string = `${baseUrl}/${endpoint}?_quantity=${quantity}`

                const response = await fetch(requestUrl);
                const json = await response.json();
                console.log(json)
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, [endpoint, quantity]);


}