/**
 * Convertit l'URL Prisma MySQL en configuration comprise par le pilote MariaDB.
 * Le pilote MariaDB n'accepte pas toujours directement le préfixe `mysql://`.
 */
export function creerConfigurationMariaDb(urlBrute: string) {
  let url: URL;

  try {
    url = new URL(urlBrute);
  } catch {
    throw new Error("DATABASE_URL n'est pas une URL MySQL/MariaDB valide.");
  }

  if (url.protocol !== "mysql:" && url.protocol !== "mariadb:") {
    throw new Error("DATABASE_URL doit commencer par mysql:// ou mariadb://.");
  }

  const baseDeDonnees = decodeURIComponent(url.pathname.replace(/^\//, ""));
  if (!url.hostname || !url.username || !baseDeDonnees) {
    throw new Error("DATABASE_URL doit contenir l'hôte, l'utilisateur et le nom de la base de données.");
  }

  return {
    host: url.hostname,
    port: url.port ? Number(url.port) : 3306,
    user: decodeURIComponent(url.username),
    password: decodeURIComponent(url.password),
    database: baseDeDonnees,
    connectionLimit: 10,
    connectTimeout: 10_000,
    acquireTimeout: 15_000,
  };
}
