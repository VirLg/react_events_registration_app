import { ErrorMessage, Field, Formik, Form } from "formik";
import React from "react";
import { NavLink } from "react-router-dom";
import { useAddEventMutation } from "../../redux/rtkQuery/rtkQuery";

const FormRegistration = () => {
  const [addEvent, { data, isLoading, error, isSuccess }] =
    useAddEventMutation();
  console.log("error", data);
  const valueForm = (data) => {
    console.log("data", data);
    addEvent(data);
  };
  return (
    <div className="flex p-20 outline  outline-2 w-[700px]	h-[900px]	m-auto mt-20 bg-inc-z50">
      <NavLink
        to="/"
        className="inline-block w-[120px] h-[30px] outline outline-2 mb-[40px]">
        Home
      </NavLink>

      <Formik
        initialValues={{ name: "", email: "", date: "", picked: "" }}
        onSubmit={(values, { resetForm }) => {
          console.log("values", values);
          valueForm(values);
          resetForm();
        }}>
        <Form
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "50px",
          }}>
          <label className="text-left mb-2">Full name</label>
          <Field className="outline outline-2" name="name" type="name" />
          <ErrorMessage name="name" />

          <label className="text-left mb-2 mt-6">Email</label>
          <Field className="outline outline-2" name="email" type="email" />
          <ErrorMessage name="email" />

          <label className="text-left mb-2 mt-6">Date of birth</label>
          <Field className="outline outline-2" name="date" type="date" />
          <ErrorMessage name="date" />

          <h3 id="my-radio-group" className="mt-6 mb-4">
            Where did you hear this event?
          </h3>
          <div
            role="group"
            aria-labelledby="my-radio-group"
            className="flex justify-start gap-10">
            <label>
              <Field
                type="radio"
                name="picked"
                value="social"
                style={{ marginRight: "4px" }}
              />
              Social media
            </label>
            <label>
              <Field
                type="radio"
                name="picked"
                value="friends"
                style={{ marginRight: "4px" }}
              />
              Friends
            </label>
            <label>
              <Field
                type="radio"
                name="picked"
                value="myself"
                style={{ marginRight: "4px" }}
              />
              Found myself
            </label>
          </div>

          <button type="submit">Submit</button>

          <button
            className="outline outline-2 mt-[80px] w-[120px]"
            type="submit">
            Submit
          </button>
          {error && (
            <p className="mt-[50px] text-red-400 w-[300px]">
              {error.data.message}
            </p>
          )}
          {data && <p>`Event {data.name} Created`</p>}
        </Form>
      </Formik>
    </div>
  );
};

export default FormRegistration;
