import React from "react";
import FilterTable from 'react-filter-tables';

function ResultList(props) {
  console.log(props.results);
  
  let data = [
    {
      'Id': 1,
      'type': 'test',
      'name': 'alan',
      'username': 'abcd123'
    },
    {
      'Id': 2,
      'type': 'xyz',
      'name': 'diana',
      'username': 'userd1'
    },
    {
      'Id': 3,
      'type': 'abc',
      'name': 'tessa',
      'username': 'tez45'
    }
  ]
  
  return (
    <>
    <FilterTable data={data}/>
    
      
       {props.results.map(result => (
        <div>
        <p className="list-group-item" key={result.id}>
          <img alt={result.title} className="img-fluid" src={result.picture.thumbnail} />
        </p>
         <p className="list-group-item" key={result.id}> </p>
         <p>{result.name.first} {result.name.last}</p>
       
       </div>
      ))}
    
    </>
  );
}

export default ResultList;

