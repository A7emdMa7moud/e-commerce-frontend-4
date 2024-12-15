import React from "react";

export default function OrderProgress({ orderDate, deliveryDate }) {
  const calculateProgress = (orderDate, deliveryDate) => {
    const orderTime = new Date(orderDate).getTime();
    const deliveryTime = new Date(deliveryDate).getTime();
    const currentTime = new Date().getTime();

    if (currentTime >= deliveryTime) return 100;
    if (currentTime <= orderTime) return 0;

    const totalDuration = deliveryTime - orderTime;
    const elapsedDuration = currentTime - orderTime;
    return (elapsedDuration / totalDuration) * 100;
  };
  const progressPercentage = calculateProgress(orderDate, deliveryDate);

  return (
    <div className="grid grid-cols-4 lg:grid-cols-6 gap-2 lg:gap-4 items-center text-center font-bold tracking-wider p-0 borders lg:p-4 text-xs rounded-lg">
      <p className="col-span-1 lg:text-lg">
        {new Date(orderDate).toLocaleDateString()}
      </p>
      <div className="relative col-span-2 lg:col-span-4 h-4 bg-base-100 rounded-full overflow-hidden">
        <div
          className={`h-full bg-secondary transition-all duration-300 relative`}
          style={{
            width: `${progressPercentage}%`,
          }}
        >
          <span className="absolute right-0 top-[50%] translate-y-[-50%] text-xs font-bold text-secondary-content">
            {Math.round(progressPercentage)}%
          </span>
        </div>
      </div>
      <p className="col-span-1 lg:text-lg">
        {new Date(deliveryDate).toLocaleDateString()}
      </p>
    </div>
  );
}
