import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
const Footer = () => {
  return (
    <footer className="bg-neutral gap-2 text-neutral-content flex flex-col justify-center items-center p-4">
      <p className="font-bold">LYTGADGET.ID</p>
      <a
        href="https://maps.app.goo.gl/dbqYiLiqwNu2J1wo9"
        target="_blank"
        className="text-center text-xs text-base-500 -mt-2"
      >
        Jl. Dr. Wahidin Sudiro Husodo, Ringinsari, Ringinpitu, Kec. Kedungwaru,
        Tulungagung, Jawa Timur
      </a>
      <div className="flex gap-2 my-2">
        <a href="https://www.instagram.com/lytgadget.id/" target="_blank">
          <AiFillInstagram className="size-5" />
        </a>
        <a href="https://wa.me/6285880231142/" target="_blank">
          <IoLogoWhatsapp className="size-5" />
        </a>
      </div>
      <p className="text-xs opacity-50">
        Copyright © {new Date().getFullYear()} - All right reserved
      </p>
    </footer>
  );
};
export default Footer;
