import { role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const menuItems = [
    {
        title: "MENU",
        items: [
            {
                icon: "/icon/home.png",
                label: "Home",
                href: "/",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/icon/teacher.png",
                label: "Teacher",
                href: "/list/teachers",
                visible: ["admin", "teacher"],
            },
            {
                icon: "/icon/home.png",
                label: "Students",
                href: "/list/students",
                visible: ["admin", "teacher"],

            },
            {
                icon: "/icon/teacher.png",
                label: "Parents",
                href: "/list/parents",
                visible: ["admin", "teacher"],

            },
            {
                icon: "/icon/home.png",
                label: "Subjects",
                href: "/list/subjects",
                visible: ["admin"],

            },
            {
                icon: "/icon/home.png",
                label: "Classes",
                href: "/list/classes",
                visible: ["admin", "teacher"],

            },
            {
                icon: "/icon/teacher.png",
                label: "Lessons",
                href: "/list/lessons",
                visible: ["admin", "teacher"],

            },
            {
                icon: "/icon/home.png",
                label: "Exams",
                href: "/list/exams",
                visible: ["admin", "teacher", "student", "parent"],

            },
            {
                icon: "/icon/teacher.png",
                label: "Assignments",
                href: "/list/assignments",
                visible: ["admin", "teacher", "student", "parent"],

            },
            {
                icon: "/icon/teacher.png",
                label: "Results",
                href: "/list/results",
                visible: ["admin", "teacher", "student", "parent"],

            },
            {
                icon: "/icon/home.png",
                label: "Attendance",
                href: "",
                visible: ["admin", "teacher", "student", "parent"],

            },
            {
                icon: "/icon/teacher.png",
                label: "Event",
                href: "/list/events",
                visible: ["admin", "teacher", "student", "parent"],

            },
            {
                icon: "/icon/home.png",
                label: "Message",
                href: "",
                visible: ["admin", "teacher", "student", "parent"],

            },
            {
                icon: "/icon/teacher.png",
                label: "Announcements",
                href: "/list/announcements",
                visible: ["admin", "teacher", "student", "parent"],

            },
        ],
    },
    {
        title: "OTHER",
        items: [
            {
                icon: "/icon/home.png",
                label: "Profile",
                href: "",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/icon/teacher.png",
                label: "Settings",
                href: "",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/icon/home.png",
                label: "Logout",
                href: "",
                visible: ["admin", "teacher", "student", "parent"],
            },
        ],
    }
]

const Menu = () => {
    return (
        <div className="mt-4 text-sm">
            {menuItems.map(group => (
                <div className="flex flex-col gap-2" key={group.title}>
                    <span className="hidden lg:block text-gray-400 my-4">{group.title}</span>
                    {group.items.map(item => {
                        if (item.visible.includes(role)) {
                            return (
                                <Link href={item.href} key={item.label} className="flex items-center justify-center lg:justify-start gap-4 py-2 md:px-2 rounded-md hover:bg-lamlibColor4">
                                    <Image src={item.icon} alt={item.label} width={20} height={20} />
                                    <span className="hidden lg:block text-gray-500">{item.label}</span>
                                </Link>
                            )
                        }
                    })}
                </div>
            ))}
        </div>
    )
}

export default Menu;