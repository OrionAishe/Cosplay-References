import classes from './MainNavigation.module.css';
import Link  from "next/link"

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Baji Cosplay</div>
      <nav>
        <ul>
          <li>
            <Link href='/toman'>Toman Baji</Link>
          </li>
          <li>
            <Link href='/walhalla'>Walhalla Baji</Link>
          </li>
          <li>
            <Link href='/add-reference'>Add Reference</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
