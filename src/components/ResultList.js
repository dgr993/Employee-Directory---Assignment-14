import React from "react";
import FilterTable from "react-filter-tables";
function ResultList(props) {
  console.log(props.results);
  let data = [];
  props.results.map((test) => {
    let newTable = {
      Id: (
        <img
          alt={test.title}
          className="img-fluid"
          src={test.picture.thumbnail}
        />
      ),
      First_Name: test.name.first,
      Last_Name: test.name.last,
      username: test.name.first,
      email: test.email,
      Cell_Number: test.cell,
    };
    data.push(newTable);
  });
  console.log(data);
  return (
    <>
      <FilterTable
        data={data}
        recordsPerPage={8}
        style={{ position: "absolute", minWidth: "50%" }}
      />
    </>
  );
}
export default ResultList;






