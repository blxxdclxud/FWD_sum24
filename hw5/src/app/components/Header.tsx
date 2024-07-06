import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="navigation">
        <ul>
          <li>
            <Link href="/#info" scroll={false}>
              About
            </Link>
          </li>
          <li>
            <Link href="/#skills" scroll={false}>
              Skills
            </Link>
          </li>
          <li>
            <Link href="/#projects" scroll={false}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="/#contacts" scroll={false}>
              Contacts
            </Link>
          </li>
          <li>
            <Link href="//comic">Comic</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
