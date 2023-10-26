// fonts
import { kanitMB } from "@/assets/fonts";

interface Props {
    content: string;
}

export default function Button({ content }: Props): JSX.Element {
    return (
        <button
            type='button'
            className={`${kanitMB.className} h-full w-full uppercase bg-creamy hover:bg-american-yellow font-extrabold relative  inline-flex items-center justify-center px-6 py-3 overflow-hidden transition duration-300 ease-linear rounded-[3000px] group `}
        >
            <span
                className={`absolute inset-0 flex items-center justify-center text-dark w-full h-full  duration-200 translate-y-full  group-hover:translate-y-0 ease-linear`}
            >
                {content}
            </span>
            <span
                className={`absolute flex items-center justify-center w-full h-full text-dark  transition-all duration-300 transform ease-linear group-hover:-translate-y-full `}
            >
                {content}
            </span>
            <span className="relative invisible w-full h-full"> {content}</span>
        </button>
    )
}