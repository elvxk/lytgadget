import Link from "next/link";

const Card = ({ image, name, price, status, link, spec }) => {
  return (
    <Link
      href={link}
      target="_blank"
      className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:cursor-pointer size-[100%] hover:size-[99%]"
    >
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div className="card-body -mt-4">
        <h2 className="card-title text-sm">{name}</h2>
        <div className="flex gap-2 items-center mt-2">
          <div className="badge badge-ghost rounded-md">{spec}</div>
          <p className="text-neutral-content text-xs">{status}</p>
        </div>
        <div className="card-actions justify-end h-full"></div>
        <p className="text-secondary text-md font-bold">Rp. {price}</p>
        {/* <a href={link} className="link link-primary -mt-2 lg:mt-0 text-xs">
          More Info
        </a> */}
      </div>
    </Link>
  );
};
export default Card;
