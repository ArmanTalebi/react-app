/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: FieldValues) => console.log(data);

  //   const nameRef = useRef<HTMLInputElement>(null); // For Name
  //   const ageRef = useRef<HTMLInputElement>(null); // For Age
  //   const person = { name: "", age: 0 };
  //   const [person, setPerson] = useState({
  //     name: "",
  //     age: 0,
  //   });

  //   const handleSubmit = (event: FormEvent) => {
  // if (nameRef.current !== null) person.name = nameRef.current.value; // Handling Form submission for Name
  // if (ageRef.current !== null) person.age = parseInt(ageRef.current.value); // Handling Form submission for Age ????? ParseInt

  // event.preventDefault(); // For useState
  // console.log(person);
  //   };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          <strong>Name</strong>
        </label>
        <input
          {...register("name")}
          //   onChange={(event) =>
          //     setPerson({ ...person, name: event.target.value })
          //   }
          //   value={person.name}
          id="name"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          <strong>Age</strong>
        </label>
        <input
          {...register("age")}
          //   onChange={(event) =>
          //     setPerson({ ...person, age: parseInt(event.target.value) })
          //   }
          //   value={person.age}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
