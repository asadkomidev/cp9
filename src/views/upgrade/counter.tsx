import { MAX_FREE_USE } from "@/backend/utilities/constants/count-limit";
import UpgradeButton from "./upgrade-button";

import { getCount } from "@/lib/utils";

type Props = {};

const Counter = async (props: Props) => {
  const count = await getCount();

  return (
    <div>
      {count >= MAX_FREE_USE ? (
        <UpgradeButton text="Upgrade" />
      ) : (
        <span className="text-xs text-muted-foreground">
          {count}/{MAX_FREE_USE} Free generations{" "}
        </span>
      )}
    </div>
  );
};

export default Counter;
