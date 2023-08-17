import React from "react";

import { AiFillHome } from "react-icons/ai";
import { SiCoursera } from "react-icons/si";
import { TbProgress } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";
import { FiSettings} from "react-icons/fi";
import {CgNotes} from "react-icons/cg"
import {GoSignOut} from "react-icons/go"

export const categories = [
    { name: "Practices", icon: <AiFillHome />, type: "home" },
    { name: "Course", icon: <SiCoursera />, type: "category" },
    { name: "Progress", icon: <TbProgress />, type: "category" },
    { name: "Instructors", icon: <FiUsers />, type: "category" },
    { name: "Music Notes", icon: <CgNotes />, type: "category" },
    
    { name: "Settings", icon: <FiSettings />, type: "menu" },
    { name: "Sign Out", icon: <GoSignOut />, type: "menu" }
    
];