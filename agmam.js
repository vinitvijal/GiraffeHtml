function formValidation()
{
var uid=document.registration.userid;
var uidlen=uid.value.length;
if(uidlen==0|| uidlen>30)
{
    alert("Error");
    return false;
}
return true;
}