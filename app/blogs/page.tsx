import { Suspense } from "react";
import Blogs from "@/app/ui/blogs";
import { BlogListSkeleton } from "@/app/ui/my-skeleton";

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-6xl p-6">
      <header className="mb-6 border-b border-gray-200 pb-4">
        <h1 className="text-3xl font-bold text-gray-900">ยินดีต้อนรับสู่บล็อกข่าวสาร</h1>
        <p className="mt-2 text-gray-600">บทความเทคโนโลยีและข่าวสารอัปเดตล่าสุด</p>
      </header>

      <section>
        <h2 className="text-xl font-semibold mb-4 text-gray-800">รายการบทความ</h2>
        <Suspense fallback={<BlogListSkeleton />}>
          <Blogs />
        </Suspense>
      </section>
    </main>
  );
}