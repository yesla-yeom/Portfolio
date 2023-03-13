import React from "react";
import Link from "next/link";
import navStyles from "../styles/Nav.module.css";
import Head from "next/head";
import HeadInfo from "@/components/HeadInfo";

const Nav = () => {
  return (
    <>
      <Head>
        <HeadInfo></HeadInfo>
      </Head>
      <nav className={navStyles.nav}>
        <div>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/aboutme">About Me</Link>
            </li>
            <li>
              <Link href="/skill">Skill Inventory</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/history">History</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
