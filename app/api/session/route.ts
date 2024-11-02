"use server"

import { auth } from '@/auth';
import { NextResponse } from 'next/server';

export const GET = async (): Promise<NextResponse> => {
    try {
        const session = await auth(); 
        return NextResponse.json(session); 
    } catch (error: unknown) {  
        return NextResponse.json("There is a error in fetching session", {status : 500})
    }
};