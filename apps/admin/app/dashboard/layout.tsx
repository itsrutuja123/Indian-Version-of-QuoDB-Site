import { getSession } from "../../lib/auth";
import { redirect } from "next/navigation";
import Navbar from "../../components/Navbar";
export default async function AppLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    const session = await getSession();
    if (!session) redirect('/')

    return (
        <div className="mx-20">

            <Navbar />
            {children}

        </div>
    );
}