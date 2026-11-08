"use client";

import Image from "next/image";
import { useFetch } from "@/hooks/useFetch";
import Loader from "@/components/Loader";

interface Post {
  _id: string;
  title: string;
  image: string;
  description?: string;
  formattedDate: string;
}

export default function BlogDetails({
  postId,
}: Readonly<{
  postId: string;
}>) {
  const { data, loading, error } = useFetch<Post>(
    `/post/${postId}`
  );

  if (loading) return <Loader />;

  if (error) return <p>{error}</p>;

  if (!data) return <p>Blog not found.</p>;

  return (
<div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6">
  <article className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm overflow-hidden">

    {/* Blog Header */}
    <div className="px-6 sm:px-10 pt-10 pb-8">

      {/* <span className="inline-block bg-blue-50 text-blue-600 text-sm font-semibold px-4 py-2 rounded-full">
        {data.category}
      </span> */}

      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mt-5">
        {data.title}
      </h1>

       <div className="flex flex-wrap items-center gap-4 mt-6 text-sm text-gray-500">
        {/* <span>By <strong className="text-gray-800">{data.author}</strong></span> */}
        <span>•</span>
        <span>{data.formattedDate}</span>
      </div> 
    </div>

    {/* Featured Image */}
    <div className="relative w-full h-64 sm:h-96 lg:h-[480px]">
      <Image
        src={data.image}
        alt={data.title}
        fill
        priority
        sizes="(max-width: 768px) 100vw, 1024px"
        className="object-cover"
      />
    </div>

    {/* Blog Content */}
    <div className="px-6 sm:px-10 py-10">
      <div className="max-w-3xl mx-auto">

        <p className="text-xl text-gray-600 leading-9 font-medium mb-8">
          {data.description}
        </p>

        <div className="text-gray-700 text-base sm:text-lg leading-8 whitespace-pre-line">
          {data.description}
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 mt-10 pt-6">
          <p className="text-sm text-gray-500">
            Thanks for reading this article!
          </p>
        </div>

      </div>
    </div>
  </article>
</div>
  );
}