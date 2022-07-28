var Password = document.getElementsByName("pass")[0];
var Repeat_Password = document.getElementsByName("repeatpass")[0];

function Password_Verify(){
    if(Password.value=="" && Repeat_Password.value==""){
        alert("Şifre Alanlarını Doldurunuz");    
        
    }
    else if(Password.value == Repeat_Password.value){
        alert("Kayıt İşlemi Başarılı");
        return true;
    }
    else if(Password.value != Repeat_Password.value){
        alert("Girdiğiniz Şifreler Eşleşmedi");
    return false;
    }
}