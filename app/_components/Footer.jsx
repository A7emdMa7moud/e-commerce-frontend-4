import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-4 border-t border-base-300 p-4 px-6 z-50 bg-base-200 *:text-neutral-500">
      <div className="container mx-auto grid grid-cols-4">
        <div className="col-span-1">
          <p className="text-xl capitalize font-medium">E-commerc</p>
          <ul className="pl-4 mt-4 border-l-2 border-main flex flex-col gap-1 font-medium tracking-wider capitalize">
            <Link href={"/"}>home</Link>
            <Link href={"/"}>about</Link>
            <Link href={"/"}>products</Link>
            <Link href={"/"}>login</Link>
            <Link href={"/"}>signup</Link>
          </ul>
        </div>
      </div>
    </footer>
  );
}
