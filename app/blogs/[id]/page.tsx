import { notFound } from "next/navigation";

interface Blog {
  id: string;
  title: string;
  content?: string;
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const res = await fetch("https://api.vercel.app/blog");
  const blogs: Blog[] = await res.json();

  const blog = blogs.find((x) => String(x.id) === id);

  if (!blog) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl p-6">
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{blog.title}</h1>
        <p className="text-gray-600">รายละเอียดบทความ ID: {blog.id}</p>
        <div className="mt-6 pt-4 border-t border-gray-100">
          <a href="/blogs" className="text-blue-600 hover:underline">
            ← ย้อนกลับไปยังหน้ารายการบทความ
          </a>
        </div>
      </div>
    </main>
  );
}