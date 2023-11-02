import React from "react";
import { Clapperboard, Home, Library, ListVideo, Repeat } from "lucide-react";
import SmallSidebarItem from "../components/SmallSidebarItem";
import LargeSidebarSection from "../components/LargeSidebarSection";
import LargeSidebarItem from "../components/LargeSidebarItem";
import { IconsSidebar } from "../data/sidebar";
import { IconsSidebarExplore, playlists, subscriptions } from "../data/sidebar";
import { useSidebarContext } from "../contexts/SidebarContext";
import { PageHeaderFirstSection } from "./PageHeader";

const Icons: React.ElementType[] = [Home, Clapperboard, Repeat, Library];
type SidebarProps = {};
const Sidebar = (props: SidebarProps) => {
  const { isLargeOpen, isSmallOpen, close } = useSidebarContext();
  return (
    <>
      <aside
        className={`sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1 ${
          isLargeOpen ? "lg:hidden" : "lg:flex"
        }`}
      >
        {Icons.map((icon, index) => (
          <SmallSidebarItem
            key={index}
            Icon={icon}
            title={"Home"}
            url={`/${icon}`}
          />
        ))}
      </aside>
      {isSmallOpen && (
        <div
          onClick={close}
          className="lg:hidden fixed inset-0  z-[999] bg-secondary-dark opacity-50"
        />
      )}
      <aside
        className={`w-56 lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4 flex-col gap-2 px-2 ${
          isLargeOpen ? "lg:flex" : "lg:hidden"
        } ${isSmallOpen ? "flex z-[999] bg-white max-h-screen" : "hidden"}`}
      >
        <div className="lg:hidden pt-2 pb-4 px-2 sticky top-0 bg-white">
          <PageHeaderFirstSection />
        </div>
        <LargeSidebarSection>
          <LargeSidebarItem
            isActive
            IconOrImgUrl={Home}
            title={"Home"}
            url={`/`}
          />
          <LargeSidebarItem
            IconOrImgUrl={Clapperboard}
            title="Subscriptions"
            url="/subscriptions"
          />
        </LargeSidebarSection>
        <hr />
        <LargeSidebarSection visibleItemCount={5}>
          {IconsSidebar.map(({ id, title, icon }) => (
            <LargeSidebarItem
              key={id}
              title={title}
              IconOrImgUrl={icon}
              url={`/${title.toLowerCase()}`}
            />
          ))}
          {playlists.map((playlist) => (
            <LargeSidebarItem
              key={playlist.id}
              title={playlist.name}
              IconOrImgUrl={ListVideo}
              url={`/playlist?list${playlist.id}`}
            />
          ))}
        </LargeSidebarSection>
        <hr />
        <LargeSidebarSection title="Subscriptions" visibleItemCount={5}>
          {subscriptions.map((subscription) => (
            <LargeSidebarItem
              key={subscription.id}
              title={subscription.channelName}
              IconOrImgUrl={subscription.imgUrl}
              url={`/@${subscription.id}`}
            />
          ))}
        </LargeSidebarSection>
        <hr />
        <LargeSidebarSection title="Explore">
          {IconsSidebarExplore.map(({ id, icon, title }) => (
            <LargeSidebarItem
              key={id}
              IconOrImgUrl={icon}
              title={title}
              url={`/${title.toLowerCase()}`}
            />
          ))}
        </LargeSidebarSection>
      </aside>
    </>
  );
};
export default Sidebar;
