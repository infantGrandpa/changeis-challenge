import useFaker from "../hooks/useFaker.ts"
import type {ImageResponse} from "../types/fakerResponse.ts";

export default function DataDisplay() {
    const {data, error, isLoading} = useFaker('images', 3);

    return <div className="text-2xl">
        <p>Data Display</p>
        {isLoading && <p>Loading...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
        <div className="flex flex-row flex-wrap">
            {data?.map((image: ImageResponse, index: number) => (
                <img
                    key={index}
                    src={image.url}
                    alt={image.title}
                    className={"w-48 h-48 object-cover"}
                />
            ))}
        </div>
    </div>
}