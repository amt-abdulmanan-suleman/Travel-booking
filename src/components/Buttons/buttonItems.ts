// menuList.ts

export interface MenuItem {
    title: string;
    url: string;
    cName: string;
    active: string;
  }
  
  export const menuList: MenuItem[] = [
      
      {
        title: "Customer",
        url: "/customersignup",
        cName: "navLinks",
        active: "activeItem",
      },
      {
        title: "Business",
        url: "/businesssignup",
        cName: "navLinks",
        active: "activeItem",
      },
    //   
  ];
  