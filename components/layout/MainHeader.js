import Link from "next/link";
import classes from "./MainHeader.module.css";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">NextEvents</Link>
      </div>
      <nav className={classes.navigation}>
          <ul>
              <li>
                  <Link href="/events">Tutti gli Eventi</Link>
              </li>
          </ul>
      </nav>
    </header>
  );
}
