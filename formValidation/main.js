const uname = document.getElementById('uname')
const email = document.getElementById('email')
const pwd = document.getElementById('pwd')
const cpwd = document.getElementById('cpwd')
const errUname = document.getElementById('err-uname')
const errEmail = document.getElementById('err-email')
const errPwd = document.getElementById('err-pwd')
const errCpwd = document.getElementById('err-cpwd')
const btn = document.getElementById('re')

const error  = {
    uname:  'Username must be between 3-8 characters long',
    email: 'Email wrong',
    pwd: 'Password cannot be less than 3 characters',
    pwdMismatch: "Passwords don't match",
}

const isUname = () => {
    if(uname.value.length < 3 || uname.value.length > 8){
        errUname.innerText = error.uname
     }
}

const isEmail = () => {
    if(email.value.length < 3){
        errEmail.innerText = error.email
     }
}

const isPwd = () => {
    if(pwd.value.length < 3){
        errPwd.innerText = error.pwd
     }
}

const isCpwd = () => {
    if(cpwd.value !== pwd.value){
        errPwd.innerText = error.pwdMismatch
        errCpwd.innerText = error.pwdMismatch
     }
}

const call = (e) => {
    e.preventDefault()
    errUname.innerText = ''
    errEmail.innerText = ''
    errPwd.innerText = ''
    errCpwd.innerText = ''
    if(uname.value === '' && email.value === '' && pwd.value === '' && cpwd.value === '') {
        return
    }
    else {
        isUname()
        isEmail()
        isPwd()
        isCpwd()
    }

    
}


btn.addEventListener('click', call)