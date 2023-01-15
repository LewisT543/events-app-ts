import Link from "next/link";

export const Footer = () => (
  <footer>
    <div>
      <p>This is a footer</p>
      <p>
        <Link href={'/'}>Back to homepage</Link>
      </p>
    </div>
  </footer>
)