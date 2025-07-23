export const formatDate = (dateString) => {
  if (!dateString) return '';

  const date = new Date(dateString);

  const year = date.getFullYear();
  // getMonth()는 0부터 시작하므로 1을 더하고, 10보다 작으면 앞에 '0'을 붙여줌
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}.${month}.${day}`;
};
