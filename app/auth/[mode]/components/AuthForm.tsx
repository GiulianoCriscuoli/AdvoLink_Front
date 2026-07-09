import Link from "next/link";


interface AuthFormProps {
  mode: "login" | "registrar";
  error?: string;
  loading: boolean;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}


export default function AuthForm({ mode, error, loading, onSubmit }: AuthFormProps) {
  const isRegister = mode === "registrar";

  return (
    <div className="login-form-area w-full h-full bg-gray-900 px-8 py-8 sm:px-8 lg:px-10">
        <h2 className="text-white text-sm mt-4">
          {isRegister ? "Crie sua conta" : "Bem-vindo de volta!"}
        </h2>

        <form className="flex flex-col" id="login-form" onSubmit={onSubmit}>
          {error && (
          <div className="text-red-400 text-sm mt-2">
            {error}
          </div> 
          )}

          {isRegister && (
            <div>
              <label htmlFor="usuario" className="block text-sm text-white mb-1.5">Registre Link na Bio gratuitamente</label>
              <input
                type="text"
                id="usuario"
                name="usuario"
                className="w-full px-4 py-2.5 rounded-lg bg-gray-800 border border-white/10 text-white placeholder-white focus:outline-none transition-colors"
              />
            </div>
          )}

          <div className={`${isRegister ? "mt-5" : ""}`}>
            <label htmlFor="email" className="block text-sm text-white mb-1.5">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2.5 rounded-lg bg-gray-800 border border-white/10 text-white placeholder-white focus:outline-none transition-colors"
            />
          </div>

          <div>
            <div className="flex justify-between mb-3 mt-4">
              <label htmlFor="password" className="text-sm text-white">Senha</label>

              {!isRegister && (
                <a href="#" className="text-xs text-white hover:text-white transition-colors">
                  Esqueci a senha
                </a>
              )}
            </div>
            <input
                type="password"
                id="password"
                name="password"
                placeholder="••••••••"
                className="w-full px-4 py-2.5 rounded-lg bg-gray-800 border border-white/10 text-white placeholder-gray-600 focus:outline-none transition-colors"
              />
          </div>

          {isRegister && (
            <div>
              <label htmlFor="confirmPassword" className="block text-sm text-white mb-1.5 mt-4">Confirmar Senha</label>   
              <input
                type="password" 
                id="confirmPassword"
                name="confirmPassword"
                placeholder="••••••••"  
                className="w-full px-4 py-2.5 rounded-lg bg-gray-800 border border-white/10 text-white placeholder-gray-600 focus:outline-none transition-colors"
              />
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 rounded-lg bg-white text-gray-950 font-semibold text-sm hover:opacity-90 transition-opacity mt-4">
            {isRegister ? "Criar conta" : "Entrar"}
          </button>

          {loading && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin" />
            </div>
          )}
        </form>

        <button
        onClick={() => window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/google`}
        className="w-full flex items-center justify-center gap-3 py-2.5 mt-4 rounded-lg border border-white/10 bg-gray-800 text-white text-sm font-medium hover:bg-gray-700 transition-colors"
      >
      <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
        Entrar com Google
      </button>

      <p className="text-center flex flex-col text-xs text-gray-600 mt-6">
        {isRegister ? (
          <Link href="/auth/login" className="text-white transition-colors">
            Já tem uma conta? Entre aqui
          </Link>
        ) : (
          <Link href="/auth/registrar" className="text-white transition-colors">
            Não tem conta? Cadastre-se
          </Link>
        )}
      </p>
    </div>
  );
}