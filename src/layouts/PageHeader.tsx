import React from "react";
import * as Icon from "lucide-react";
import logo from "../assets/Logo.png";
import Button from "../components/Button";
type Props = {};
const PageHeader = (props: Props) => {
  const [showFullWidthSearch, setShowFullWidthSearch] = React.useState(false);
  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
      <div
        className={`${
          showFullWidthSearch ? "hidden" : "flex"
        }  gap-4 items-center flex-shrink-0`}
      >
        <Button variant="ghost" size="icon">
          <Icon.Menu />
        </Button>
        <a href="/">
          <img src={logo} className="h-6" alt="logo" />
        </a>
      </div>
      <form
        className={`  gap-4 flex-grow justify-center ${
          showFullWidthSearch ? "flex" : "hidden md:flex"
        }`}
      >
        {showFullWidthSearch && (
          <Button
            onClick={() => setShowFullWidthSearch(false)}
            type="button"
            size="icon"
            variant="ghost"
            className="flex-shrink-0"
          >
            <Icon.ArrowLeft />
          </Button>
        )}
        <div className="flex flex-grow max-w-[600px]">
          <input
            type="search"
            placeholder="Search"
            className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus:border-blue-500 outline-none"
          />
          <Button className="py-2 px-4 rounded-r-full border-secondary-border border border-l-0 flex-shrink-0">
            <Icon.Search />
          </Button>
        </div>
        <Button type="button" size="icon" className="flex-shrink-0">
          <Icon.Mic />
        </Button>
      </form>
      <div
        className={`${
          showFullWidthSearch ? "hidden" : "flex"
        } flex-shrink-0 md:gap-2`}
      >
        <Button
          onClick={() => setShowFullWidthSearch(true)}
          size="icon"
          variant="ghost"
          className="md:hidden"
        >
          <Icon.Search />
        </Button>
        <Button size="icon" variant="ghost" className="md:hidden">
          <Icon.Mic />
        </Button>
        <Button size="icon" variant="ghost">
          <Icon.Upload />
        </Button>
        <Button size="icon" variant="ghost">
          <Icon.Bell />
        </Button>
        <Button size="icon" variant="ghost">
          <Icon.User />
        </Button>
      </div>
    </div>
  );
};
export default PageHeader;
