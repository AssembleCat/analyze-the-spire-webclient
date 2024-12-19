import type {Metadata} from "next";
import CardSelector from "@/components/CardSelector"
import DeckDisplay from "@/components/DeckDisplay"

export const metadata: Metadata = {
    title: "Home"
};

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <main className="flex flex-1 p-4">
                <CardSelector className="w-1/2 pr-4" />
                <DeckDisplay className="w-1/2 pl-4" />
            </main>
        </div>
    );
}
