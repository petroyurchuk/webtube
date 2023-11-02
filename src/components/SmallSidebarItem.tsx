import { twMerge } from "tailwind-merge";
import { buttonStyles } from "./Button";

type SmallSidebarItemProps = {
  Icon: React.ElementType;
  title: string;
  url: string;
};
const SmallSidebarItem = ({ Icon, title, url }: SmallSidebarItemProps) => {
  return (
    <a
      className={twMerge(
        buttonStyles({ variant: "ghost" }),
        "py-4 px-1 flex flex-col items-center rounded-lg gap-1"
      )}
      href={url}
    >
      <Icon className="w-6 h-6" />
      <div className="text-sm">{title}</div>
    </a>
  );
};
export default SmallSidebarItem;
