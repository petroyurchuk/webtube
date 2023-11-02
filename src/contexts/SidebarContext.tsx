import React from "react";

type SidebarProviderProps = {
  children: React.ReactNode;
};

type SidebarContextType = {
  isLargeOpen: boolean;
  isSmallOpen: boolean;
  toggle: () => void;
  close: () => void;
};

const SidebarContext = React.createContext<SidebarContextType | null>(null);

export const useSidebarContext = () => {
  const value = React.useContext(SidebarContext);
  if (value == null) throw Error("Cannot use outside of SidebarProvider");
  return value;
};

export const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [isLargeOpen, setIsLargeOpen] = React.useState(false);
  const [isSmallOpen, setIsSmallOpen] = React.useState(false);

  React.useEffect(() => {
    const handler = () => {
      if (!isScreenSmall()) setIsSmallOpen(false);
    };
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);

  const isScreenSmall = () => {
    return window.innerWidth < 1024;
  };

  const toggle = () => {
    if (isScreenSmall()) {
      setIsSmallOpen((prev) => !prev);
    } else {
      setIsLargeOpen((prev) => !prev);
    }
  };

  const close = () => {
    if (isScreenSmall()) {
      setIsSmallOpen(false);
    } else {
      setIsLargeOpen(false);
    }
  };

  return (
    <SidebarContext.Provider
      value={{ isLargeOpen, isSmallOpen, toggle, close }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
