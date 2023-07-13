import React from "react";
import { Slide } from "react-awesome-reveal";

function OrderList({ items }) {
  return (
    <div className="py-4">
      <ol className="list-decimal mx-2 pl-5">
        {items.map((item, index) => (
          <li className=" pl-2 py-2" key={index}>
            {item}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default OrderList;
