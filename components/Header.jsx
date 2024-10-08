import Link from "next/link";
import { Button } from "./ui/button";

//components
import Nav from "./Nav";
import MovileNav from "./MovileNav";

const Header = () => {
  return (
    <header className="py-6 xl:py-8 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Abdullah<span className="text-accent">.</span>
          </h1>
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        <div className="xl:hidden">
          <MovileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
