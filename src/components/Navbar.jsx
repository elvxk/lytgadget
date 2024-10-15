import Search from "./Searchbar";

const Navbar = () => {
  return (
    <div className="z-50 fixed navbar bg-base-200 shadow-lg flex justify-between items-center rounded-b-2xl">
      <div className="flex -space-x-4">
        <img
          src="https://res.cloudinary.com/dm0z1zknw/image/upload/v1728827834/pbhuu3qvgtocpwxmxiog.webp"
          alt="LYT GADGET"
          className="w-10"
        />
        <h1 className="btn btn-ghost text-lg">LYTGADGET.ID</h1>
      </div>
    </div>
  );
};
export default Navbar;