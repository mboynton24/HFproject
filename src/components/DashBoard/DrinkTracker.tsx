"use client";
import React from "react";
import ChartOne from "../Charts/ChartOne";
import Input from "../Charts/Input"
import ChartThree from "../Charts/ChartThree";
import ChartTwo from "../Charts/ChartTwo";
import ChatCard from "../Chat/ChatCard";
import TableOne from "../Tables/TableOne";
import CardDataStats from "../CardDataStats";
import MapOne from "../Maps/MapOne";

const GetBulky: React.FC = () => {
  return (
    <>
       <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
      </div> 
        {/* INSERT COMPONENT TO ADD/UPDATE DRINKS AND DAY CONSUMED */}
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <Input />
        <ChartTwo /> 
        <ChartOne />
        <div className="col-span-12 xl:col-span-8">
        </div> 
      </div>
    </>
  );
};

export default GetBulky;
