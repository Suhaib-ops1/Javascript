function savelocal() {
    localStorage.setItem('name', document.getElementById('name').value);
    localStorage.setItem('password', document.getElementById('pass').value);
    localStorage.setItem('age', document.getElementById('age').value);
    localStorage.setItem('birth', document.getElementById('birth').value);
    localStorage.setItem('upload', document.getElementById('upload').value);
    localStorage.setItem('description', document.getElementById('des').value);
    localStorage.setItem('major', document.getElementById('major').value);
    localStorage.setItem('sibling', document.getElementById('sib').value);
    localStorage.setItem('sibling_description', document.getElementById('dess').value);
  }
  
  function output() {
    document.getElementById("outputName").innerText = "Name: " + (localStorage.getItem("name"))
    document.getElementById("outputPassword").innerText = "Password: " + (localStorage.getItem("password"))
    document.getElementById("outputAge").innerText = "Age: " + (localStorage.getItem("age"))
    document.getElementById("outputBirth").innerText = "Birth Date: " + (localStorage.getItem("birth"))
    document.getElementById("outputUpload").innerText = "Uploaded File: " + (localStorage.getItem("upload"))
    document.getElementById("outputDescription").innerText = "Description: " + (localStorage.getItem("description"))
    document.getElementById("outputMajor").innerText = "Major: " + (localStorage.getItem("major"))
    document.getElementById("outputSibling").innerText = "Sibling: " + (localStorage.getItem("sibling") )
    document.getElementById("outputSiblingDescription").innerText = "Sibling Description: " + (localStorage.getItem("sibling_description") )
  }