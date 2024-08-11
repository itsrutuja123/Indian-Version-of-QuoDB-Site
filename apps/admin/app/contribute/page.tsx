import FormHandler from "../../components/Contribute/FormHandler";
import { Heading } from "@ui/components/heading";
export default function Home() {
    return (
        <main>
            <div className="flex flex-col h-screen items-center gap-10 justify-center">
                <div className="flex-col flex items-center gap-2">
                    <h1>Hey there</h1>
                    <p>Contribute to our project</p>
                </div>
                <FormHandler />
            </div>
        </main>
    );
}