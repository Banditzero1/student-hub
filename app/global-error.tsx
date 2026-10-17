"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="th">
      <body>
        <div className="flex h-screen flex-col items-center justify-center p-6 text-center">
          <h1 className="text-3xl font-bold text-red-600">Global Error Detected</h1>
          <p className="mt-2 text-gray-600">เกิดข้อผิดพลาดร้ายแรงของระบบในระดับ Root Layout</p>
          <button
            type="button"
            onClick={() => reset()}
            className="mt-4 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            ลองใหม่อีกครั้ง
          </button>
        </div>
      </body>
    </html>
  );
}