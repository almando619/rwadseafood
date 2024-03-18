const isEmpty = ({ value, trim = true }) => {
  if (value === undefined || value === null) {
    return true;
  } else {
    if (trim) {
      if (value?.trim() === "") {
        return true;
      }
    } else {
      if (value === "") {
        return true;
      }
    }
  }
  return false;
};

const trimText = ({ text, length }) => {
  if (text?.length > length) {
    return `${text?.substring(0, length)}...`;
  } else {
    return text;
  }
};

const cleanInput = (value) => {
  let _cleaned = value.toString().replace(/'/g, "\\'");
  _cleaned = _cleaned.toString().replace(/"/g, `\\"`);
  return _cleaned;
};
