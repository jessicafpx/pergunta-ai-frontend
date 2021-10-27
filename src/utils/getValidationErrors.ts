import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string; // pode ser qualquer coisa desde que seja string (nome, email, password etc)
}

export default function getValidationErrors(err: ValidationError): Errors {
  const validationErrors: Errors = {};

  err.inner.forEach(error => {
    if (error.path) {
      validationErrors[error.path] = error.message;
    }
  });

  return validationErrors;
}
