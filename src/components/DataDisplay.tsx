import useFaker from "../hooks/useFaker.ts"
import type {ImageResponse} from "../types/fakerResponse.ts";
import Image from "./Image.tsx";
import {Flex} from "@radix-ui/themes";

export default function DataDisplay() {
    const {data, error, isLoading} = useFaker('images', 3);

    return (
       <>
            {isLoading && <p>Loading...</p>}
            {error && <p className="text-red-500">Error: {error}</p>}

            <Flex gap="3" justify="between">
                {/*
                We append the index as the version to each image URL to prevent it from being stored in the cache.
                Since each image is technically coming from the same URL, the browser caches it.
                Adding version to the url prevents this, allowing us to display multiple images from the same url.
                 */}
                {data?.map((image: ImageResponse, index: number) => (
                    <Image
                        key={index}
                        imageUrl={`${image.url}?v=${index}`}
                        title={image.title}
                        altText={image.title}
                    />
                ))}
            </Flex>
       </>
    )
}