import React from "react";
import Button from "./Button";

const Main = () => {
  return (
    <div className="taskMain">
      <h2 className="taskMain__title">Crea una nueva tarea</h2>
      <h5 className="taskMain__subtitle">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h5>
      <div>
        <form>
          <div className="taskForm">
            <input type="text" />
            <input type="number" />
            <textarea rows="6" />
            <Button name="Agregar tarea" color="primary"></Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Main;
