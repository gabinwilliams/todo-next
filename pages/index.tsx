import { Inter } from "next/font/google";
import Header from "./Components/Header";
import StatusHero from "./Components/StatusHero";
import AddTaskInput from "./Components/AddTaskInput";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <main className="bg-black w-full h-screen">
            <Header />
            <StatusHero />
            <AddTaskInput />
        </main>
    );
}
