import numeral from 'numeral';

const format = (value, format) => {
  return numeral(value).format(format);
};

const percentage = value => (value ? `${value}%` : '0%');

const uppercase = value => value.toUpperCase();

export { format, percentage, uppercase };
