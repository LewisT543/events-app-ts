import Link from "next/link";

export const Header = ({props}: any) => (
  <header>
    <div>
      <div className="topNav">
        <nav>
          <ul>
            <li>
              <Link href="/" passHref>
                Home
              </Link>
            </li>
            <li>
              <Link href="/events" passHref>
                Events
              </Link>
            </li>
            <li>
              <Link href="/about-us" passHref>
                About us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <h1 className="title"> Sed ut perspiciatis unde omnis</h1>
    </div>
  </header>
)