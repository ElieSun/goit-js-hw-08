const throttle = require('lodash.throttle');

const formRef = document.querySelector('.feedback-form');
const formDataobjLocalStr=(JSON.parse(localStorage.getItem("feedback-form-state")))|| {email:"",message:""}

formRef.elements.email.value=formDataobjLocalStr.email;
formRef.elements.message.value=formDataobjLocalStr.message;



formRef.addEventListener('input',throttle(onFormInputSave,500));
function onFormInputSave(e){
    e.preventDefault();
    const {email, message }=e.currentTarget;
    formDataobjLocalStr.email=email.value
    formDataobjLocalStr.message=message.value
    localStorage.setItem("feedback-form-state",JSON.stringify(formDataobjLocalStr))
}
