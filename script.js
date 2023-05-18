const rt_login = document.querySelectorAll('.rt-login');
const rt_register = document.querySelector('.rt-register');
const rt_forgotpassword = document.querySelector('.rt-forgotpassword');

const register = document.getElementById('register');
const login = document.getElementById('wraper');
const forgotpassword = document.querySelectorAll('#forgot-password');

const handle_button = document.querySelectorAll('.handle-button');
const login_header = document.querySelector('.login-header');
const icon_close = document.querySelectorAll('.icon-close');



//reponsive login and register
// click login to open login form
rt_login.forEach((crr,index) => {
    rt_login[index].onclick = function() {
        forgotpassword[0].style.display = 'none';
        register.style.display = 'none';
        login.style.display = 'block'
        contact.style.display = 'none';
        ifcompany.style.display = 'none';
    }
})
// click register to open register form
rt_register.onclick = function() {
    register.style.display = 'block';
    login.style.display = 'none';
}
// click forgot password to open forgotpassword form 
rt_forgotpassword.onclick = function() {
    login.style.display = 'none';
    forgotpassword[0].style.display = 'block';
    
}
//click login in header to open login form
login_header.onclick = function() {
    register.style.display = 'none';
    login.style.display = 'block'
    forgotpassword.forEach(function(crr,index) {
        forgotpassword[index].style.display = 'none';
    })
    contact.style.display = 'none';
    ifcompany.style.display = 'none';
}



// Close with icon
icon_close.forEach (function(crr,index) {
    icon_close[index].onclick = function() {
        register.style.display = 'none';
        login.style.display = 'block';
        contact.style.display = 'none';
        forgotpassword.forEach(function(crr,index) {
            forgotpassword[index].style.display = 'none';
        })
    }
})

// open contact
const contact = document.querySelector('#contact');
const contact_header = document.querySelector('.contact-header');
contact_header.onclick = function() {
    contact.style.display = 'block';
    ifcompany.style.display = 'none';
    register.style.display = 'none';
    login.style.display = 'none';
    forgotpassword.forEach(function(crr,index) {
        forgotpassword[index].style.display = 'none';
    })
}

// open information company 
const ifcompany_header = document.querySelector('.Inforcompany-header');
const ifcompany = document.querySelector('#information-company');
ifcompany_header.onclick = function() {
    ifcompany.style.display = 'block';
    contact.style.display = 'none';
    register.style.display = 'none';
    login.style.display = 'none';
    forgotpassword.forEach(function(crr,index) {
        forgotpassword[index].style.display = 'none';
    })
}
//di chuyen giua cac muc trong information company
const tabitems = document.querySelectorAll(".tab-item");
const tabpanes = document.querySelectorAll(".tab-pane");
const line = document.querySelector(".line");
tabitems.forEach((item, index) => {
    item.onclick = function(){
        // handle item
        const itemRemove = document.querySelector(".tab-item.active");
        itemRemove.classList.remove('active');
        this.classList.add('active');

        // handle pane
        const paneRemove = document.querySelector(".tab-pane.active");
        paneRemove.classList.remove('active');
        tabpanes[index].classList.add('active');

        // handle line
        line.style.left = this.offsetLeft + 'px'
        line.style.width = this.offsetWidth + 'px'
    }
});

// lay thong tin email user 
const email_user = document.querySelector('.email-user');
const title_usser = document.querySelector('.wellcome-user');
const count_down = document.querySelector('.countdow-OTP');



// Xu ly cac nut
handle_button.forEach ((crr,index) => {

    // xu ly nut tiep tuc trong quen mat khau thu 1
    handle_button[2].onclick = () => {
        KiemTraQMK();
    }
    // xu ly dang nhap 
    handle_button[0].onclick = () =>{
        KiemTraDL_login();
    }

    // xu ly dang ky
    handle_button[1].onclick = () =>{
        KiemTraDL_resgister();
    }
    // xu ly nut tiep tuc trong quen mat khau thu 2
    handle_button[3].onclick = () => {
        var otp = document.getElementById("OTP").value.trim();
        if(otp == "12345"){
            forgotpassword[1].style.display = 'none';
            forgotpassword[2].style.display = 'block';
        }
    }
     // xu ly nut tiep tuc trong quen mat khau thu 3
    handle_button[4].onclick = () => {
        KiemTraQMK3();
    }
})

