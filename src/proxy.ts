export { auth as proxy } from "@/auth";

export const config = {
  matcher: ["/((?!api|connexion|inscription|_next/static|_next/image|favicon.ico).*)"],
};
