import React, { useState } from "react";
// import { Field, FieldError, Form } from "react-jsonschema-form-validation";
import Form from "@rjsf/core";
const Home = ({}) => {
  const demoSchema = {
    title: "A registration form",
    description: "A simple form example.",
    type: "object",
    required: ["firstName", "lastName"],
    properties: {
      firstName: {
        type: "string",
        title: "First name",
        default: "Chuck",
      },
      lastName: {
        type: "string",
        title: "Last name",
      },
      age: {
        type: "number",
        title: "Age",
      },
      telephone: {
        type: "string",
        title: "Telephone",
        minLength: 10,
      },
      date: {
        type: "string",
        format: "date",
      },
    },
  };
  const uischema = {
    firstName: {
      "ui:autofocus": true,
      "ui:emptyValue": "",
      "ui:autocomplete": "family-name",
    },
    lastName: {
      "ui:emptyValue": "",
      "ui:autocomplete": "given-name",
    },
    age: {
      "ui:widget": "updown",
      "ui:title": "Age of person",
    },
    bio: {
      "ui:widget": "textarea",
    },
    password: {
      "ui:widget": "password",
      "ui:help": "Hint: Make it strong!",
    },
    date: {
      "ui:widget": "date",
    },
    telephone: {
      "ui:options": {
        inputType: "tel",
      },
    },
  };
  const [formData, setFormData] = useState({});
  let vql = {};

  const handleChange = (event) => {
    // newData is a copy of the object formData with properties (and nested properties)
    // updated using immutability pattern for each change occured in the form.
    // setFormData(newData);
  };

  const handleSubmit = (event) => {
    setFormData(event.formData);
    setTimeout(() => {
      console.log("FormData", event.formData);
      alert(JSON.stringify(event.formData));
    }, 1000);
  };
  console.log("FormData", formData);
  return (
    <div class="container">
      <h2>Basic form</h2>
      <div class="row">
        <div class="col-4"></div>
        <div class="col-4">
          <Form
            onChange={handleChange}
            onSubmit={(v) => handleSubmit(v)}
            schema={demoSchema}
            uiSchema={uischema}
          ></Form>
        </div>
        <div class="col-4"></div>
      </div>
    </div>
  );
};

export default Home;
