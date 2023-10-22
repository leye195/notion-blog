import { classnames } from "@/libs/utils";

type Props = {
  type?: "normal" | "outline";
  size?: "sm" | "md" | "lg";
  color?: string;
  name: string;
};

const Tag = ({
  name,
  type = "normal",
  color = "white",
  size = "sm",
}: Props) => {
  return (
    <div
      className={classnames(
        "px-[0.5rem]",
        "rounded-md",
        `text-[${color}]`,
        `text-${size}`,
        type === "normal" ? "bg-blue-200" : "bg-white",
        type === "normal"
          ? "border-transparent"
          : "hover:bg-blue-200 border-2 border-blue-200 transition-all"
      )}
    >
      {name}
    </div>
  );
};

export default Tag;
