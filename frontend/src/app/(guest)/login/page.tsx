import { auth } from "@/auth";
import { LoginForm } from "@/components/LoginForm";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await auth();
  if (session) {
    redirect("/");
  }
  return (
    <div className="flex justify-center items-center w-full min-h-screen">
      <LoginForm />
    </div>
  );
}
