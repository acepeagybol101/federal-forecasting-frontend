export interface Menu {
    name: string;
    link: string;
};

export interface MenuListProps extends Array<Menu> {}

export const MenuList: MenuListProps = [
    {
        name: "Home",
        link: "/home",
    },
    {
        name: "Learn",
        link: "/learn",
    },
    {
        name: "Build",
        link: "/build",
    },
    {
        name: "Grow",
        link: "/grow",
    },
    {
        name: "Find",
        link: "/find",
    },
    {
        name: "Connect",
        link: "/connect",
    },
];
