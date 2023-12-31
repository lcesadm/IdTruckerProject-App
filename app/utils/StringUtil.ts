export const verifyValidationField = (validation: string) => {
  return validation.substring(
    validation.indexOf("'") + 1,
    validation.lastIndexOf("'"),
  );
};

export const onlyNums = (value: string) => {
  return value.replace(/[^\d]/g, '');
};

export const formatCNH = (value: string) => {
  return value.substring(0, 11);
};

export const formatCPF = (value: string) => {
  return value
    .substring(0, 11)
    .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
};
