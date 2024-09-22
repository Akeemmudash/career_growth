import Swal from "sweetalert2";

export const useSubmitForm = () => {
  const onSubmit = async (data) => {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbypvLeFFJ039p956KEQ-8uvOAnQCpzdfBLLEph2TIHf5ds_befOQ6i_SjQDlHBZkwJ3/exec";

    const formData = new FormData();

    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });
    formData.append("date", new Date());
    console.log("formdata", formData);
    await fetch(scriptURL, {
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
      });
  };

  return {
    onSubmit,
  };
};
