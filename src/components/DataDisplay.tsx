import useFaker from "../hooks/useFaker.ts"
import type {ImageResponse} from "../types/fakerResponse.ts";

export default function DataDisplay() {
    const {data, error, isLoading} = useFaker('images', 1);
    const image: ImageResponse | undefined = data?.data[0];

    return <div className="text-2xl">
        <p>Data Display</p>
        {isLoading && <p>Loading...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
        <div className="flex flex-row flex-wrap">
            {image && <img src={image.url} alt={image.title}/>}
        </div>
    </div>
}