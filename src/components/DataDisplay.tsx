import useFaker from "../hooks/useFaker.ts"
import type {ImageResponse} from "../types/fakerResponse.ts";
import Image from "./Image.tsx";
import {Flex} from "@radix-ui/themes";

export default function DataDisplay() {
    const imageCount = 3
    const {data, error, isLoading} = useFaker('images', imageCount);

    return (
        <>
            {error && <p className="text-red-500">Error: {error}</p>}

            <Flex gap="3" justify="between">
                {/*
                We append the index as the version to each image URL to prevent it from being stored in the cache.
                Since each image is technically coming from the same URL, the browser caches it.
                Adding version to the url prevents this, allowing us to display multiple images from the same url.
                 */}

                {Array.from({length: imageCount}).map((_, index: number) => {
                    const currentImageData: ImageResponse | undefined = data?.[index];

                    return (
                        <Image
                            key={index}
                            imageUrl={currentImageData?.url ? `${currentImageData.url}?v=${index}` : ''}
                            title={currentImageData?.title || ''}
                            description={currentImageData?.description}
                            isLoading={isLoading}
                            altText={currentImageData?.title || ''}
                        />
                    );
                })}

            </Flex>
        </>
    )
}