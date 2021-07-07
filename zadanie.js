function validationName()
{
    let imie = document.getElementById("name").value
    if( imie === "")  
    {
        document.getElementById("alertName").innerHTML="podaj imie";
        alert("brak imienia")
    }
    else document.getElementById("alertName").innerText="";
}
function validationEmail()
{

    let userEmail = document.getElementById("email").value
    if( userEmail === "")  
    {
        document.getElementById("alertEmail").innerHTML="brak maila";
        alert("brak maila")
    }
    else if(  userEmail.includes("@") === false )  
    {
        document.getElementById("alertEmail").innerHTML="zły maila";
        alert("zły maila")
    }
    else document.getElementById("alertEmail").innerText="";
}
function validationTeleNumber()
{

    let teleNumber = document.getElementById("teleNumber").value
    if( teleNumber === "" )  
    {
        document.getElementById("alertNumber").innerHTML="brak numeru telefonu";
        alert("brak numeru telefonu")
    }
    else if( teleNumber.length < 9 )  
    {
        document.getElementById("alertNumber").innerHTML="za krótki numer";
        alert("za krótki numer")
    }
    else if( teleNumber.length > 9 )  
    {
        document.getElementById("alertNumber").innerHTML="za długi numer";
        alert("za długi numer")
    }
    else document.getElementById("alertNumber").innerText="";
}
function validationText()
{
    let textEmail = document.getElementById("textEmail").value
        if( textEmail === "" || textEmail === "Tu wpisz treść maila")  
        {
            document.getElementById("alertText").innerHTML="wpisz coś przed wysłaniem";
        }
        else document.getElementById("alertText").innerText="";
}
function funkcjasidebar()
 {
    document.getElementById("sidebar").classList.toggle('active');
    
 }
let pytania=[
{
    question:"W jakim wieku umarł Kurt Cobain? \n (a)27 \n (b)54 \n (c)16",
    answer: "a"
},
{
    question: "Na czym grał Kurt ? \n (a) trójkąt \n (b) waltornia \n (c) gitara ",
    answer: "c"
},
{
    question: "W jakim zespole grał kurt ? \n (a) Nirvana \n (b) Metallica \n (c) Ich troje ",
    answer: "a"
},
{
    question: "W którym roku zmarł Kurt ?\n (a) 1884 \n (b) 1994 \n (c) 2018 ",
    answer: "a"
},
{
    question: "Jaką muzyke grała Nirvana? \n (a) Grunge \n (b) Discopolo\n (c) rap ",
    answer: "a"
},
{
    question: "W którym roku wydali Nevermind ? \n (a) 1909 \n (b) 1991 \n (c) 2018 ",
    answer: "b"
},
{
    question: "Jak zmarł Kurt Cobain? \n (a) samobójstwo \n (b)w wypadeku samolotowym \n (c) w ataku terrorystycznym ",
    answer: "a"
},
{
    question: "Od czego był uzaleniony Kurt Cobain ?\n (a) heroiny \n (b) leków \n (c) morfiny ",
    answer: "a"
},
{
    question: "Kto był na okładce Nevermind ?\n (a) nic nie było \n (b) dziecko \n (c) gitara ",
    answer: "b"
},
{
    question: " Kurt Cobain miał zone ? \n (a) tak \n (b) nie \n (c) nie wiem ",
    answer: "a"
}

]
function captchaMy()
{  let formularz = document.getElementById("formularz")
let textCaptcha = document.getElementById("textCaptcha")
let btnCaptcha = document.getElementById("captcha")
let btnSend = document.getElementById("send")
let wylosowanaLiczba = Math.random()*10+1
let i= Math.round(wylosowanaLiczba)
let wylosowanaLiczba2 = Math.random()*10+1
console.log("i",i) 
let e= Math.round(wylosowanaLiczba2)
console.log("e",e) 
let miejsceNaPytanie = document.getElementById("pytanie")
miejsceNaPytanie = i
console.log(pytania[i].question)
let response = window.prompt(pytania[i].question)
if(response == pytania[i].answer)
{   
    console.log('dobrze')
    btnSend.style.display="block"
    btnCaptcha.style.display="none"
    textCaptcha.style.display="none"
    formularz.style.display="block"
}
else
{   console.log('zle ostatnia szansa')
    console.log(pytania[e].question)
    let response2 = window.prompt(pytania[e].question)
    if(response2 == pytania[e].answer)
    {   btnSend.style.display="block"
        console.log('dobrze')
        btnCaptcha.style.display="none"
        textCaptcha.style.display="none"
        formularz.style.display="block"
    }
    else
    {   btnCaptcha.style.display="none"
        textCaptcha.innerHTML="Zablokowano Ci Dostep do formularzu :("
        console.log('brak dostepu')
        alert("zablokowano Ci dostęp do wysylu danych")
    }
}

}