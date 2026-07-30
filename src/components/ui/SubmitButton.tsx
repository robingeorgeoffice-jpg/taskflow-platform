type SubmitButtonData = {
  type?: "submit" | "reset" | "button" | undefined,
  name: string,
};

type SubmitButtonProps = {
  submitButton: SubmitButtonData;
}

function SubmitButton({ submitButton }: SubmitButtonProps) {
  return (
    <div className="mt-10">
      <button type={submitButton.type} className="block w-full rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">{submitButton.name}</button>
    </div>
  );

}
export default SubmitButton;