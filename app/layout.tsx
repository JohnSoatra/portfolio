import "@/assets/styles/global.scss";
import type { Metadata, Viewport } from "next";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
    title: "Soatra",
    description: `
        John Soatra is a creative software engineer that can build very awesome application.
        He's very good at math, so he always embed his knowledge with his creativeness into engineering to make a prefect result.
        He is a kind of person that never give up easily so he is very trustable because when he meets problem,
        he can stay with it all the time however find the best to solve that problem.
        You will like Soatra, if you know him.
    `.trim().replace(/\s+/g, ' '),
    authors: {
        name: 'John Soatra',
        url: 'https://www.soatra.com'
    },
    metadataBase: new URL('https://www.soatra.com')
};

export const viewport: Viewport = {
    themeColor: 'white',
    colorScheme: 'light'
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <head>
                <link rel="preload" href='/fonts/Roboto/roboto-regular.woff2' as="font" type="font/woff2" crossOrigin="anonymous"></link>
                <link rel="preload" href='/fonts/Roboto/roboto-medium.woff2' as="font" type="font/woff2" crossOrigin="anonymous"></link>
                <link rel="preload" href='/fonts/Roboto/roboto-bold.woff2' as="font" type="font/woff2" crossOrigin="anonymous"></link>
            </head>
            <body>
                {children}
                <Toaster />
            </body>
        </html>
    );
}