import Link from "next/link";

const NavBar = () => {
  return (
    <header className="w-full md:h-16 h-12 p-6 pt-8 z-30 absolute -top-2 flex justify-between items-center text-main-fourth ">
      <Link href="/" className="md:text-xl font-bold">TAHUGABUT</Link>
      <section className="md:text-base text-sm">
        <Link href="/about-me" className="hover:underline transition-all duration-200">
          About Me
        </Link>
      </section>
    </header>
  );
};

export default NavBar;
