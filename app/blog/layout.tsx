import type { ReactNode } from "react";
export default function BlogLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (<div className="min-h-screen flex flex-col items-center py-18 px-8">
        <h2 className="text-2xl font-bold mb-4">Blog</h2>
        {children}
    </div>)   
}