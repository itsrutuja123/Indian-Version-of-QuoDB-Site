import type { Metadata } from "next";
import { StateContext } from "../../context/form";
export const metadata: Metadata = {
    title: "Indo Movie QuoDb | Contribute",
    description: "Created by sayantan",
};


export default async function AppLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <html lang="en">
            <StateContext>
                <body>{children}</body>
            </StateContext>
        </html>
    );
}