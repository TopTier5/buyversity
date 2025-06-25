import { useFormStatus } from "react-dom";

export default function SubmitButton({ title, className }) {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            className={`${className} ${pending && "animate-pule"}`}
            disabled={pending}
        >
            {pending ? "Loading..." : title}
        </button>

    );


}