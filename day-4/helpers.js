const parsePassportData = (source) => {
  const data = {};
  source.replace('\n', ' ').split(' ').forEach(keypair => {
    const [key, value] = keypair.split(':');
    data[key] = value;
  });
  return data;
}

const checkValidity = (passport, requiredFields) => {
  return requiredFields.every(field => {
    return passport.hasOwnProperty(field)
  })
}

const checkValidityByRule = (passport, requiredFields) => {
  let isValid = true;
  Object.keys(requiredFields).forEach(key => {
    if (!passport.hasOwnProperty(key)) {
      isValid = false;
      return;
    }
    if (!requiredFields[key](passport[key])) {
      isValid = false
    }
  });
  return isValid;
}

module.exports = {
  parsePassportData,
  checkValidity,
  checkValidityByRule
}