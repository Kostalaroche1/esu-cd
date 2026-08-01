"use client";
export default function ErreurGlobale({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <main className="flex min-h-screen items-center justify-center p-4"><div className="max-w-md rounded-2xl border bg-white p-8 text-center"><h1 className="text-2xl font-bold">Une erreur est survenue</h1><p className="mt-2 text-slate-600">L’opération n’a pas pu aboutir. Réessayez ou contactez l’administrateur.</p><button onClick={reset} className="mt-5 rounded-xl bg-blue-700 px-5 py-2.5 font-semibold text-white">Réessayer</button></div></main>;
}
