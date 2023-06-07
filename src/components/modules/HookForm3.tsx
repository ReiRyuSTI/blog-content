import { SubmitHandler, useForm } from 'react-hook-form';

export const HookFormTest3 = () => {
  type QuestionType = {
    items: string[];
  };
  const myFavoriteFoods = [
    { id: 0, name: '利用していないため' },
    { id: 1, name: 'もうやめたい' },
    { id: 2, name: 'そういう気分だったから' },
    { id: 3, name: 'ほかのサービスに浮気します' },
  ];
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<QuestionType>({
    mode: 'onChange',
    defaultValues: {
      items: [],
    },
  });
  const onSubmit: SubmitHandler<QuestionType> = (data: QuestionType) => {
    // API送信
    console.log(data);
  };
  const watchAllFields = watch('items');

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="inline-flex w-96 flex-col gap-5">
        <div className="flex flex-col">
          <div className="flex flex-col ">
            {myFavoriteFoods.map((item) => {
              return (
                <label
                  key={item.id}
                  className="flex flex-row items-center gap-2 hover:cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value={item.id}
                    className="inline-flex h-5 w-5"
                    {...register('items', {
                      validate: {
                        atLeastOneRequired: (value) =>
                          (value && value.length >= 1) || '1つ以上選択してください',
                      },
                    })}
                  />
                  <span className="text-xl">{item.name}</span>
                </label>
              );
            })}
          </div>
          {errors.items && (
            <p className="text-red-400">
              {errors.items.type}: {errors.items.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={!isValid || isSubmitting}
          className={
            'inline-flex items-center justify-center rounded-lg border py-5 text-xl font-bold ' +
            (isValid && !isSubmitting ? ' bg-blue-400 text-black' : ' bg-gray-300 text-white')
          }
        >
          確定
        </button>
        <p>送信するデータ: {JSON.stringify(watchAllFields)}</p>
      </form>
    </>
  );
};
