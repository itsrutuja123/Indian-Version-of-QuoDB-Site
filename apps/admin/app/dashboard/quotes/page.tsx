"use client";

import PageContainer from "../../../components/Layout";
import { Label } from "@ui/components/label";
import { Quotes } from "../../../libs/data";
import useSWR from "swr";
import { fetcher } from "../../../libs/utils";
import { QuotesTable } from "../../../components/Tables/QuotesTable";
import { columns } from "../../../components/Tables/columns";


type paramsProps = {
    searchParams: {
        [key: string]: string | string[] | undefined;
    };
};

export default function Dashboard({ searchParams }: paramsProps) {

    const page = Number(searchParams.page) || 1;
    const pageLimit = Number(searchParams.limit) || 10;


    const { data, error, isLoading } = useSWR("/api/quote", fetcher);

    if (isLoading) return <div>Loading...</div>

    if (error) return <div>Failed to load</div>

    if (!isLoading && !error && !data) return <div>No data</div>

    const quotes = data;
    const totalQuotes = data?.length;
    const pageCount = Math.ceil(totalQuotes / pageLimit);

    return (
        <PageContainer scrollable={true}>
            <div className="grid grid-cols-1 gap-5">
                <Label className="text-4xl font-bold">All Quotes</Label>
                {!isLoading && data && (
                    <QuotesTable
                        searchKey="quotes"
                        pageNo={page}
                        columns={columns}
                        totalUsers={totalQuotes}
                        data={quotes}
                        pageCount={pageCount}
                    />
                )}
            </div>
        </PageContainer>
    );
}

// import { Separator } from '@/components/ui/separator';

// import { Plus } from 'lucide-react';
// import Link from 'next/link';

// const breadcrumbItems = [
//     { title: 'Dashboard', link: '/dashboard' },
//     { title: 'Employee', link: '/dashboard/employee' }
// ];

// type paramsProps = {
//     searchParams: {
//         [key: string]: string | string[] | undefined;
//     };
// };

// export default async function page({ searchParams }: paramsProps) {
// const page = Number(searchParams.page) || 1;
// const pageLimit = Number(searchParams.limit) || 10;
// const country = searchParams.search || null;
// const offset = (page - 1) * pageLimit;

//     const res = await fetch(
//         `https://api.slingacademy.com/v1/sample-data/users?offset=${offset}&limit=${pageLimit}` +
//         (country ? `&search=${country}` : '')
//     );
//     const employeeRes = await res.json();
//     const totalUsers = employeeRes.total_users; //1000
//     const pageCount = Math.ceil(totalUsers / pageLimit);
//     const employee: Employee[] = employeeRes.users;
//     return (
//         <PageContainer>
//             <div className="space-y-4">
//                 <Breadcrumbs items={breadcrumbItems} />

//                 <div className="flex items-start justify-between">
//                     <Heading
//                         title={`Employee (${totalUsers})`}
//                         description="Manage employees (Server side table functionalities.)"
//                     />

//                     <Link
//                         href={'/dashboard/employee/new'}
//                         className={cn(buttonVariants({ variant: 'default' }))}
//                     >
//                         <Plus className="mr-2 h-4 w-4" /> Add New
//                     </Link>
//                 </div>
//                 <Separator />

//                 <EmployeeTable
//                     searchKey="country"
//                     pageNo={page}
//                     columns={columns}
//                     totalUsers={totalUsers}
//                     data={employee}
//                     pageCount={pageCount}
//                 />
//             </div>
//         </PageContainer>
//     );
// }
