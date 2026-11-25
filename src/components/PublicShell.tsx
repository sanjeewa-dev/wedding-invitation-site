import { FallingPetals } from "./FallingPetals";
import { ScrollEffects } from "./ScrollEffects";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { getWeddingSettings } from "@/lib/wedding";

export async function PublicShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await getWeddingSettings();

  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter settings={settings} />
      <FallingPetals />
      <ScrollEffects />
    </div>
  );
}
