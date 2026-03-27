import { login, signup } from '@/src/app/auth/actions';

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f7f3ef] dark:bg-black p-6">
      <form className="w-full max-w-sm flex flex-col gap-4 bg-white dark:bg-neutral-900 p-8 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-800">
        <h1 className="text-2xl font-semibold mb-4 text-center">
          Вход или Регистрация
        </h1>

        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="px-4 py-2 border rounded-full bg-transparent outline-none focus:border-[#8d6e63]"
        />
        <input
          name="password"
          type="password"
          placeholder="Пароль"
          required
          className="px-4 py-2 border rounded-full bg-transparent outline-none focus:border-[#8d6e63]"
        />

        <div className="flex flex-col gap-2 mt-4">
          <button
            formAction={login}
            className="w-full py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:opacity-90 transition"
          >
            Войти
          </button>
          <button
            formAction={signup}
            className="w-full py-3 border border-neutral-300 dark:border-neutral-700 rounded-full font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition"
          >
            Создать аккаунт
          </button>
        </div>
      </form>
    </div>
  );
}
