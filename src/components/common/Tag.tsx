type Props = {
  name: string;
};

const Tag = ({ name }: Props) => {
  return (
    <div className="px-[0.5rem] rounded-md  text-sm bg-blue-200">{name}</div>
  );
};

export default Tag;
