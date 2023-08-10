import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import categories from "../categories";

interface Props {
  onSubmit: (data: ExpenseFormData) => void;
}

const schema = z.object({
  description: z
    .string({ invalid_type_error: "Required" })
    .min(3, { message: "description should be at least 20 characters" })
    .max(50),
  amount: z
    .number({ invalid_type_error: "Amount is required" })
    .min(0.01)
    .max(100_000),
  category: z.enum(categories, {
    errorMap: () => ({ message: "Category is required" }),
  }), // enum for categories that we want to choose several items
});

type ExpenseFormData = z.infer<typeof schema>;

const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset(data); // this use for reset the fields that we have filled last
      })}
    >
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="amount"
          type="number"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Categories
        </label>
        <select {...register("category")} id="category" className="form-select">
          <option value="">Select</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
          .
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>
      <button className="btn btn-info me-2" type="reset">
        Reset
      </button>
      <button className="btn btn-info" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ExpenseForm;
