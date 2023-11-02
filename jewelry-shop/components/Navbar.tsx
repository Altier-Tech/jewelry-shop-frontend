import Link from 'next/link';

interface NavigationProps {
  href: string;
  children: React.ReactNode;
}

function Navigation({ href, children }: NavigationProps) {
  return (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  );
}

export function Navbar() {
  return (
    <nav>
      <Link href="/">HOME</Link>
      <div className="dropdown">
        <button className="dropbtn">PRODUCTS</button>
        <div className="dropdown-content">
          <Navigation href="/products/product1">Product 1</Navigation>
          <Navigation href="/products/product2">Product 2</Navigation>
          <Navigation href="/products/product3">Product 3</Navigation>
        </div>
      </div>
      <Link href="/about">ABOUT US</Link>
      <Link href="/contact">CONTACT US</Link>
    </nav>
  );
}
