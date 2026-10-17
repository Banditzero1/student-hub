import { auth } from "@/app/auth";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  if (session.user.role !== "ADMIN") {
    redirect("/unauthorized");
  }

  return (
    <main className="mx-auto max-w-4xl p-8">
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="mt-2 text-gray-600">ยินดีต้อนรับคุณ: <strong>{session.user.name ?? session.user.email}</strong></p>
        <p className="mt-1 text-sm text-green-600 font-semibold">สิทธิ์การใช้งาน: {session.user.role}</p>
      </div>
    </main>
  );
}