import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Loader from "@/components/loadings/loading";

type AuthFormProps = {
    mode: "login" | "registrar";
    error: string;
    success: string;
    fieldErrors: Record<string, string>;
    loading: boolean;
    onSubmit: (
        e: React.SyntheticEvent<HTMLFormElement>
    ) => void;
};

export default function AuthForm({ mode, error, success, fieldErrors, loading, onSubmit }: AuthFormProps) {
  const isRegister = mode === "registrar";
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-form-area w-full h-full bg-gray-900 px-8 py-8 sm:px-8 lg:px-10">

      {isRegister ? (
        <h2 className="mt-4">
          <span className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 bg-clip-text text-transparent">Crie sua página grátis</span>
        </h2>
      ) : (
        <h2 className="text-white text-sm mt-4">Que bom ter você de volta</h2>
      )}

        <form className="flex flex-col" id="login-form" onSubmit={onSubmit}>

          {success && (
            <div role="status" className="mb-4 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-400">
              {success}
            </div>
          )}

          {isRegister && (
            <div>
              <label htmlFor="username" className="block text-sm text-white mb-1.5">Nome de usuário</label>
              <input
                type="text"
                id="username"
                name="username"
                aria-describedby="username-hint"
                className="w-full px-4 py-2.5 rounded-lg bg-gray-800 border-2 border-transparent [background:linear-gradient(#1f2937,#1f2937)_padding-box,linear-gradient(to_right,#22d3ee,#06b6d4,#0891b2)_border-box] text-white placeholder-white focus:outline-none transition-colors"
              />
              <span id="username-hint" className="mt-1 block text-xs text-gray-400">
                Seu endereço será advolink.com.br/seunome
              </span>

              {fieldErrors.username && (
              <span className="mt-1 text-sm text-red-500">
                  {fieldErrors.username}
              </span>
            )}
            </div>
          )}

          <div className={`${isRegister ? "mt-5" : ""}`}>
            <label htmlFor="email" className="block text-sm text-white mb-1.5">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2.5 rounded-lg bg-gray-800 border/10 text-white placeholder-white focus:outline-none transition-colors"
            />
            {fieldErrors.email && (
              <span className="mt-1 text-sm text-red-500">
                  {fieldErrors.email}
              </span>
            )}
          </div>

          <div>
            <div className="flex justify-between mb-3 mt-4">
                <label htmlFor="password" className="text-sm text-white">Senha</label>

                {!isRegister && (
                  <a href="#" className="text-xs font-semibold bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                    Esqueceu a senha?
                  </a>
                )}
            </div>

            <div className="relative">
              <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-2.5 pr-11 rounded-lg bg-gray-800 border/10 text-white placeholder-gray-600 focus:outline-none transition-colors"
              />

              <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  aria-label={
                      showPassword
                          ? "Ocultar senha"
                          : "Mostrar senha"
                  }
              >
                  {showPassword ? (
                      <EyeOff size={18} />
                  ) : (
                      <Eye size={18} />
                  )}
              </button>
            </div>

            {fieldErrors.password && (
                <span className="mt-1 block text-sm text-red-500">
                    {fieldErrors.password}
                </span>
            )}
          </div>

          {isRegister && (
            <div>
              <label htmlFor="password_confirmation" className="block text-sm text-white mb-1.5 mt-4">Confirmar Senha</label>   
              <input
                type="password" 
                id="password_confirmation"
                name="password_confirmation"
                placeholder="••••••••"  
                className="w-full px-4 py-2.5 rounded-lg bg-gray-800 border/10 text-white placeholder-gray-600 focus:outline-none transition-colors"
              />
            </div>
          )}

          {error && Object.keys(fieldErrors).length === 0 && (
            <div role="alert" className="mt-4 rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-400">
              {error}
            </div>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity mt-4 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 text-white">
            {isRegister ? "Criar conta" : "Entrar"}
          </button>

           {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                <Loader />
            </div>
          )}
        </form>

        <button
        onClick={() => window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/google`}
        className="w-full flex items-center justify-center gap-3 py-2.5 mt-4 rounded-lg bg-gray-800 text-white text-sm font-medium hover:bg-gray-700 transition-colors"
      >
      <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
        Continuar com Google
      </button>

      <p className="text-center flex flex-col text-xs text-gray-600 mt-6">
        {isRegister ? (
          <Link href="/auth/login" className="font-semibold bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
            Já tem uma conta? Entre aqui
          </Link>
        ) : (
          <Link href="/auth/registrar" className="font-semibold bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
            Não tem conta? Cadastre-se
          </Link>
        )}
      </p>
    </div>
  );
}