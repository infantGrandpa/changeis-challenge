interface Props {
    imageUrl: string;
    title: string;
    description?: string;
    altText?: string;
}

export default function Image({imageUrl, title, altText}: Props) {
    return (
        <img
            src={imageUrl}
            alt={altText ?? title}
            className={"w-48 h-48 object-cover"}
        />)
}