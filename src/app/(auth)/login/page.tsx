import type { Metadata } from "next";
import Link from "next/link";
import { AuthCard } from "@/components/auth/AuthCard";
import { authNav } from "@/data/Navigation";
import { AuthIntro } from "@/components/auth/AuthIntro";
import { LoginForm } from "@/components/auth/LoginForm";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to ByteSpace to  learning.",
};

const titleId = "login-title";

export default function LoginPage() {
  return (
    <>
      <AuthIntro
        title="Sign in with ease"
        description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
      />
      <AuthCard
        eyebrow="Sign In"
        title="Welcome Back"
        titleId={titleId}
        footer={
          <>
            New user?{" "}
            <Link href={authNav.join.href} className="rounded-sm text-primary-800 hover:underline">
              Create an account
            </Link>
          </>
        }
      >
        <LoginForm labelledBy={titleId} />
       
      </AuthCard>
    </>
  );
}