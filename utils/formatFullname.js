module.exports = (fullName) => {
  if(typeof fullName !== 'string' || fullName === ' ' || fullName.split(' ').length !== 2) return 'Error';
  const [ firstName, lastName ] = fullName.split(' ');
  return firstName.split('')[0].toUpperCase() + firstName.slice(1).toLowerCase() + ' ' + lastName.split('')[0].toUpperCase() + lastName.slice(1).toLowerCase() ;
};
