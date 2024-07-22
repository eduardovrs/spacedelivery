import { TextInputProps } from "./TextInput.structure";

function TextInput({ type, placeholder, ...props }: TextInputProps) {
  return (
    <input
      required
      className="border border-gray-400 py-1 px-2 w-full rounded-xl"
      type={type}
      placeholder={placeholder}
      {...props}
    />
  );
}

export default TextInput;
