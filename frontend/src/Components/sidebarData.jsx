import React from 'react'
import { MdDashboard ,MdChecklist, MdSettings } from "react-icons/md";
import { GoProjectRoadmap } from "react-icons/go";
export const SidebarData =[
    {
        title: "Dashboard",
        icon: <MdDashboard />,
        link: "/"
    },
    {
        title: "Tasks",
        icon: <MdChecklist />,
        link: "/tasks"
    },
    {
        title: "Projects",
        icon: <GoProjectRoadmap  />,
        link: "/projects"
    },
    {
        title: "Settings",
        icon: <MdSettings />,
        link: "/settings"
    }
]

