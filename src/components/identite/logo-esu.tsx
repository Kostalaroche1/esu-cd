"use client";

import { useEffect, useState } from "react";
import { EVENEMENT_LOGO_ESU_MODIFIE } from "@/lib/logo-esu";

type ProprietesLogoEsu = { className?: string; classNameImage?: string; classNameTexte?: string };

/** Affiche le logo configuré et revient au sigle ESU si aucune image n'est disponible. */
export function LogoEsu({ className = "", classNameImage = "", classNameTexte = "" }: ProprietesLogoEsu) {
  const [url, setUrl] = useState<string | null>(null);
  const [imageInvalide, setImageInvalide] = useState(false);

  useEffect(() => {
    let estMonte = true;
    fetch("/api/parametres/logo", { cache: "no-store" }).then(reponse => reponse.json()).then(resultat => {
      if (estMonte) setUrl(resultat.donnees?.url ?? null);
    }).catch(() => undefined);
    function actualiser(evenement: Event) {
      setImageInvalide(false);
      setUrl((evenement as CustomEvent<{ url: string | null }>).detail.url);
    }
    window.addEventListener(EVENEMENT_LOGO_ESU_MODIFIE, actualiser);
    return () => { estMonte = false; window.removeEventListener(EVENEMENT_LOGO_ESU_MODIFIE, actualiser); };
  }, []);

  return <div className={`flex items-center justify-center overflow-hidden ${className}`} aria-label="Logo de l’ESU">
    {url && !imageInvalide
      ? <img src={url} alt="Logo de l’ESU" className={`h-full w-full object-contain ${classNameImage}`} onError={() => setImageInvalide(true)} />
      : <span className={classNameTexte}>ESU</span>}
  </div>;
}
