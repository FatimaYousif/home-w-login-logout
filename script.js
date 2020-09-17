let loginBtn = document.getElementById('login');
let signUpBtn = document.getElementById('sign-up');
let button = document.getElementById('btn');

const signUp = () =>{
    signUpBtn.style.left='50px'
    loginBtn.style.left='-450px'
    button.style.left='110px'
}
const login = () =>{
    signUpBtn.style.left='600px'
    loginBtn.style.left='100px'
    button.style.left='0'
}

let entries=[
    {
        email:"fyousif30@gmail.com",
        pass:"123"
    },
    {
        email:"aneelareiko@gmail.com",
        pass:"123"
    }
]

function loginf(){

    let in_email=document.querySelector("#email").value;
    let in_pw=document.querySelector("#pass").value;

    if(in_email === "")
    {
    document.querySelector("#alert").style.display="block";
    
    }
     if(in_pw=== "")
    {
      document.querySelector("#alert1").style.display="block";  
    }
   
    // //official login

    for(let i=0;i<entries.length;i++)
    {
        if(in_email===entries[i].email && in_pw===entries[i].pass)
        {
           window.location.replace("index2.html");
           break;
        }
      else{
        document.querySelector("#o_alert").style.display="block";
        window.location.href="index.html";
        
        break;
      }
    }
}
function signupf()
{
    let in_email=document.querySelector("#s_email").value;
    let in_pw=document.querySelector("#s_pass").value;

        localStorage.setItem("email", in_email);
        localStorage.setItem("pass", in_pw);
        entries.push(
            {
            "email":    localStorage.getItem("email"),
            "pass":    localStorage.getItem("pass"),
            }
            )

        alert("success");
}