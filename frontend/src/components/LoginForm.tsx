"use client";
import AutoForm, { AutoFormSubmit } from "@/components/ui/auto-form";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { loginFormSchema } from "@/lib/zod";
import { serversideSignIn } from "@/utils/signIn";
import Link from "next/link";

export function LoginForm() {
  return (
    <Card className="w-full max-w-md border-0 shadow-none">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          ユーザーネームとパスワードを入力してください
        </CardDescription>
      </CardHeader>
      <AutoForm
        formSchema={loginFormSchema}
        onSubmit={(values) => {
          serversideSignIn(values);
        }}
        fieldConfig={{
          username: {
            inputProps: {
              name: "username",
              placeholder: "ユーザーネーム",
            },
          },
          password: {
            inputProps: {
              name: "password",
              type: "password",
              placeholder: "••••••••",
            },
          },
        }}
      >
        <AutoFormSubmit className="w-full">ログイン</AutoFormSubmit>
        <div className="mt-4 text-center text-sm">
          アカウントをお持ちでない場合{" "}
          <Link href="/signup" className="underline">
            登録
          </Link>
        </div>
      </AutoForm>
    </Card>
  );
}
