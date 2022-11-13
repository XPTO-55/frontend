import styled from "styled-components";
import { Bounded } from "../../src/components/blog/Bounded";

const Field = ({ label, children }) => {
  return (
    <label>
      <FieldSpan>{label}</FieldSpan>
      {children}
    </label>
  );
};

const InputField = ({
  label,
  name,
  type = "text",
  placeholder,
  required = true,
}) => {
  return (
    <Field label={label}>
      <Input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
      />
    </Field>
  );
};

const TextareaField = ({ label, name, placeholder, required = true }) => {
  return (
    <Field label={label}>
      <Textarea
        name={name}
        required={required}
        placeholder={placeholder}
      />
    </Field>
  );
};

const ContactForm = () => {
  return (
    <Bounded asChild size="small">
      <section>
        <Form
          action="#"
          method="get"
        >
          <InputField label="Name" name="name" placeholder="Jane Doe" />
          <InputField
            label="Email Address"
            name="email"
            type="email"
            placeholder="jane.doe@example.com"
          />
          <TextareaField
            label="Message"
            name="message"
            placeholder="Write your message here…"
          />
          <button
            type="submit"
            className="ml-auto inline-flex items-center gap-2"
          >
            Send message{" "}
            <span aria-hidden={true} className="text-xl">
              &rarr;
            </span>
          </button>
        </Form>
      </section>
    </Bounded>
  );
};

export default ContactForm;

const Textarea = styled.textarea`
  padding-top: 0.75rem;
  padding-bottom: 0.75rem; 
  padding-left: 0.75rem; 
  padding-right: 1.75rem; 
  width: 100%; 
  height: 10rem; 
  border-radius: 0; 
  border-bottom-width: 1px; 
`

const Input = styled.input`
  padding-top: 0.75rem;
  padding-bottom: 0.75rem; 
  padding-left: 0.75rem; 
  padding-right: 1.75rem; 
  width: 100%; 
  border-radius: 0; 
  border-bottom-width: 1px;  
`
const Form = styled.form`
  display: grid; 
  grid-template-columns: repeat(1, minmax(0, 1fr)); 
  gap: 1.5rem; 
`

const FieldSpan = styled.span`
  font-size: 0.875rem;
  line-height: 1.25rem; 
  color: #64748b;
`
