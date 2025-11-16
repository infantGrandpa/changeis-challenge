import useFaker from "../hooks/useFaker.ts"

export default function DataDisplay() {
    useFaker('images', 3);

    return <div className="text-2xl">
        <p>Data Display</p>
    </div>
}