import { ErrorMessage, Field, Formik, Form } from "formik";
import React from "react";

const FormRegistration = () => {
  // const [addCar] = useAddCarMutation();

  // useAddCarMutation();
  // const valueForm = data => {
  //   console.log('data', data);
  //   addCar(data);
  // };
  return (
    <div className=" p-20 outline  outline-2 w-[700px]	h-[900px]	m-auto mt-20 bg-inc-z50">
      <Formik
        initialValues={{ name: "", email: "", date: "" }}
        // validationSchema={Yup.object({

        //   rentalConditions: Yup.string()
        //     .max(20, 'Must be 20 characters or less')
        //     .required('Required'),
        //   minimumAge: Yup.string()
        //     .max(20, 'Must be 20 characters or less')
        //     .required('Required'),
        //   mileage: Yup.string()
        //     .max(15, 'Must be 15 characters or less')
        //     .required('Required'),
        // })}

        onSubmit={(values) => console.log("values", values)}>
        <Form style={{ display: "flex", flexDirection: "column" }}>
          <label className="text-left mb-2">Name</label>
          <Field className="outline outline-2" name="name" type="name" />
          <ErrorMessage name="name" />

          <label className="text-left mb-2 mt-6">Email</label>
          <Field className="outline outline-2" name="email" type="email" />
          <ErrorMessage name="email" />

          <label className="text-left mb-2 mt-6">Date of birth</label>
          <Field className="outline outline-2" name="date" type="date" />
          <ErrorMessage name="date" />

          <button
            className="outline outline-2 mt-[80px] w-[120px]"
            type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormRegistration;
