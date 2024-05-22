"use client";
import "@ui5/webcomponents-icons/dist/AllIcons.js"
import paletteIcon from "@ui5/webcomponents-icons/dist/palette.js";
import gridIcon from "@ui5/webcomponents-icons/dist/grid.js";

import {
  List,
  ListMode,
  ListPropTypes,
  ResponsivePopover,
  ResponsivePopoverDomRef,
  ShellBar,
  ShellBarItem,
  ShellBarItemPropTypes,
  StandardListItem,
} from "@ui5/webcomponents-react";
// import { getPopOverData } from "../models/globalModel";
import { useRef, useState } from "react";
import classes from "./AppShellBar.module.css";
import {
  getTheme,
  setTheme,
} from "@ui5/webcomponents-base/dist/config/Theme.js";
import logo from "../assets/SAPLogo.svg";
import logoD from "../assets/logo.png";
import Image from "next/image";
import "@/app/globals.css"


export function AppShellBar() {


  const popoverthemeRef = useRef<ResponsivePopoverDomRef | null>(null);
  const popovermenuRef = useRef<ResponsivePopoverDomRef | null>(null);

  const [currentTheme, setCurrentTheme] = useState(getTheme);

  const handleThemeSwitchItemClick: ShellBarItemPropTypes["onClick"] = (e) => {
    popoverthemeRef.current?.showAt(e.detail.targetRef);
  };
 

 

  const handleOpenerClick: ShellBarItemPropTypes["onClick"] = (e: any) => {
    popovermenuRef.current?.showAt(e.detail.targetRef);
  };


  return (
    <>
      <ShellBar
        className={classes.shell}
        logo={
          <>
            <Image
              alt="SAP Logo"
              width={120}
              height={44}
              src={
                currentTheme.includes("dark")
                  ? String(logo.src)
                  : String(logoD.src)
              }
            />
          </>
        }
        primaryTitle={"Salvo eBRIDGE "}
      >
        <ShellBarItem
          icon={paletteIcon}
          text="Change Theme"
          onClick={handleThemeSwitchItemClick}
        />
        <ShellBarItem onClick={handleOpenerClick} icon={gridIcon} text="add" />
      </ShellBar>
      
    </>
  );
}
