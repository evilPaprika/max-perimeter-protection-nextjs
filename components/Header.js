import Link from "next/link";
import headerContent from '../content/header.md'
import matter from 'gray-matter'

export default function Header(props) {
  const {logo, site_name, phone_number} = matter(headerContent).data;
  return (
    <header className="header">
      <Link href="/">
        <h1>{site_name}</h1>
      </Link>
      <style jsx>
        {`
          h1 {
            margin-bottom: 0;
          }
          h1:hover {
            cursor: pointer;
          }
        `}
      </style>
    </header>
  );
}

