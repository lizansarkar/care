"use client"
import React from 'react'
import { signIn } from "next-auth/react"
import Link from 'next/link'

export default function LoginButton() {
    return <Link href={""} className='btn-primary w-full text-center py-3 rounded-xl shadow-md' onClick={()=> signIn()}>Login</Link>
}
