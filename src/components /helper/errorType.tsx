export const extractErrorValue = (errorMessage: any) => {
  const errorRegex = /Error \(auth\/(.*?)\)/;
  const match = errorRegex.exec(errorMessage);

  if (match && match[1]) {
    return match[1];
  }

  return null;
};
