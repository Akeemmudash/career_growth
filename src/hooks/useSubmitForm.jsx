import { useState } from "react";
import Swal from "sweetalert2";

export const useSubmitForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = (data) => {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwtfizO_zaQ2t-1DioGY1ngQRmF1tW_Gem_1wiOhvPW4WF0g65ZMV_QUU6kw-f_6i1EdA/exec";

    const formData = new FormData();

    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    setIsLoading(true);

    fetch(scriptURL, {
      method: "POST",
      body: formData,
    })
      .then(() => {
        Swal.fire({
          title: "Form submitted!",
          text: "Your form has been successfully submitted.",
          icon: "success",
          confirmButtonColor: "#01A1FC",
        });
        setTimeout(() => window.location.reload(), 3000);
      })
      .catch((error) => {
        console.log(error);

        Swal.fire({
          title: "Error!",
          text: "Something went wrong while submitting the form.",
          icon: "error",
          confirmButtonText: "Ok",
          confirmButtonColor: "#01A1FC",
        });
      })
      .finally(() => setIsLoading(false));
  };

  return {
    isFormLoading: isLoading,
    onSubmit,
  };
};
