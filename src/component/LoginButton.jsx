"use client"
import React from 'react'
import { signIn } from "next-auth/react"

export default function LoginButton() {
    return <button className='btn' onClick={()=> signIn()}>Login</button>
}
