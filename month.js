var d = new Date();
var dateString = d.toLocaleDateString("vi-VN"); // Định dạng Việt Nam
document.getElementById("date").innerHTML = dateString;

const listImage = document.querySelector('.list-images');
    const imgs = document.getElementsByTagName('img');
    let current = 0;
    setInterval(()=>{
      if(current == imgs.length - 1){
        current = 0
        let width = imgs[0].offsetWidth
        listImage.style.transform='translateX(0)'
      }else{
        current++;
        let width = imgs[1].offsetWidth;
        listImage.style.transform='translateX(-' + width *current + 'px)'
      }
    },5000)
    

    function check() {
      userName = document.getElementById("userName").value;
      pass = document.getElementById("pass").value;
      if (userName == "") note_user = "Hãy nhập tên đăng nhập !";
      else note_user = "";
      if (pass == "") note_pass = "Hãy nhập mật khẩu !";
       else if(pass.length < 6){ 
             note_pass="Mật khẩu ít nhất 6 ký tự";
         document.getElementById('pass').focus();
        }else note_pass="";
      document.getElementById("error-user").innerHTML = note_user;
      document.getElementById("error-pass").innerHTML = note_pass;
      }