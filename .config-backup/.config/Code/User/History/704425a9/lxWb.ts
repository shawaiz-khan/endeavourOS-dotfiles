import { navigationLinksType } from "../types";

const devAndDesignNavigationItems: navigationLinksType[] = [
    { title: "Web Development", link: "/web-development" },
    { title: "Mobile App Development", link: "/mobile-app-development" },
    { title: "Graphic Design", link: "/graphic-design" }
]

export const navigationLinks: navigationLinksType[] = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "What I Do", link: "/what-i-do", subItems: devAndDesignNavigationItems },
    { title: "Projects", link: "/projects", subItems: devAndDesignNavigationItems },
    { title: "Contact", link: "/contact" },
];