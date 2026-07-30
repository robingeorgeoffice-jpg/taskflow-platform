type FormInputData = {
  label: string,
  id: string,
  name: string,
  autoComplete?: string,
  type?: React.HTMLInputTypeAttribute;
  placeholder: string;
  required?: boolean;
};

type FormInputProps = {
  formInput: FormInputData;
}

function FormInput({ formInput }: FormInputProps) {
  return (
    <div className="sm:col-span-2">
      <label className="block text-sm/6 font-semibold text-white">{formInput.label}</label>
      <div className="mt-2.5">
        <input id={formInput.id} type={formInput.type} name={formInput.name} autoComplete={formInput.autoComplete} placeholder={formInput.placeholder} required={formInput.required} className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500" />
      </div>
    </div>
  );

}
export default FormInput;