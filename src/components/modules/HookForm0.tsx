import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

export const HookFormTest0 = () => {
  type InputType = {
    id: string;
    password: string;
  };
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<InputType>({
    defaultValues: {
      id: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<InputType> = (data: InputType) => {
    console.log('data', data);
  };
  useEffect(() => {
    console.log(isValid, errors);
  }, [errors, isValid]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex w-96 flex-col items-center gap-10">
        <label className="flex w-full flex-row items-center justify-between gap-3">
          <span>ID:</span>
          <input
            type="text"
            maxLength={16}
            {...register('id', {
              required: { value: true, message: 'name is required' },
              maxLength: { value: 15, message: 'name value maxLength 15' },
            })}
          />
        </label>
        <div>{errors.id && errors.id.message}</div>
        <label className="flex w-full flex-row items-center justify-between gap-3">
          <span>PASSWORD:</span>
          <input
            type="password"
            {...register('password', {
              required: { value: true, message: 'password is required' },
            })}
          />
        </label>
        <div>{errors.password && errors.password.message}</div>
        <input
          type="submit"
          value={isValid ? '送信する' : '不許可'}
          className={isValid ? 'border-black text-black' : 'border-red-500 text-red-500'}
        />
      </form>
    </>
  );
};
