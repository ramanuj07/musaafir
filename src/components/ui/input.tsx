import * as React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(() => {
  return (
    <div className="relative">
      <div className="relative w-80">
        <input
          type="text"
          className="border border-black rounded-full py-2 pl-10 pr-4 bg-nude2 focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Search Your destination"
        />

        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
});

Input.displayName = "Input";

export { Input };
