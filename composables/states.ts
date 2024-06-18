export const useSidebar = () => {
  const sideBar = useState<boolean>("sidebar", () => false);

  const toggleSideBar = () => {
    sideBar.value = !sideBar.value;
  };

  return {
    sideBar,
    toggleSideBar,
  };
};
