"use client";

import { Eye, EyeOff } from "lucide-react";
import { forwardRef, useState, type InputHTMLAttributes } from "react";

type ProprietesChampMotDePasse = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

/** Champ de mot de passe réutilisable avec une commande d'affichage accessible. */
export const ChampMotDePasse = forwardRef<HTMLInputElement, ProprietesChampMotDePasse>(
  function ChampMotDePasse({ className = "", disabled, ...proprietes }, reference) {
    const [estVisible, setEstVisible] = useState(false);
    const libelleAction = estVisible ? "Masquer le mot de passe" : "Afficher le mot de passe";

    return (
      <div className="relative">
        <input
          ref={reference}
          type={estVisible ? "text" : "password"}
          disabled={disabled}
          className={`${className} pr-12`}
          {...proprietes}
        />
        <button
          type="button"
          disabled={disabled}
          aria-label={libelleAction}
          aria-pressed={estVisible}
          title={libelleAction}
          onClick={() => setEstVisible((valeurActuelle) => !valeurActuelle)}
          className="absolute inset-y-0 right-0 flex w-11 items-center justify-center rounded-r-xl text-slate-500 transition hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-blue-600 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {estVisible ? <EyeOff aria-hidden="true" size={19} /> : <Eye aria-hidden="true" size={19} />}
        </button>
      </div>
    );
  },
);

