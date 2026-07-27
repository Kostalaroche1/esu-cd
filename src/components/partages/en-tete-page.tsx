export function EnTetePage({ titre, description, action }: { titre: string; description: string; action?: React.ReactNode }) {
  return <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><div><h1 className="text-2xl font-bold">{titre}</h1><p className="mt-1 text-sm text-slate-500">{description}</p></div>{action}</div>;
}
