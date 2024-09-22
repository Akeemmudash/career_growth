import useMyForm from "../../hooks/useMyForm";
import { Spinner } from "../Spinner";
import Select, { components } from "react-select";
import { Controller } from "react-hook-form";
import DropDownField, { ChevronDown } from "../DropDown";
import PropTypes from "prop-types";
import { useSubmitForm } from "../../hooks/useSubmitForm";
import { m } from "framer-motion";

export const Form = () => {
  const {
    queryStatus,
    formControl,
    countries,
    states,
    isFormSubmitting,
    handleSubmit,
    register,
    formInputErrs: errors,
    setValue,
    setSelectedCountry,
  } = useMyForm();
  const { onSubmit } = useSubmitForm();
  return (
    <section id="apply" className="py-24 bg-dark-blue-100 relative">
      {isFormSubmitting && (
        <div className="bg-white bg-opacity-55 inset-0 flex justify-center items-center absolute size-full text-dark-blue-600 z-40">
          <Spinner />
        </div>
      )}
      <div className="container">
        <div className="text-center mb-9">
          <m.h2 className="inline-block font-semibold md:text-5xl text-2xl text-dark-blue-600">
            <m.span
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: -40, opacity: 0, transition: { delay: 0.3 } }}
              viewport={{ amount: 0.5, once: true }}
              className="block"
            >
              Form
            </m.span>
            <m.span
              whileInView={{ scaleX: 1, transition: { delay: 0.6 } }}
              initial={{ scaleX: 0 }}
              viewport={{ amount: 0.5, once: true }}
              aria-hidden="true"
              className="w-5/6 h-2 bg-sky-blue-100 block mx-auto mt-2"
            ></m.span>
          </m.h2>
          <p className="max-w-lg mx-auto mt-6 text-dark-blue-400">
            Kindly fill the form below to begin the application process. Once
            you submit the form, a student advisor will get in touch with you at
            your preferred time to discuss your needs, answer all your questions
            and assist you to complete your inquiry/enrollment process.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-4xl mx-auto">
          <div className="mb-5">
            <label htmlFor="name" className="form__label">
              Full Name
            </label>
            <input
              type="text"
              {...register("name")}
              id="name"
              placeholder="Full Name"
              className="form__input"
            />
            {errors.name && (
              <span className="error-message">{errors.name.message}</span>
            )}
          </div>
          <div className="mb-5">
            <label htmlFor="name" className="form__label">
              Email
            </label>
            <input
              type="email"
              {...register("email")}
              placeholder="Email"
              id="email"
              className="form__input"
            />
            {errors.email && (
              <span className="error-message">{errors.email.message}</span>
            )}
          </div>
          <div className="mb-5">
            <label htmlFor="phonenumber" className="form__label">
              Phone Number
            </label>
            <input
              type="tel"
              {...register("phonenumber")}
              id="phonenumber"
              placeholder="Phone Number"
              className="form__input"
            />
            {errors.phonenumber && (
              <span className="error-message">
                {errors.phonenumber.message}
              </span>
            )}
          </div>
          <div className="mb-5">
            <DropDownField
              fieldName="gender"
              setValue={setValue}
              options={["male", "female"]}
            />
            {errors.gender && (
              <span className="error-message">{errors.gender.message}</span>
            )}
          </div>
          <div className="mb-5">
            <DropDownField
              fieldName="skill"
              setValue={setValue}
              options={[
                "data analytics",
                "software engineer",
                "product/digital marketing",
                "cybersecurity/server adminstration",
                "video editing and vfx",
              ]}
            />
            {errors.skill && (
              <span className="error-message">{errors.skill.message}</span>
            )}
          </div>
          <div className="mb-5 flex-col flex md:flex-row gap-5">
            <div className="flex-1">
              <label htmlFor="country" className="form__label">
                Country
              </label>
              <Controller
                name="country"
                control={formControl}
                render={({ field }) => (
                  <Select
                    {...field}
                    placeholder="Country"
                    classNames={{
                      control: () => `form__input`,
                      option: (state) =>
                        state.isSelected ? "bg-dark-blue-300" : "",
                    }}
                    styles={{
                      option: (state) => ({
                        backgroundColor: state.isFocused
                          ? "#F3F7FF"
                          : state.isSelected
                          ? "#E6EEFF"
                          : "",
                        padding: "8px 16px",
                        fontSize: "14px",
                        color: "#14213D",
                      }),
                      placeholder: (provided) => ({
                        ...provided,
                        color: "#3F5482",
                        opacity: 0.5,
                      }),
                    }}
                    components={{ DropdownIndicator }}
                    classNamePrefix="select"
                    isDisabled={queryStatus.isPending}
                    isLoading={queryStatus.isPending}
                    isClearable={true}
                    isSearchable={true}
                    options={countries}
                    value={countries.find(
                      (option) => option.value === field.value
                    )}
                    onChange={(selectedOption) => {
                      field.onChange(selectedOption.value);
                      setSelectedCountry(selectedOption.value);
                    }}
                  />
                )}
              />
              {errors.country && (
                <span className="error-message">{errors.country.message}</span>
              )}
            </div>
            <div className="flex-1">
              {
                <div
                  className={
                    states.length === 0
                      ? "cursor-not-allowed pointer-events-none opacity-40"
                      : ""
                  }
                >
                  <DropDownField
                    fieldLabel="where are you located"
                    fieldName="state"
                    options={states}
                    setValue={setValue}
                  />
                  {errors.state && (
                    <span className="error-message">
                      {errors.state.message}
                    </span>
                  )}
                </div>
              }
            </div>
          </div>
          <div className="">
            <DropDownField
              fieldLabel="employment status"
              fieldName="employed"
              options={["employed", "unemployed"]}
              setValue={setValue}
            />
            {errors.employed && (
              <span className="error-message">{errors.employed.message}</span>
            )}
          </div>

          <div className=" flex justify-center">
            <button className="text-center mt-28 px-20 text-lg py-4 bg-dark-blue-600 text-white rounded-full font-medium">
              submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
const DropdownIndicator = (props) => {
  const { menuIsOpen } = props.selectProps;

  return (
    <components.DropdownIndicator {...props}>
      <span
        className={`chevron-icon block transition-transform  ${
          menuIsOpen ? "rotate-180" : ""
        }`}
      >
        <ChevronDown />
      </span>
    </components.DropdownIndicator>
  );
};
DropdownIndicator.propTypes = {
  selectProps: PropTypes.object,
};
