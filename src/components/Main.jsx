import React from "react";

const Main = () => {
  const [taskName, setTaskName] = React.useState("");

  return (
    <div>
      <div className="tabs is-right">
        <ul>
          <li className="is-active">
            <a>Pictures</a>
          </li>
          <li>
            <a>Music</a>
          </li>
          <li>
            <a>Videos</a>
          </li>
          <li>
            <a>Documents</a>
          </li>
        </ul>
      </div>

      <div className="field">
        <h3 class="title is-3">Crea una nueva tarea</h3>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Nombre de la tarea"
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>
        <div className="control">
          <input
            className="input"
            type="number"
            placeholder="Escribe la fecha de finalización"
          />
        </div>
        <textarea
          class="textarea"
          placeholder="Puedes escribir una descripción para identificar la tarea..."
        ></textarea>
        <p className="help">This is a help text</p>
      </div>
      <div class="buttons">
        <button className="button is-primary">Agregar</button>
        <button className="button is-link">Editar</button>
      </div>
    </div>
  );
};

export default Main;
