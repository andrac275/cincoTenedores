import * as Yup from "yup";

export const initialValues = () => {
  return {
    password: "",
    newPassword: "",
    repeatNewPassord: "",
  };
};

export const validationSchema = () => {
  return Yup.object({
    password: Yup.string().required("Campo obligatorio"),
    newPassword: Yup.string().required("Campo obligatorio"),
    repeatNewPassord: Yup.string()
      .required("Campo obligatorio")
      .oneOf(
        [Yup.ref("newPassword")],
        "Las nuevas contraseñas tienen que ser iguales"
      ),
  });
};
