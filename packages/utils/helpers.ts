export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('fr-FR').format(date);
};

export const capitalizeFirstLetter = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};