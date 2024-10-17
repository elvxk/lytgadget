import { useState } from "react";
import EditStock from "@/components/modal/EditStock";
import AddStock from "./modal/AddStock";

const CardEdit = ({ data }) => {
  const [showAddStock, setShowAddStock] = useState(false);
  const [clickData, setClickData] = useState([]);

  return (
    <>
      <button
        onClick={() => {
          setClickData(data);
          setShowAddStock(true);
        }}
        className="card max-w-60 bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:cursor-pointer size-[100%]"
      >
        <figure>
          <img
            src={data.image}
            alt={data.name}
            className="w-full object-cover hover:scale-105 transition-all duration-500"
          />
        </figure>
        <div className="card-body -mt-4">
          <h2 className="card-title text-sm">{data.name}</h2>
          <div className="flex gap-2 items-center">
            <div className="badge badge-ghost rounded-md">{data.ram}</div>
          </div>
          <p className="text-neutral-content text-xs">{data.status}</p>
          <div className="card-actions justify-end h-full"></div>
          <p className="text-secondary text-xs font-bold">
            IDR {new Intl.NumberFormat("id-ID").format(data.price)}
          </p>
        </div>
      </button>
      <EditStock
        isVisible={showAddStock}
        onClose={() => setShowAddStock(false)}
        data={clickData}
      />
    </>
  );
};
export default CardEdit;
