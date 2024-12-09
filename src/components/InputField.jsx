"use client"
const baseInputClasses =
  "w-full p-2 border border-zinc-300 rounded-md shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light";

export const InputField = ({ type, name, placeholder, value, onChange }) => (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={baseInputClasses}
      />
    </div>
  );
  export const TextAreaField = ({ name, placeholder, value, onChange }) => (
    <div>
      <textarea
        name={name}
        rows="4"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={baseInputClasses}
      ></textarea>
    </div>
  );
  
 