/* eslint-disable @typescript-eslint/no-misused-promises */
import { FieldValues, useForm } from "react-hook-form"; //How to make form with react hook library
import { z } from "zod"; //  for changes and and integrate our forms
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(5 /*{message: "Name must be at least 5 characters"} */), // just for adding privately
  age: z.number({ invalid_type_error: "Age field is required." }).min(18),
});

type FormData = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          <strong>Name</strong>
        </label>
        <input
          {...register("name", { required: true, minLength: 4 })}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          <strong>Age</strong>
        </label>
        <input
          {...register("age", { valueAsNumber: true })}
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>
      <button disabled={!isValid} className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
