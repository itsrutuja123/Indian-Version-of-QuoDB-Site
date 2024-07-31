'use client';
import { Checkbox } from '@ui/components/checkbox';
import { Quotes } from '../../lib/data';
import { ColumnDef } from '@tanstack/react-table';


export const columns: ColumnDef<Quotes>[] = [
    {
        id: 'select',
        header: ({ table }) => (
            <Checkbox
                checked={table.getIsAllPageRowsSelected()}
                onCheckedChange={(value: any) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value: any) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false
    },
    {
        accessorKey: 'movie',
        header: 'Movie'
    },
    {
        accessorKey: 'quote',
        header: 'Quote'
    },
    {
        accessorKey: 'year',
        header: 'Year'
    },
    {
        accessorKey: 'language',
        header: 'Language'
    },
    // {
    //     accessorKey: 'name',
    //     header: 'Contributed By'
    // }
];