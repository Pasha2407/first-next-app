"use client";
import Link from "next/link";
import css from "./sidebar.module.css";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const pathname = usePathname();
  return (
    <div className={css.Container}>
      <section className={css.Header}>TruScape</section>
      <section className={css.Links}>
        <div>
          <Link href={"/dashboard"}>Dashboard</Link>
          {pathname === "/dashboard" && <span></span>}
        </div>
        <div>
          <Link href={"/companies"}>Companies</Link>
          {pathname === "/companies" && <span></span>}
        </div>
      </section>
      <section className={css.Exit}>
        <button>Exit</button>
      </section>
    </div>
  );
}
