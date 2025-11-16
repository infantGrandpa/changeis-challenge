import DataDisplay from "./components/DataDisplay.tsx";
import {Container} from "@radix-ui/themes";

function App() {
    return (
        <Container size="3" p="8">
            <DataDisplay/>
        </Container>
    )
}

export default App
