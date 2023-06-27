import * as Yup from "yup";

export function initialValues() {
  return {
    name: "",
    address: "",
    phone: "",
    email: "",
    description: "",
    location: null,
    images: [],
  };
}

export function validationSchema() {
  return Yup.object({
    name: Yup.string().required("Campo obligatorio"),
    address: Yup.string().required("Campo obligatorio"),
    phone: Yup.string().required("Campo obligatorio"),
    email: Yup.string()
      .email("Formato email invalido")
      .required("Campo obligatorio"),
    description: Yup.string().required("Campo obligatorio"),
    location: Yup.object().required("La localización es requerida"),
    images: Yup.array()
      .min(1, "Se requiere una imagen como mínimo.")
      .required("La imagen es requerida"),
  });
}
