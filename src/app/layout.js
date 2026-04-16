
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Providers from "./lib/providers";
import { Bounce, ToastContainer } from "react-toastify";


export const metadata = {
    title: "KeenKeeper || Home Page",
    description: "KeenKeeper main Home Page",
};

export default function RootLayout({ children }) {
    return (
        <html
            suppressHydrationWarning
            data-theme="light"
            lang="en"
            className={` h-full antialiased`}
        >
            <body className="geistFont min-h-full flex flex-col bg-[#f8fafc]">
                <Providers>
                    <Navbar />
                    {children}
                    <Footer />
                    <ToastContainer
                        position="top-center"
                        autoClose={2000}
                        hideProgressBar
                        newestOnTop
                        closeOnClick={false}
                        rtl={false}
                        pauseOnFocusLoss={false}
                        draggable={false}
                        pauseOnHover={false}
                        theme="light"
                        transition={Bounce}
                    />
                </Providers>
            </body>
        </html>
    );
}
