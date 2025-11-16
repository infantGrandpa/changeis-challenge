import useFaker from "../hooks/useFaker.ts"
import type {ImageResponse} from "../types/fakerResponse.ts";
import Image from "./Image.tsx";
import {Button, Flex, Spinner} from "@radix-ui/themes";

export default function DataDisplay() {
    const imageCount = 3
    const {data, error, isLoading, refetchCount, refetchData} = useFaker('images', imageCount);
    const refetchOffset: number = refetchCount * imageCount;
    //TODO: Add change quantity button

    return (
        <>
            {error && <p className="text-red-500">Error: {error}</p>}
            <Flex direction="row" justify="center" pb="3">
                <Button onClick={refetchData} size="2" disabled={isLoading}>
                    {isLoading && <Spinner />}
                    {isLoading ? "Fetching Images..." : "Fetch New Images"}
                </Button>
            </Flex>
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
                            key={index + refetchOffset}
                            imageUrl={currentImageData?.url ? `${currentImageData.url}?v=${index + refetchOffset}` : ''}
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