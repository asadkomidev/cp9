import { checkCountHelper } from "@/backend/utilities/helpers/helpers";
import Conversation from "@/views/conversation/conversation";

type Props = {};

const Page = async (props: Props) => {
  const isFree = await checkCountHelper();

  return <Conversation />;
};

export default Page;
