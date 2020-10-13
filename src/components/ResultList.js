import React, {useState} from "react";
import FilterTable from 'react-filter-tables';

function ResultList(props) {
 const [res,setres] = useState ({})
 
 {
 props.results.map(result => {
   let data = [
     {
       'Id': result.id,
       'type': 'test',
       'name': result.name.first,
       'username': 'abcd123'
     }
   ]
  setres(data);
 
 })}
  console.log(res);
  return (
    <>
    {/* <FilterTable data={data}/> */}
    
      
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
