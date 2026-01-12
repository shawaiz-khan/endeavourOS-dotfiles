import { navigationLinksType } from "../types";

export const navigationLinks: navigationLinksType[] = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "What I Do", link: "/what-i-do", subItems: [{
        title: "Web Development", link: "/web-development"
    }, ] },
    { title: "Projects", link: "/projects" },
    { title: "Contact", link: "/contact" },
];