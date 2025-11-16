import {useEffect, useState} from "react";
import type {ImageResponse} from "../types/fakerResponse.ts";

export default function useFaker(endpoint: string, quantity: number) {
    const [data, setData] = useState<ImageResponse[]>();
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            try {
                const baseUrl: string = "https://fakerapi.it/api/v2";
                const requestUrl: string = `${baseUrl}/${endpoint}?_quantity=${quantity}`

                const response = await fetch(requestUrl);
                const json = await response.json();

                setData(json.data);
            } catch (err: unknown) {
                // @ts-expect-error We cannot set a type for errors other than any or unknown, but if an error comes through it should have a message attached.
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
    }, [endpoint, quantity]);

    return {data, error, isLoading};
}