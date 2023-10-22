import Image from "next/image";

import Flex from "./Flex";

type Props = {
  size: number;
  src: string;
  className?: string;
};

const Avatar = ({ className, size, src }: Props) => {
  return (
    <Flex
      className={`rounded-full bg-white overflow-hidden z-[1] ${className}`}
      $alignItems="center"
      $justifyContent="center"
    >
      <Image src={src} alt="" width={size} height={size} />
    </Flex>
  );
};

export default Avatar;
