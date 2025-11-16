import {Card, Flex, Inset, Skeleton, Strong, Text} from "@radix-ui/themes";

interface Props {
    imageUrl: string;
    title: string;
    isLoading: boolean;
    description?: string;
    altText?: string;
}

export default function Image({imageUrl, title, isLoading, description, altText}: Props) {
    const placeholderImageDesc: string = "Est libero deserunt aspernatur cupiditate optio. Enim dolores magni perspiciatis. Est quisquam in quod dolorem doloremque qui quaerat. Et qui ex et sed dolores cumque odio quasi.";

    return (
        <Card size="2" className="w-full">
            <Skeleton loading={isLoading} minHeight="225px">
                <Inset side="top">
                    <img
                        src={imageUrl}
                        alt={altText ?? title}
                    />
                </Inset>
            </Skeleton>
            <Flex direction="column" pt="3" gap="2">
                <Skeleton loading={isLoading}>
                    <Text as="p" size="4"><Strong>{title}</Strong></Text>
                </Skeleton>
                <Skeleton loading={isLoading}>
                    <Text as="p" size="2">{description ?? placeholderImageDesc}</Text>
                </Skeleton>
            </Flex>
        </Card>
    )
}