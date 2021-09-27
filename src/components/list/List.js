import React,{useContext,useState,useEffect} from "react";
import { Button, Card, Elevation } from '@blueprintjs/core';
import ReactPaginate from "react-paginate";
import {SettingsContext} from "../../context/context"
import './list.css'
function List(props) {
const settings = useContext(SettingsContext)
  const [pageNumber, setPageNumber] = useState(0);
  const listPerPage = settings.itemsPerPage;
  const Visitedpage = pageNumber * listPerPage;

  const displayList = (settings.showCompleted == 'true' ? props.list : props.incomplete)
    .slice(Visitedpage, Visitedpage + listPerPage)
    .map((ele) => {
      return (
        
        <div key={ele.id} style={{width:"690px" ,margin:"15px"} }>
           <Card interactive={true} elevation={Elevation.TWO} style={{backgroundColor:"black"} }>
          <p>{ele.text}</p>
          <p>
            <small>Assigned to: {ele.assignee}</small>
          </p>
          <p>
            <small>Difficulty: {ele.difficulty}</small>
          </p>
         
          <Button style={{ backgroundColor:"green" }} onClick={() => props.toggleComplete(ele.id)}>
          Complete: {ele.complete.toString()}</Button>
<br/>
<br/>

         
          <Button style={{ backgroundColor:"red" }} onClick={() => props.deleteItem(ele.id)}>
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