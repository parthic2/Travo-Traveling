import { MdOutlineArrowDropDown } from "react-icons/md";

export const navigationItems = [
    {
        text: 'Home',
        link: '/',
    },
    {
        text: 'About',
        link: '/About_1',
        icon: <MdOutlineArrowDropDown />,
        subItems: [
            { text: 'About 1', link: '/About_1' },
            { text: 'About 2', link: '/About_2' },
            { text: 'About 3', link: '/About_3' },
        ],
    },
    {
        text: 'Package',
        link: '/Package',
    },
    {
        text: 'Portfolio',
        link: '/Portfolio',
    },
    {
        text: 'Contact',
        link: '/Contact',
    },
];