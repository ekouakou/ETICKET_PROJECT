import React from "react";

const TicketCard = ({ totalTickets, pendingTickets, progressPercentage }) => {
  return (
    <div
      className="card card-flush bgi-no-repeat bgi-size-contain bgi-position-x-center border-0 h-md-50 mb-5 mb-xl-10"
      style={{ backgroundColor: "#080655" }}
    >
      {/* Header */}
      <div className="card-header pt-5">
        {/* Title */}
        <div className="card-title d-flex flex-column">
          {/* Amount */}
          <span className="fs-2hx fw-bold text-white me-2 lh-1 ls-n2">
            {totalTickets}
          </span>
          {/* Subtitle */}
          <span className="text-white opacity-50 pt-1 fw-semibold fs-6">
            Tickets Sold
          </span>
        </div>
      </div>
      {/* Card body */}
      <div className="card-body d-flex align-items-end pt-0">
        {/* Progress */}
        <div className="d-flex align-items-center flex-column mt-3 w-100">
          <div className="d-flex justify-content-between fw-bold fs-6 text-white opacity-50 w-100 mt-auto mb-2">
            <span>{pendingTickets} Pending</span>
            <span>{progressPercentage}%</span>
          </div>
          <div className="h-8px mx-3 w-100 bg-light-danger rounded">
            <div
              className="bg-danger rounded h-8px"
              role="progressbar"
              style={{ width: `${progressPercentage}%` }}
              aria-valuenow={progressPercentage}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
