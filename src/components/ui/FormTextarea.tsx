type FormTextAreaData = {
  label: string,
  id: string,
  name: string,
  autoComplete?: string,
  placeholder: string;
  required?: boolean;
  rows: number,
};

type FormTextAreaProps = {
  formTextArea: FormTextAreaData;
}

function FormTextArea({ formTextArea }: FormTextAreaProps) {
  return (
    <div className="sm:col-span-2">
      <label className="block text-sm/6 font-semibold text-white">{formTextArea.label}</label>
      <div className="mt-2.5">
        <textarea id="message" name="message" rows={formTextArea.rows} placeholder={formTextArea.placeholder} className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"></textarea>
      </div>
    </div>
  );

}
export default FormTextArea;