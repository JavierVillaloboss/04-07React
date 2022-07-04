import React, { useState } from "react";

const FormTodo = (props) => {
  const [description, setdescription] = useState("");
  return (
    <div>
      <input
        type="text "
        className="text"
        value={description}
        onChange={(e) => setdescription(e.target.value)}
      />
      <button className="" disabled={description ? "" : "disabled"}>
        Agregar
      </button>
    </div>
  );
};

export default FormTodo;
