import {Card, Inset, Text} from "@radix-ui/themes";

interface Props {
    imageUrl: string;
    title: string;
    description?: string;
    altText?: string;
}

export default function Image({imageUrl, title, altText}: Props) {
    return (
        <Card size="2">
            <Inset side="top" pb="current">
                <img
                    src={imageUrl}
                    alt={altText ?? title}
                />
            </Inset>
            <Text as="p" size="4">{title}</Text>
        </Card>
    )
}