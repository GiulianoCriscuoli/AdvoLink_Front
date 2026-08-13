"use client";

import {
    login,
    register,
    type LoginPayload,
    type RegisterPayload,
} from "@/api/auth/authApi";

import { useState } from "react";
import { useParams } from "next/navigation";

import AuthForm from "./components/AuthForm";
import AuthCarousel from "./components/carousel";

import "@/css/auth.css";

type FieldErrors = Record<string, string>;

export default function AuthPage() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

    const params = useParams();
    const mode = params.mode as "login" | "registrar";

    async function handleSubmit(
        e: React.SyntheticEvent<HTMLFormElement>
    ) {
        e.preventDefault();

        try {
            setLoading(true);
            setError("");
            setFieldErrors({});

            const data = Object.fromEntries(
                new FormData(e.currentTarget)
            );

            const result =
                mode === "login"
                    ? await login(data as LoginPayload)
                    : await register(data as RegisterPayload);

            if (!result.status) {
                setError(result.message);

                const errors: FieldErrors = {};

                Object.entries(result.errors ?? {}).forEach(
                    ([field, messages]) => {
                        errors[field] = messages[0];
                    }
                );

                setFieldErrors(errors);

                return;
            }

            // Sucesso
            console.log(result);

        } catch (error) {
            setError(
                error instanceof Error
                    ? error.message
                    : "Ocorreu um erro inesperado."
            );
        } finally {
            setLoading(false);
        }
    }

    return (
        <div
            className="
                relative
                flex
                min-h-screen
                items-center
                justify-center
                overflow-hidden
                bg-cover
                bg-center
                bg-no-repeat
                px-4
                py-8
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
                        "radial-gradient(circle at center, rgba(46,42,42,0) 15%, rgba(39,37,37,.45) 65%, rgba(35, 204, 255, 0.2) 100%)",
                }}
            />

            <div
                className="
                    absolute
                    left-1/2
                    top-1/2
                    h-[500px]
                    w-[500px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-amber-400/5
                    blur-[180px]
                    sm:h-[700px]
                    sm:w-[700px]
                "
            />

            <div
                className="
                    relative
                    z-10
                    flex
                    min-h-[650px]
                    w-full
                    max-w-6xl
                    overflow-hidden
                    rounded-none
                    shadow-2xl
                    sm:rounded-2xl
                "
            >
                <div className="hidden lg:flex lg:w-3/5">
                    <AuthCarousel />
                </div>

                <div className="flex w-full lg:w-2/5">
                    <AuthForm
                        mode={mode}
                        error={error}
                        fieldErrors={fieldErrors}
                        loading={loading}
                        onSubmit={handleSubmit}
                    />
                </div>
            </div>
        </div>
    );
}