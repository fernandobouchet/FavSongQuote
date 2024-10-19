import Link from "next/link";
import UserMenu from "@/components/nav/userMenu";

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center">
          <Link href="/" className="flex-shrink-0">
            <span className="text-2xl font-bold">FavSongQuotes</span>
          </Link>
        </div>
        <div className="flex items-center md:gap-8">
          <UserMenu />
        </div>
      </div>
    </nav>
  );
}
