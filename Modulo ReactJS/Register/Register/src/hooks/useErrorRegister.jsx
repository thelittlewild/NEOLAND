const useErrorRegister = (res, setOk, setRes) => {
  //200
  if (res?.status == 200) {
    setOk(() => true);
    setRes(() => {
      return {};
    });
    Swal.fire({
      icon: "success",
      title: "Welcome to my Page",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  //409 --> usuario ya registrado
  if (res?.response?.status == 409) {
    setRes(() => {
      return {};
    });
    Swal.fire({
      icon: "error",
      title: "Ooops...",
      text: "Your mail is not valid",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  //500--> interval server error

  if (res?.response?.status == 500) {
    setRes(() => {
      return {};
    });
    Swal.fire({
      icon: "error",
      title: "Ooops...",
      text: "Interval server error",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  // error en la contraseña

  return <div>useErrorRegister</div>;
};

export default useErrorRegister;
