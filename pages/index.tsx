import { Inter } from "next/font/google";
import Header from "./Components/Header";
import StatusHero from "./Components/StatusHero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <main className="bg-black w-full h-screen">
            <Header />
            <StatusHero />
        </main>
    );
}
