import Link from "next/link";

const NavBar = () => {
  return (
    <header className="bg-main-third w-full md:h-16 h-12 p-6 pt-8 z-30 absolute -top-2 flex justify-between items-center text-main-fourth ">
      <Link href="/" className="md:text-xl font-bold">TAHUGABUT</Link>
      <section className="md:text-base text-sm">
        <Link href="/about-me" className="hover:underline hover:text-lg transition-all duration-200 mr-4">
          About
        </Link>
        <Link href="/menu" className="hover:underline hover:text-lg transition-all duration-200 mr-4">Menu</Link>
        <Link href="/saran" className="hover:underline hover:text-lg transition-all duration-200">Saran</Link>
      </section>
    </header>
  );
};

export default NavBar;
