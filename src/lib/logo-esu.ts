export const CLE_URL_LOGO_ESU = "identite.logo.url";
export const CLE_CHEMIN_LOGO_ESU = "identite.logo.chemin";
export const EVENEMENT_LOGO_ESU_MODIFIE = "logo-esu-modifie";

export const TYPES_IMAGE_LOGO_ACCEPTES = ["image/png", "image/jpeg", "image/webp"] as const;
export const TAILLE_MAXIMALE_LOGO = 2 * 1024 * 1024;

export function construireUrlLogo(version: string | number = Date.now()) {
  return `/api/parametres/logo/image?v=${encodeURIComponent(String(version))}`;
}
