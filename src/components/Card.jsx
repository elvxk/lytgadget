import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Card = ({ image, name, price, status, link, spec }) => {
  return (
    <div className="card max-w-60 bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:cursor-pointer size-[100%]">
      <figure>
        <img
          src={image}
          alt={name}
          className="w-full object-cover hover:scale-105 transition-all duration-500"
        />
      </figure>
      <div className="card-body -m-4 ">
        <h2 className="card-title text-sm">{name}</h2>
        <div className="flex gap-2 items-center">
          <div className="badge badge-ghost rounded-md">{spec}</div>
        </div>
        <p className="text-neutral-content text-xs">{status}</p>
        <div className="card-actions justify-end -mt-2 h-full"></div>
        <p className="text-secondary text-xs font-bold">
          IDR {new Intl.NumberFormat("id-ID").format(price)}
        </p>
        <div className="flex gap-2 just items-center">
          <Link href={link} target="_blank">
            <FaInstagram />
          </Link>
          <Link
            href={`https://wa.me/6285880231142?text=Hai kak, apakah *${name}* variant *${spec}* masih ready ?`}
            target="_blank"
          >
            <FaWhatsapp />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Card;
