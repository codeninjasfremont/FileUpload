const loginsec=document.querySelector('.login-section')
const loginlink=document.querySelector('.login-link')
const registerlink=document.querySelector('.register-link')
registerlink.addEventListener('click',()=>{
    loginsec.classList.add('active')
})
loginlink.addEventListener('click',()=>{
    loginsec.classList.remove('active')
})
  /** @param {Event} event */
function handleSubmit(event) {
    event.preventDefault();
  
    /** @type {HTMLFormElement} */
    const form = event.currentTarget;
    const url = new URL(form.action);
    const formData = new FormData(form);
    const searchParams = new URLSearchParams(formData);
  
    /** @type {Parameters<fetch>[1]} */
    const fetchOptions = {
      method: form.method,
    };
  
    if (form.method.toLowerCase() === 'post') {
      if (form.enctype === 'multipart/form-data') {
        fetchOptions.body = formData;
      } else {
        fetchOptions.body = searchParams;
      }
    } else {
      url.search = searchParams;
    }
  
    fetch(url, fetchOptions)
      .then(response => response.text())
      .then(content => displayFileContent(content))
      .catch(error => console.error('File upload error:', error));
  }
  
  function displayFileContent(content) {
    var fileContentElement = document.getElementById('file-content');
    fileContentElement.textContent = content;
   
    // Perform further actions with the file content as needed
    // For example, you can parse the content as JSON, manipulate it, or display it in a specific format.
  }