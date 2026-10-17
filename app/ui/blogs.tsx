import Link from "next/link";

interface Blog {
  id: string;
  title: string;
}

export default async function Blogs() {
  // จำลองการโหลดช้า 2 วินาทีเพื่อทดสอบ Skeleton
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const res = await fetch("https://api.vercel.app/blog");
  const blogs: Blog[] = await res.json();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {blogs.map((blog) => (
        <div className="p-4 border border-gray-200 rounded-lg shadow hover:shadow-md transition" key={blog.id}>
          <div className="h-40 bg-blue-50 rounded-md mb-4 flex items-center justify-center font-bold text-blue-500 text-xl">
            ID: {blog.id}
          </div>
          <h3 className="font-semibold text-lg mb-2 text-gray-800 line-clamp-1">
            <Link href={`/blogs/${blog.id}`} className="hover:text-blue-600 underline">
              {blog.title}
            </Link>
          </h3>
          <p className="text-gray-500 text-sm">คลิกเพื่ออ่านรายละเอียดบทความเพิ่มเติม...</p>
        </div>
      ))}
    </div>
  );
}