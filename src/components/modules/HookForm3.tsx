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
  } = useForm<QuestionType>({ mode: 'onChange' });
  const onSubmit: SubmitHandler<QuestionType> = (data: QuestionType) => {
    // API送信
    console.log(data);
  };
  const watchAllFields = watch();

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div>
            {myFavoriteFoods.map((item) => {
              return (
                <label key={item.id}>
                  <input
                    type="checkbox"
                    value={item.name}
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
