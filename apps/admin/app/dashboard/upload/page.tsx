"use client";

import React, { useState } from "react";
import AddQuoteForm from "../../../components/Forms/addQuoteForm";
import PageContainer from "../../../components/Layout";
import { Label } from "@ui/components/label";

export default function Dashboard() {

    return (
        <PageContainer scrollable={true}>
            <div className="grid grid-cols-1 gap-5">

                <Label className="text-4xl font-bold">Upload Quotes</Label>

                <div>
                    <AddQuoteForm />
                </div>
            </div>
        </PageContainer>
    );
}
