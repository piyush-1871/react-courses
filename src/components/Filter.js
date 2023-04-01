import React from "react";

function Filter(props) {
  let filterData = props.filterData;
  return (
    <div className="flex flex-wrap w-11/12 min-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
      {filterData.map((data) => (
        <button
        className={`textlg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2  transition-all duration-300`}
         key={data.id}>{data.title}</button>
      ))}
    </div>
  );
}

export default Filter;
