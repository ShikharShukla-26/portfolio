import { DashboardEditor } from "@/components/admin/DashboardEditor";
import { getSiteContent } from "@/lib/content";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const content = await getSiteContent();

  return <DashboardEditor initialContent={content} />;
}
