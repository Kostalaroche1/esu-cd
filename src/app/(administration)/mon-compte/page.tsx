import { SecuriteCompte } from "@/components/compte/securite-compte";
import { auth } from "@/auth";

export default async function Page() {
  const session = await auth();
  return <SecuriteCompte changementObligatoire={Boolean(session?.user.doitChangerMotDePasse)}/>;
}
