import Link from "next/link";
import {
  FaFacebook,
  FaFileVideo,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { FaFileCircleExclamation, FaUpwork } from "react-icons/fa6";

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
        <div className="col-span-3">
          <p className="py-2 tracking-wider font-medium capitalize">
            created by <span className="text-main"> ahmed mahmoud</span>
          </p>
          <div className="flex gap-2 hover:*:text-main  *:cursor-pointer">
            <FaGithub size={20} />
            <FaFacebook size={20} />
            <FaInstagram size={20} />
            <FaWhatsapp size={20} />
            <FaUpwork size={20} />
          </div>
        </div>
      </div>
    </footer>
  );
}
