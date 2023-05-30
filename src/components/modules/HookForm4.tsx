import { useForm, SubmitHandler, Controller } from 'react-hook-form';

export const HookFormTest4 = () => {
  type Machines = {
    id: number;
    name: string;
  };
  const QuestionnaireList: Machines[] = [
    { id: 0, name: 'コンテンツ1' },
    { id: 1, name: 'コンテンツ2' },
    { id: 2, name: 'コンテンツ3' },
    { id: 3, name: 'コンテンツ4' },
  ];
  const { handleSubmit, control } = useForm<{ [id: string]: boolean }>({
    mode: 'onSubmit',
    defaultValues: {
      コンテンツ1: false,
      コンテンツ2: false,
      コンテンツ3: false,
      コンテンツ4: false,
    },
  });

  const onSubmit: SubmitHandler<{ [id: string]: boolean }> = (formData: {
    [id: string]: boolean;
  }) => {
    console.log(formData);
  };
  return (
    <>
      <form className="flex w-full flex-col gap-10" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4 rounded-lg border p-10">
          <div className="flex flex-col gap-2">
            <h4 className="text-center text-sm">以下の機器をお持ちですか？</h4>
          </div>
          {QuestionnaireList.map((value) => (
            <Controller
              control={control}
              name={value.name}
              key={value.id}
              render={({ field }) => (
                <FormToggleButton
                  onChange={field.onChange}
                  state={field.value}
                  value={value.name}
                />
              )}
            />
          ))}
        </div>
        <div className="flex justify-end">
          <button
            className={
              'inline-flex h-16 w-64 items-center justify-center rounded-lg border border-[#2D34CC] bg-[#2D34CC] text-white'
            }
          >
            送信
          </button>
        </div>
      </form>
    </>
  );
};

import { AiOutlineCheck } from 'react-icons/ai';

type Props = {
  value: string;
  state: boolean;
  onChange: (value: boolean) => void;
};

const FormToggleButton = (props: Props) => {
  const { state, onChange, value } = props;
  const onClickTrue = () => {
    onChange(true);
  };
  const onClickFalse = () => {
    onChange(false);
  };
  return (
    <>
      <div className="inline-flex w-full grow items-center justify-between">
        <div className="inline-flex w-[121px] gap-4">
          <span className="flex items-center">{value}</span>
        </div>
        <div className="inline-flex w-full max-w-xl flex-row justify-end gap-4">
          <button
            type="button"
            className={
              'inline-flex h-16 w-64 items-center justify-center rounded-lg border ' +
              (state
                ? 'bg-[#2D34CC] border-[#2D34CC] text-white'
                : 'bg-white text-[#777777] border-[#777777]')
            }
            onClick={onClickTrue}
          >
            <AiOutlineCheck className={state ? 'inline-block' : 'hidden'} />
            持っている
          </button>
          <button
            type="button"
            className={
              'inline-flex h-16 w-64 items-center justify-center rounded-lg border ' +
              (!state
                ? 'bg-[#2D34CC] border-[#2D34CC] text-white'
                : 'bg-white text-[#777777] border-[#777777]')
            }
            onClick={onClickFalse}
          >
            <AiOutlineCheck className={!state ? 'inline-block' : 'hidden'} />
            持っていない
          </button>
        </div>
      </div>
    </>
  );
};
