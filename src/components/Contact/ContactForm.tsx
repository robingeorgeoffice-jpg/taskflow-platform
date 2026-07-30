import FormTextArea from "../ui/FormTextarea";
import FormInput from "../ui/FormInput";
import SubmitButton from "../ui/SubmitButton";

function ContactForm() {
  return (
    <div>
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <FormInput formInput={{
            label: 'Name', id: 'first-name', name: 'first-name', type: 'text', placeholder: 'Enter the Name', required: true
          }} />
          <FormInput formInput={{
            label: 'Email', id: 'email', name: 'email', type: 'email', placeholder: 'Enter the Email', required: true
          }} />
          <FormInput formInput={{
            label: 'Phone Number', id: 'phone', name: 'phone', type: 'phone', placeholder: 'Enter the Phone Number', required: true
          }} />
          <FormInput formInput={{
            label: 'Subject', id: 'subject', name: 'subject', type: 'subject', placeholder: 'Enter the Subject'
          }} />
          <FormTextArea formTextArea={{
            label: 'Message', id: 'subject', name: 'message', rows: 4, placeholder: 'Enter the Message'
          }} />
        </div>
        <SubmitButton submitButton={{
          name: "Let's Connect", type: 'submit'
        }} />
      </form>
    </div>

  );
}

export default ContactForm;