// Array User
var gmailArray = ["phamnguyenvu287@gmail.com"];
var passArray = ["vu123456789"];

function KiemTraDL_login(){
    var flag = true;
    var Emaillogin = document.getElementById("email-login").value.trim();
    var mailFomat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!mailFomat.test(Emaillogin)){
        flag = false;
        alert ("Sai email");
    } 
    var Passlogin = document.getElementById("password-login").value.trim();
    if(Passlogin == "" || Passlogin.length < 10){
        flag = false;
        alert ("Mat khau trong hoac ky tu nho hon 10");
    }
    // Xac nhan dung thong tin vao trang chu
    if(flag == true){
        for (var i = 0; i < gmailArray.length; i++){
            if (Emaillogin == gmailArray[i]){
                if(Passlogin == passArray[i]){
                    alert("Dang nhap thanh cong");
                    // Vao trang chu


                }
            }
        }
    }
}

function  KiemTraDL_resgister(){
    var flag = true;
    var Name = document.getElementById("name-reg").value.trim();
    if (Name == "" ||  Name.length < 10 || /^[a-zA-Z0-9]$/.test(Name)){
        flag = false;
        alert ("Vui long kiem tra lai ten");
    }
    var Emaireg = document.getElementById("email-reg").value.trim();
    var mailFomat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!mailFomat.test(Emaireg)){
        flag = false;
        alert ("Vui long kiem tra lai email");
    } 
    var Passreg = document.getElementById("password-reg").value.trim();
    var Repassreg = document.getElementById("Repassword-reg").value.trim();
    if (Passreg == "" || Passreg.length < 10 || Passreg != Repassreg){
        flag = false;
        if( Passreg != Repassreg) {
            alert("Nhap lai mat khau bi sai");
        }
        else {

        } alert ("Mat khau trong hoac ky tu nho hon 10");
    }
    for(var i = 0; i < gmailArray.length; i++){
        if (Emaireg == gmailArray[i]){
            flag = false;
            alert("Tai khoan email da ton tai!");
        }
    }
    var policyreg =document.getElementById("policy-reg");
    if(policyreg.checked == false){
        alert ("Vui long chap nhan chinh sach");
    }

    // Xac nhan dang ky thanh cong 
    if (flag == true){
            alert("Dang Ky Thanh Cong");
            gmailArray.push(Emaireg);
            passArray.push(Passreg);       
        }
    // console.log(gmailArray);
    // console.log(passArray);
}

// Quen Mat Khau Bang 1
function KiemTraQMK(){
    flag = true;
    var mailFomat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!mailFomat.test(email_user.value.trim())){
        flag = false;
        alert ("Sai email");
    } 
    if (flag == true){
        forgotpassword[0].style.display = 'none';
        forgotpassword[1].style.display = 'block';
        title_usser.innerHTML = `Chào mừng ${email_user.value} quay trở lại`;
        var i = 60;
        setInterval(() => {
            i -= 1;
            count_down.innerHTML = `Mã OTP đã gửi tới bạn Có hiệu lực trong vòng ${i}s`;
            if (i == 0){
                i = 60;
            }
        },1000);
    }
}

// Quen Mat Khau Bang 3
function KiemTraQMK3(){
    var flag = true;
    var Passqmk = document.getElementById("password-qmk").value.trim();
    var Repassqmk = document.getElementById("repassword-qmk").value.trim();
    if (Passqmk == "" || Passqmk.length < 10 || Passqmk != Repassqmk){
        flag = false;
        if( Passqmk != Repassqmk) {
            alert("Nhap lai mat khau bi sai");
        }
        else {
            alert ("Mat khau trong hoac ky tu nho hon 10");
        }
    }
    if (flag == true){
        for (var i = 0; i < gmailArray.length; i++){
            if (email_user == gmailArray[i]){
                passArray[i] == Passqmk;
            }
        }
        alert("Dang nhap thanh cong");
        // Vao Trang chu
    }
}