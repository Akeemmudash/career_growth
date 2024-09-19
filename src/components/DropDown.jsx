import { AnimatePresence, m } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const dropdownVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};
const DropDownField = ({ fieldName, options, setValue, fieldLabel }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const dropdownRef = useRef(null); // Create a reference for the dropdown

  function handleOptionClick(option) {
    setSelectedOption(option);
    setValue(fieldName.toLowerCase(), option);
    setIsOpen(false);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div ref={dropdownRef}>
      <label className="form__label capitalize">
        {fieldLabel || fieldName}
      </label>
      <div
        className="relative block text-left"
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span htmlFor="dropdown-menu" className="sr-only">
          Select an option
        </span>
        <div>
          <button
            id="dropdown-menu"
            type="button"
            aria-controls="dropdown-options"
            aria-expanded={isOpen}
            aria-haspopup="listbox"
            onClick={() => setIsOpen(!isOpen)}
            className="form__input flex justify-between items-center capitalize text-dark-blue-600"
          >
            {selectedOption || (
              <span className="text-opacity-50 text-dark-blue-400">
                {fieldLabel || fieldName}
              </span>
            )}
            <span
              className={`block transition-transform${
                isOpen ? " rotate-180" : ""
              }`}
            >
              <ChevronDown />
            </span>
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <m.div
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.1, ease: "easeOut" }}
              className="absolute z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 max-h-60 overflow-y-auto"
              role="listbox"
              id="dropdown-options"
            >
              <ul className="py-1">
                {options.map((option, index) => (
                  <li
                    key={index}
                    role="option"
                    aria-selected={selectedOption === option}
                    className={`cursor-pointer select-none py-2 px-4 text-sm text-dark-blue-500 capitalize${
                      selectedOption === option
                        ? " bg-dark-blue-300"
                        : " hover:bg-dark-blue-200"
                    }`}
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export const ChevronDown = () => {
  return (
    <svg
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L7 7L13 1"
        stroke="#14213D"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

DropDownField.propTypes = {
  options: PropTypes.array,
  setValue: PropTypes.func,
  fieldName: PropTypes.string,
  fieldLabel: PropTypes.string,
};
export default DropDownField;
