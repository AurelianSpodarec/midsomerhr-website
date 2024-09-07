export interface IMenuItem {
  name: string;
  url: string;
  isActive?: boolean;
}

const dataMenu: IMenuItem[] = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Work",
    url: "/case-studies"
  },
  {
    name: "Blog",
    url: "/blog",
  },
  {
    name: "FAQ",
    url: "/faq",
  },
]

export default dataMenu;
