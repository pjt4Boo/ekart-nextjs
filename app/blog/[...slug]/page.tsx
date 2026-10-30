export const instant = false

export default async function Page({ params }: Readonly<{ params: Promise<Readonly<{ slug: readonly string[] }>> }>) {
        const { slug } = await params;
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans ">
            <p>Welcome To the Blog Slug Page {slug.join("/")}</p>
            </div>
    )
}