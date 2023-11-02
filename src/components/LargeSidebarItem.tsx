import { twMerge } from "tailwind-merge";
import { buttonStyles } from "./Button";

type LargeSidebarItemProps = {
  isActive?: boolean;
  IconOrImgUrl: React.ElementType | string;
  title: string;
  url: string;
};

const LargeSidebarItem = ({
  isActive = false,
  IconOrImgUrl,
  title,
  url,
}: LargeSidebarItemProps) => {
  return (
    <a
      href={url}
      className={twMerge(
        buttonStyles({ variant: "ghost" }),
        `w-full flex items-center rounded-lg gap-4 p-3 ${
          isActive ? "font-bold bg-neutral-100 hover:bg-secondary" : undefined
        }`
      )}
    >
      {typeof IconOrImgUrl === "string" ? (
        <img src={IconOrImgUrl} alt="subs" className="w-6 h-6 rounded-full" />
      ) : (
        <IconOrImgUrl className="w-6 h-6" />
      )}

      <div className="whitespace-nowrap overflow-hidden text-ellipsis">
        {title}
      </div>
    </a>
  );
};
export default LargeSidebarItem;
