// menuList.ts

export interface MenuItem {
    title: string;
    url: string;
    cName: string;
    active: string;
  }
  
  export const menuList: MenuItem[] = [
    {
      title: "Home",
      url: "/",
      cName: "navLinks",
      active: "activeItem",
    },
    {
      title: "Dashboard",
      url: "/dashboard",
      cName: "navLinks",
      active: "activeItem",
    },
    {
      title: "Cart",
      url: "/cart",
      cName: "navLinks",
      active: "activeItem",
    },
    
      {
        title: "Log in",
        url: "",
        cName: "navLinks",
        active: "activeItem",
      },
      {
        title: "Customer",
        url: "/customer",
        cName: "navLinks",
        active: "activeItem",
      },
      {
        title: "Business",
        url: "/business",
        cName: "navLinks",
        active: "activeItem",
      },
    //   
  ];
  