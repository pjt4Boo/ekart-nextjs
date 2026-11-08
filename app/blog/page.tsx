"use client";
import Loader from "@/components/Loader";
import { useFetch } from "@/hooks/useFetch";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Post {
  _id: string;
  title: string;
  image: string;
  short_description?: string;
}

export default function Blog() {
  const { data, loading, error } = useFetch<Post[]>("/posts");
  const router = useRouter();
  const handleClick =(uri:string)=>{
                router.push("/blog/"+uri);
        }
  if (loading) return <Loader />;

  if (error) return <p>{error}</p>;
  if (!data || data.length === 0) {
    return <p>No blogs available.</p>;
  }
      
  return (
    <div className="flex flex-col bg-gray-50 px-6 py-12 min-h-screen">
      <h1 className="text-2xl font-bold">Welcome To the Blog Page</h1>
      <div className="grid gird-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transtion-all duration-300 hover:translate-y-2 cursor-pointer"
          >
            <div key={item._id} className="overflow-hidden">
              <Image src={item.image}
                width={500}
                height={300}
                className="w-full h-52 object-cover hover:scale-110 transition-transaform duration-300"
                alt="Picture of the author"
              />
            </div>
            <div className="p-6">
            <h2 className="font-bold text-xl text-gray-900 mt-3 mb-3 line-clamp-3">{item.title}</h2>

            <p className="text-gray-500 text-sm leading-5 line-clamp-3">{item.short_description}</p>
            <button onClick={()=>handleClick(item?._id)} className="text-blue-600 font-semibold text-sm hover:text-blue-800">Read More</button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
