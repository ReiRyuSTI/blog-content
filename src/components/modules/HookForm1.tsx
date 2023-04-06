import { useEffect } from 'react';
import { useForm, useFieldArray, SubmitHandler, Control, useWatch } from 'react-hook-form';

export const HookFormTest1 = () => {
  type InputType = {
    title: string;
    cart: {
      name: string;
      price: number;
      quantity: number;
    }[];
  };
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<InputType>({
    defaultValues: {
      title: '',
      cart: [{ name: '', price: 0, quantity: 0 }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    name: 'cart',
    control,
  });
  const onSubmit: SubmitHandler<InputType> = (data: InputType) => {
    console.log('data', data);
  };

  const Total = ({ control }: { control: Control<InputType> }) => {
    const formValues = useWatch({
      name: 'cart',
      control,
    });
    const total = formValues.reduce(
      (acc, current) => acc + (current.price || 0) * (current.quantity || 0),
      0
    );
    return <p>Total Amount: {total}</p>;
  };

  useEffect(() => {
    console.log(isValid, errors);
  }, [errors, isValid]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center gap-10">
        <label className="flex w-full flex-row items-center justify-between gap-3">
          <span className="inline-flex w-52 items-center justify-center px-2 font-bold">
            TITLE:
          </span>
          <input
            type="text"
            placeholder="text"
            maxLength={16}
            {...register('title', {
              required: { value: true, message: 'name is required' },
              maxLength: { value: 15, message: 'name value maxLength 15' },
            })}
          />
        </label>
        <div>{errors.title && errors.title.message}</div>
        <div className="flex w-full flex-col gap-2">
          <div className="flex flex-row justify-between">
            <span className="inline-flex w-52 items-center justify-center px-2 font-bold">
              name
            </span>
            <span className="inline-flex w-52 items-center justify-center px-2 font-bold">
              price
            </span>
            <span className="inline-flex w-52 items-center justify-center px-2 font-bold">
              quantity
            </span>
            <button onClick={() => append({ name: '', price: 0, quantity: 0 })}>append</button>
          </div>
          {fields.map((field, index) => {
            return (
              <div key={field.id} className="flex flex-col">
                <div className="flex flex-row justify-between">
                  <input
                    type="text"
                    placeholder="text"
                    {...register(`cart.${index}.name`, {
                      required: { value: true, message: 'cart is required' },
                    })}
                  />
                  <input
                    type="number"
                    {...register(`cart.${index}.price`, {
                      min: { value: 0, message: 'cart min 0' },
                    })}
                  />
                  <input
                    type="number"
                    {...register(`cart.${index}.quantity`, {
                      min: { value: 0, message: 'cart min 0' },
                    })}
                  />
                  <button type="button" onClick={() => remove(index)}>
                    DELETE
                  </button>
                </div>
                <div>{errors.cart?.[index] && 'このラインにエラーが存在します'}</div>
              </div>
            );
          })}
        </div>
        <div>{errors.cart && 'カートにエラーが存在しています'}</div>
        <Total control={control} />

        <input
          type="submit"
          value={isValid ? '送信する' : '不許可'}
          className={isValid ? 'border-black text-black' : 'border-red-500 text-red-500'}
        />
      </form>
    </>
  );
};
