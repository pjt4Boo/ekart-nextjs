import BlogDetails from "./BlogDetailsPage";
export const instant = false

export default async function Page({
  params,
}: Readonly<{
  params: Promise<{ slug: string[] }>;
}>) {
  const { slug } = await params;
  const postId = slug[0];

  return <BlogDetails postId={postId} />;
}