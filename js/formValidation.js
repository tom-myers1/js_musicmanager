// form validator


function formValidation(formContents, formType) {
  // need to get attributes then check
  let returnText;


  if (formContents.IsNullOrWhiteSpace) {

  }
  returnText = '{formName} is empty';
  return returnText;
} else if (typeof(formContents) != typeof(formType)) {
  returnText = '{formContents} need to be a(n) {typeof(formType)}';
  return returnText;
} else {
  return;
}
