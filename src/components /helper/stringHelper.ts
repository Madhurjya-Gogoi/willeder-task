export const extractNameFromEmail = (email: string): string => {
  const atIndex = email.indexOf('@');
  if (atIndex !== -1) {
    const name = email.substring(0, atIndex);
    return name?.charAt(0)?.toUpperCase() + name.slice(1);
  }
  return '';
};
