import React, { useState } from "react";

function Form(props) {
  const { setWatches } = props;
  const [form, setForm] = useState({
    name: "",
    timezone: "",
  });

  const handleChange = ({ target }) => {
    const name = target.name;
    const value = target.value;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setWatches((prevWatches) =>
      prevWatches.concat({ name: form.name, timezone: form.timezone }),
    );
  };

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <label htmlFor="name" className="form-field">
        <p className="Header">Название</p>
        <input
          id="name"
          className="form-entry"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="timezone" className="form-field">
        <p className="Header">Временная зона</p>
        <input
          id="timezone"
          className="form-entry"
          name="timezone"
          type="text"
          value={form.timezone}
          onChange={handleChange}
        />
      </label>
      <input type="submit" className="submit-button" value="Добавить" />
    </form>
  );
}

export default Form;
