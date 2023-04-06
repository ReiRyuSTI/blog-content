import { HookFormTest0 } from '../modules/HookForm0';
import { HookFormTest1 } from '../modules/HookForm1';
import { HookFormTest2 } from '../modules/HookForm2';

export const HookFormPage = () => {
  return (
    <main className="flex flex-col gap-20">
      <HookFormTest0 />
      <HookFormTest1 />
      <HookFormTest2 />
    </main>
  );
};
