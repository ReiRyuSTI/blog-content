import { SubmitHandler, useForm } from 'react-hook-form';

export const HookFormTest3 = () => {
  type QuestionType = {
    items: string[];
  };
  const myFavoriteFoods = [
    { id: 0, name: '利用していないため' },
    { id: 1, name: '利用していないため' },
    { id: 2, name: '利用していないため' },
    { id: 3, name: '利用していないため' },
  ];
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<QuestionType>({
    mode: 'onChange',
    defaultValues: {
      items: ['0', '1', '2'],
    },
  });
  const onSubmit: SubmitHandler<QuestionType> = (data: QuestionType) => {
    // API送信
    console.log(data);
  };
  const watchAllFields = watch('items');

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="flex flex-col">
            {myFavoriteFoods.map((item) => {
              return (
                <label key={item.id} className="flex flex-row items-center gap-4">
                  <input
                    type="checkbox"
                    value={item.id}
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 ring-offset-1 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                    {...register('items', {
                      validate: {
                        atLeastOneRequired: (value) =>
                          (value && value.length >= 1) || '1つ以上選択してください',
                      },
                    })}
                  />
                  <span>{item.name}</span>
                </label>
              );
            })}
          </div>
          {errors.items && (
            <p>
              {errors.items.type}: {errors.items.message}
            </p>
          )}
        </div>
        <button type="submit" disabled={!isValid || isSubmitting}>
          確定
        </button>
        <p>送信するデータ: {JSON.stringify(watchAllFields)}</p>
      </form>
    </>
  );
};
