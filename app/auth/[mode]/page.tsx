"use client";

import { login } from "@/api/auth/authApi";
import { useState } from "react";
import  AuthForm from "./components/AuthForm";
import  AuthCarousel  from "./components/carousel";
import { useParams } from "next/navigation";
import "@/css/auth.css";


export default function AuthPage() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const params = useParams();
    const mode = params.mode as "login" | "registrar";

    async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      setLoading(true);

      const { email, password } = Object.fromEntries(
        new FormData(e.currentTarget)
      ) as {
        email: string;
        password: string;
      };

      const data = await login(email, password);

      console.log(data);

      // Exemplo:
      // window.location.href = "/dashboard";

    } catch (error) {
      setError("Erro ao fazer login. Email ou senha inválidos.");
    } finally {
      setLoading(false);
    }
  }

    return (
      <div
        className="
          relative
          flex
          items-center
          justify-center
          min-h-screen
          overflow-hidden
          px-4
          py-8
          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(0,0,0,0.15),
              rgba(0,0,0,0.75)
            ),
            url('/banner/banner1.png')
          `,
        }}
      >

        <div className="absolute inset-0 backdrop-blur-[2px]" />


        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, rgba(46,42,42,0) 15%, rgba(39,37,37,.45) 55%, rgba(0,0,0,.85) 100%)",
          }}
        />

        <div
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[500px]
            h-[500px]
            sm:w-[700px]
            sm:h-[700px]
            rounded-full
            bg-amber-400/5
            blur-[180px]
          "
        />

        <div
          className="
            relative
            z-10
            flex
            w-full
            max-w-6xl
            overflow-hidden
            rounded-none
            sm:rounded-2xl
            shadow-2xl
            min-h-[650px]
          "
        >

          <div
            className="
              hidden
              lg:flex
              lg:w-3/5
            "
          >
            <AuthCarousel />
          </div>


          {/* Form */}
          <div
            className="
              w-full
              lg:w-2/5
              flex
            "
          >
            <AuthForm
              mode={mode}
              error={error}
              loading={loading}
              onSubmit={handleSubmit}
            />
          </div>

        </div>

      </div>
  );
}