import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl p-8 text-center">
      <h2 className="text-2xl font-bold text-red-600">404 - ไม่พบบทความนี้ในระบบ</h2>
      <p className="mt-2 text-gray-600">
        รหัสบทความที่คุณค้นหาไม่มีอยู่จริง หรืออาจถูกลบออกไปแล้ว
      </p>

      <div className="mt-6">
        <Link
          href="/blogs"
          className="inline-block rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
        >
          ← ย้อนกลับไปยังหน้ารายการบทความทั้งหมด
        </Link>
      </div>
    </div>
  );
}