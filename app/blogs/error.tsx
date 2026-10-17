"use client";

export default function BlogErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="mx-auto max-w-xl p-8 text-center">
      <h2 className="text-xl font-bold text-red-600">เกิดข้อผิดพลาดเฉพาะส่วน Blogs</h2>
      <p className="mt-2 text-gray-600">{error.message || "ไม่สามารถโหลดข้อมูลบทความได้"}</p>
      <button
        type="button"
        onClick={() => reset()}
        className="mt-4 rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
      >
        ลองใหม่อีกครั้ง
      </button>
    </div>
  );
}