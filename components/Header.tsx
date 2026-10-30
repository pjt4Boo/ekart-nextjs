"use client";
import Link from "next/link";
//import {useState} from "react";

export default function Header(){
    return (
        <header className="bg-blue-500 items-center flex gap-4 p-4 text-white">
        <nav className="flex gap-4">
            <Link href="/" >Home</Link>
            <Link href="/blog" >Blog</Link>
            <Link href="/about" >About</Link>
        </nav>
        </header>

    )
}