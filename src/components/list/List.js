import React,{useContext,useState} from "react";
import { Button, Card, Elevation } from '@blueprintjs/core';
import ReactPaginate from "react-paginate";
import {SettingsContext} from "../contex/contex"
function List(props) {
const settings = useContext(SettingsContext)
  const [pageNumber, setPageNumber] = useState(0);
  const listPerPage = settings.itemsPerPage;
  const pagesVisited = pageNumber * listPerPage;

  const displayList = props.list
  
    .slice(pagesVisited, pagesVisited + listPerPage)
    .map((item) => {
      return (
        
        <div key={item.id} style={{width:"650px" ,margin:"15px"} }>
           <Card interactive={true} elevation={Elevation.TWO} style={{backgroundColor:"#b7b7b7"} }>
          <h4>this to do : {item.enter}</h4>
          <h4>
            Assigned to: {item.assignee}
          </h4>
          <h4>
           Difficulty: {item.difficulty}
          </h4>
         
          <Button style={{ backgroundColor:"black",color:'blue' }} onClick={() => props.toggleComplete(item.id)}>
          Complete: {item.complete.toString()}</Button>
<br/>
<br/>

         
          <Button style={{ backgroundColor:"red" }} onClick={() => props.deleteItem(item.id)}>
          Delete</Button>
          </Card>
        </div>
      );
    });
    const pageCount = Math.ceil(props.list.length / listPerPage);
    const changePage = ({ selected }) => {
      setPageNumber(selected);
    };
  return (
    <>


    
        {displayList}
        <ReactPaginate
        
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
        />
   
    </>
  );
}

export default List;