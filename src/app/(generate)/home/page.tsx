import { getAuthUser } from "@/backend/utilities/utils";
import ToolsLinks from "@/views/home";

export default async function Home() {
  const { user, isAuth } = await getAuthUser();
  return <ToolsLinks />;
}
