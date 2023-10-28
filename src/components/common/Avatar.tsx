import Image from "next/image";

import Flex from "./Flex";
import { classnames } from "@/libs/utils";

type Props = {
  size: number;
  src: string;
  className?: string;
  priority?: boolean;
};

const Avatar = ({ className, size, src, priority }: Props) => {
  return (
    <Flex
      className={classnames(
        "rounded-full",
        "bg-white",
        "overflow-hidden",
        className ?? ""
      )}
      $alignItems="center"
      $justifyContent="center"
    >
      <Image src={src} alt="" width={size} height={size} priority={priority} />
    </Flex>
  );
};

export default Avatar;
