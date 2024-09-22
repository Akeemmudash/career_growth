import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useForm as useReactHookForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

function fetchCountriesAndStates() {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  return fetch(
    "https://countriesnow.space/api/v0.1/countries/states",
    requestOptions
  ).then((response) => response.json());
}
const phoneRegex = /^(\+?\d{1,3})?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
const userSchema = z.object({
  name: z.string().trim().min(4, "Name must be at least 4 characters long"),
  email: z.string().email("Invalid email address"),
  gender: z.string().min(1, "Gender is required"),
  phonenumber: z
    .string()
    .regex(phoneRegex, "Invalid phone number format")
    .min(10, "Phone number must be at least 10 digits long")
    .max(15, "Phone number must be no longer than 15 digits"),
  country: z.string().min(1, "Country is required"),
  state: z.string().min(1, "State is required"),
  employed: z.string().min(1, "Employment status is required"),
  skill: z.string().min(1, "Skill is required"),
});

const useMyForm = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const { isPending, error, data } = useQuery({
    queryKey: ["countriesAndStates"],
    queryFn: fetchCountriesAndStates,
    retry: 3,
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useReactHookForm({
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      phonenumber: "",
      skill: "",
      country: "",
      state: "",
      gender: "",
      employed: "",
    },
    resolver: zodResolver(userSchema),
  });
  const countriesAndStates = data?.data || [];
  const countries = countriesAndStates.map((countryObject) => ({
    value: countryObject.name.toLowerCase(),
    label: countryObject.name,
  }));
  const queryStatus = { isPending, error };
  const filteredStates =
    countriesAndStates.find(
      (country) => country.name.toLowerCase() === selectedCountry.toLowerCase()
    )?.states || [];

  const states = filteredStates.map((state) => {
    return String(state.name).toLowerCase();
  });
  return {
    errors,
    queryStatus,
    countries,
    states,
    handleSubmit,
    register,
    formInputErrs: errors,
    setValue,
    setSelectedCountry,
    formControl: control,
    isFormSubmitting: isSubmitting,
  };
};

export default useMyForm;
