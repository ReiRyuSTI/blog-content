import { useEffect } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';

const ToggleButton = (props: { state: boolean; onChange: (value: boolean) => void }) => {
  const { state, onChange } = props;
  const onClickTrue = () => {
    onChange(true);
  };
  const onClickFalse = () => {
    onChange(false);
  };

  return (
    <div className="flex flex-row gap-5">
      <button
        type="button"
        className={
          'p-2 border-2 font-bold  ' +
          (state ? 'border-blue-400 text-blue-400' : 'border-gray-400 text-gray-400')
        }
        onClick={onClickTrue}
      >
        TRUE
      </button>
      <button
        type="button"
        className={
          'p-2 border-2 font-bold ' +
          (state ? 'border-gray-400 text-gray-400' : 'border-blue-400 text-blue-400')
        }
        onClick={onClickFalse}
      >
        FALSE
      </button>
    </div>
  );
};
const InputForm = (props: { state: string; onChange: (value: string) => void }) => {
  const { state, onChange } = props;
  return (
    <>
      <input type="text" value={state} onChange={(e) => onChange(e.target.value)} />
    </>
  );
};

export const HookFormTest2 = () => {
  type InputType = {
    id: string;
    password: string;
    checkbox: boolean;
  };
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<InputType>({
    defaultValues: {
      id: '',
      password: '',
      checkbox: false,
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
          <Controller
            control={control}
            name="id"
            rules={{
              required: { value: true, message: 'name is required' },
              maxLength: { value: 15, message: 'name value maxLength 15' },
            }}
            render={({ field }) => <InputForm onChange={field.onChange} state={field.value} />}
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
        <Controller
          control={control}
          name="checkbox"
          render={({ field }) => <ToggleButton onChange={field.onChange} state={field.value} />}
        />
        <input
          type="submit"
          value={isValid ? '送信する' : '不許可'}
          className={isValid ? 'border-black text-black' : 'border-red-500 text-red-500'}
        />
      </form>
    </>
  );
};
