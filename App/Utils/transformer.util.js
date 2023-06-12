import {upperCase, map, result} from 'lodash';

export const uppercaseFisrtLetter = (name='') => {
  const firsTletter = upperCase(name.substring(0, 1));
  const length = name.length;
  const substringOther = name.substring(1,length);
  const finalLetter = firsTletter + substringOther;
  return finalLetter;
};

export const formatFieldAmount = (value) => {
  const amount = (!value && parseInt(value) !== 0) ? '' :
    value.toString().replace(/([,.])+/g, '');
  const expectedSeparator = Math.floor(amount.length / 3);
  const separator = '.';
  const separatorAmount = (amount.split(separator).length - 1);
  const regexRightFormat = /(\.)(?=(\d{3}))/g; // if id/en
  if (regexRightFormat.test(value) && expectedSeparator === separatorAmount) return value;
  else {
    const replaceRegex = /(\d)(?=(\d{3})+(?!\d))/g;
    const replaceValue = '$1' + separator;
    const returnValue = (!value && parseInt(value) !== 0) ? '' :
      value.toString().replace(replaceRegex, replaceValue);
    return returnValue;
  }
};

export function formatNumber(num) {
  const value = num || '';
  return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}

export function removeDot(num) {
  return num.split('.').join('');
}

export const mappingUpdatePercentage = (value, id, NewPercentage) =>
  map(value, eachData => ({
    ...eachData,
    percentage: result(eachData, 'id', 0) === id ? parseInt(NewPercentage) : result(eachData, 'percentage', 0)
}));  