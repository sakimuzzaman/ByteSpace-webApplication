import type { Metadata } from "next";
import Link from "next/link";
import { AuthCard } from "../../../components/auth/AuthCard";
import { authNav } from "@/data/Navigation";
import { AuthIntro } from "@/components/auth/AuthIntro";
import { RegisterForm } from "@/components/auth/RegisterForm";

export const metadata: Metadata = {
  title: "Create an account",
  description: "Join ByteSpace and get access to hundreds of courses from independent creators.",
};

const titleId = "register-title";

export default function RegisterPage() {
  return (
    <>
      <AuthIntro
        title="Sign up and come in"
        description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
      />
      <AuthCard
        eyebrow="Create an Account"
        title={
          <>
            Welcome to <br className="hidden sm:block" />
            ByteSpace
          </>
        }
        titleId={titleId}
        
        footer={
          <>
            Already have an account?{" "}
            <Link
              href={authNav.signIn.href}
              className="rounded-sm text-primary-800 hover:underline"
            >
              Login
            </Link>
          </>
        }
      >
        <RegisterForm labelledBy={titleId} />
      </AuthCard>
    </>
  );
}