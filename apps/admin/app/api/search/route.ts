import { NextResponse, NextRequest } from "next/server";
import axios from "axios";
import prisma from "../../../libs/prisma";

export const dynamic = 'force-dynamic'

export const POST = async (
    request: NextRequest
) => {
    const req = await request.json();
    const response = await axios.get("http://localhost:8000/v1/quote/search?query=" + req.quote);
    const quotesData = response.data;

    const quotes: any[] = [];

    quotesData.map(async (quote: any) => {
        const data = await prisma.quotes.findFirst({
            where: {
                id: quote.quoteId
            },
            select: {
                id: true,
                movie: true,
                year: true,
                quote: true,
                language: true
            }
        })
        quotes.push(data);
    });
    return NextResponse.json(quotes);
};