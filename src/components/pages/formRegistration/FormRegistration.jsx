import { ErrorMessage, Field, Formik, Form } from "formik";
import React from "react";
import { NavLink } from "react-router-dom";
import { useAddEventMutation } from "../../redux/rtkQuery/rtkQuery";

const FormRegistration = () => {
  const [addEvent, { data, isLoading, error, isSuccess }] =
    useAddEventMutation();

  const valueForm = (formData) => {
    addEvent(formData);
  };

  return (
    <div className="flex p-20 outline outline-2 w-[700px] h-[900px] m-auto mt-20 bg-inc-z50">
      <div className="flex flex-col w-full">
        <NavLink
          to="/"
          className="inline-block w-[120px] h-[30px] outline outline-2 mb-[40px]">
          Home
        </NavLink>

        <Formik
          initialValues={{ name: "", email: "", date: "", picked: "" }}
          onSubmit={(values, { resetForm }) => {
            valueForm(values);
            resetForm();
          }}>
          <Form className="flex flex-col mt-6">
            <label className="text-left mb-2">Full name</label>
            <Field className="outline outline-2 mb-2" name="name" type="text" />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500"
            />

            <label className="text-left mb-2 mt-6">Email</label>
            <Field
              className="outline outline-2 mb-2"
              name="email"
              type="email"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500"
            />

            <label className="text-left mb-2 mt-6">Date of birth</label>
            <Field className="outline outline-2 mb-2" name="date" type="date" />
            <ErrorMessage
              name="date"
              component="div"
              className="text-red-500"
            />

            <h3 id="my-radio-group" className="mt-6 mb-4">
              Where did you hear this event?
            </h3>
            <div
              role="group"
              aria-labelledby="my-radio-group"
              className="flex justify-start gap-10 mb-6">
              <label>
                <Field type="radio" name="picked" value="social" />
                Social media
              </label>
              <label>
                <Field type="radio" name="picked" value="friends" />
                Friends
              </label>
              <label>
                <Field type="radio" name="picked" value="myself" />
                Found myself
              </label>
            </div>

            <button
              className="outline outline-2 mt-4 w-[120px] self-center"
              type="submit"
              disabled={isLoading}>
              {isLoading ? "Submitting..." : "Submit"}
            </button>

            {error && (
              <p className="mt-[50px] text-red-400 w-[300px]">
                {error.data.message}
              </p>
            )}
            {isSuccess && data && (
              <p className="mt-4 text-green-500">Event {data.name} Created</p>
            )}
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default FormRegistration;
