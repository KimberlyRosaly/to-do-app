import React, { useState } from "react";
import ToDoForm from "../components/forms/ToDoForm";
import ToDosIndex from "../components/forms/ToDosIndex";
import SpaceIsland from "../components/scenes/SpaceIsland.js";
import { Sticker } from "../components/Sticker";
// import SVGMoon from "../components/stickers/SVGMoon";

export default function ProductivityHub({ todosData }) {


  // |---CALLBACK FUNCTIONS
  const [formData, setFormData] = useState("");
  const [completedItems, setCompletedItems] = useState([]);
  const [todosDataState, setTodosDataState] = useState(todosData);

  // | - - - - - - - - - - - - - - - - F O R M
  const handleFormSubmit = (newTodoEntry) => {
    // console.log("\n (1) PRODUCTIVITY HUB: \n TODO FORM ONSUBMIT CALLBACK FN \n ", newTodoEntry);
    const updatedTodosData = [
      ...todosDataState,
      { id: todosDataState.length + 1, entry: newTodoEntry },
    ];
    setFormData(newTodoEntry);
    setTodosDataState(updatedTodosData);
  };

  // |--- - - - - - - - - - - - - - - - C H E C K  oFF TODO
  const updateCompletedItems = (newCompletedItems) => {
    console.log(newCompletedItems.length);
    setCompletedItems(newCompletedItems);
    // #COUNT COMPLETED ITEMS
    // HAND <SCENE THE #COUNT
    // <SCENE KNOWS TO RENDER #COUNT STICKERS
  };

  return (
    <section style={{ display: "flex", width: "100vw" }}>
      <div>
        <ToDoForm onSubmit={handleFormSubmit} />
        <ToDosIndex
          todosData={todosDataState}
          completedItems={completedItems}
          updateCompletedItems={setCompletedItems}
        />
        {console.log(formData, "||", completedItems, "||", todosDataState)}
      </div>
      <SpaceIsland />

    </section>
  );
}
