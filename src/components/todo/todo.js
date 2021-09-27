import React, { useEffect, useState,useContext } from "react";
import useForm from "../../hooks/form";
import { v4 as uuid } from "uuid";
import List from "../list/List";
import "./todo.css";
import Form from "../form/form";
import { SettingsContext } from "../../components/contex/contex";
const ToDo = () => {
  const settings = useContext(SettingsContext);
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem);

  function addItem(item) {
    console.log(item);
    item.id = uuid();
    item.complete = false;
    setList([...list, item]);
  }
//  delete items and use filter methode 
  function deleteItem(id) {
    const itemsDeleted = list.filter((item) => item.id !== id);
    setList(itemsDeleted);
  }

  function toggleComplete(id) {
    // itreat through 
    const items = list.map((item) => {
      if (item.id == id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);
  }
// use effect function 
  useEffect(() => {
    let Count = list.filter((item) => !item.complete);
    setIncomplete(Count);
    document.title = `lists ${incomplete.length}`;
  }, [list,settings.showCompleted]);


  return (
    <>
    
      <header style={{ width: "900px", margin: "0 auto" }}>
        <nav
          className="bp3-navbar .modifier "
          style={{ color: "blue", backgroundColor: "rgb(0 17 31)" }}
        >
          <h2>To Do List: {incomplete.length} Items and {list.length - incomplete.length} done</h2>
        </nav>
      </header>
      <div className="div-flex">
         <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
        <div>
          <List list={list} incomplete={incomplete} toggleComplete={toggleComplete} deleteItem={deleteItem}/>
        </div>
      </div>
    </>
  );
};

export default ToDo;