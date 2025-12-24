"use client"
import React from 'react'
import { signIn } from "next-auth/react"
import Link from 'next/link'

export default function LoginButton() {
    return <Link href={""} className='btn-primary w-full text-center rounded-3xl shadow-md px-6 py-2.5' onClick={()=> signIn()}>Login</Link>
}
