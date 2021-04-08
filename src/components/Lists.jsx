import React from "react";

const Lists = () => {
  return (
    <article className="panel is-primary">
      <p className="panel-heading">
        <i class="fal fa-bars"></i> Listado de tareas
      </p>
      <p className="panel-tabs">
        <a className="is-active">All</a>
        <a>Public</a>
        <a>Private</a>
        <a>Sources</a>
        <a>Forks</a>
      </p>
      <div className="panel-block">
        <p className="control has-icons-left">
          <input
            className="input is-primary"
            type="text"
            placeholder="Search"
          />
          <span className="icon is-left">
            <i className="fas fa-search" aria-hidden="true" />
          </span>
        </p>
      </div>
      <a className="panel-block is-active">
        <span className="panel-icon">
          <i class="fad fa-highlighter"></i>
        </span>
        bulma
      </a>
      <a className="panel-block">
        <span className="panel-icon">
          <i class="fad fa-highlighter"></i>
        </span>
        marksheet
      </a>
      <a className="panel-block">
        <span className="panel-icon">
          <i class="fad fa-highlighter"></i>
        </span>
        minireset.css
      </a>
      <a className="panel-block">
        <span className="panel-icon">
          <i class="fad fa-highlighter"></i>
        </span>
        jgthms.github.io
      </a>
    </article>
  );
};

export default Lists;
