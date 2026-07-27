"use client";
import { useEffect, useState } from "react";
import { Carte } from "@/components/ui/carte";

type Stats={etudiants:number;appels:number;candidatures:number;retenues:number;attributions:number;montantPaye:number};
export function Statistiques(){const [s,setS]=useState<Stats|null>(null); useEffect(()=>{fetch('/api/tableau-de-bord',{cache:'no-store'}).then(r=>r.json()).then(x=>setS(x.donnees))},[]); if(!s)return <p>Chargement...</p>; return <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"><Carte titre="Étudiants actifs" valeur={s.etudiants}/><Carte titre="Appels" valeur={s.appels}/><Carte titre="Candidatures" valeur={s.candidatures}/><Carte titre="Candidatures retenues" valeur={s.retenues}/><Carte titre="Bourses actives" valeur={s.attributions}/><Carte titre="Montant payé" valeur={`${s.montantPaye.toLocaleString('fr-FR')} USD`}/></div>}
