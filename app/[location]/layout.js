import Image from "next/image";
import "../globals.css";

export const metadata = {
    title: "ClimaCast",
    description: "One place dashboard for Eco information",
};

export default function RootLayout({
    children,
    aqi,
    weather,
    temperature,
    wind,
}) {
    return (
        <div className="wrapper font-bold text-xl">
            <div class="overlay"></div>
            <Image
                src="/background.png"
                className="bg-img"
                width={1400}
                height={1200}
                alt="background"
            />

            <main className="!z-50 w-full">
                <div className="container">
                    <div class="grid grid-cols-12 gap-y-8 py-16 lg:gap-8 2xl:gap-20 2xl:py-20">
                        {" "}
                        {children}
                        {weather}
                        {aqi}
                        {wind}
                        {temperature}
                    </div>
                </div>
            </main>
        </div>
    );
}
