import "./globals.css";

export const metadata = {
    title: "ClimaCast",
    description: "One place dashboard for Eco information",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
