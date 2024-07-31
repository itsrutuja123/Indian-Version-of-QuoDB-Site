
export default async function AppLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <div className="mx-20">
            {children}
        </div>
    );
}