
function showResult(){
    let marks = 0;
    let que1opt1 = document.f1.q1.value;
    let que1opt2 = document.f1.q2.value;
    let que1opt3 = document.f1.q3.value;
    let que1opt4 = document.f1.q4.value;
    let que1opt5 = document.f1.q5.value;
    let que1opt6 = document.f1.q6.value;
    let que1opt7 = document.f1.q7.value;
    let que1opt8 = document.f1.q8.value;
    let que1opt9 = document.f1.q9.value;
    let que1opt10 = document.f1.q10.value;
    if(que1opt1 === "correct"){
    marks++
    }
    if(que1opt2 === "correct"){
    marks++
    }
    if(que1opt3 === "correct"){
        marks++
        }
    if(que1opt4 === "correct"){
    marks++
    }
    if(que1opt5 === "correct"){
        marks++
        }
    if(que1opt6 === "correct"){
    marks++
    }
    if(que1opt7 === "correct"){
        marks++
        }
    if(que1opt8 === "correct"){
    marks++
    }
    if(que1opt9 === "correct"){
        marks++
        }
    if(que1opt10 === "correct"){
    marks++
    }
    document.getElementById("result").innerHTML="You've scored " + marks + " out of 10"
    if(marks === 10){
        document.getElementById("remark").innerHTML="Excellent! Continue your hardwork"
    }
    else if(marks>=5 && marks<10){
        document.getElementById("remark").innerHTML="Good! Try a little bit harder to score more"
    }
    else{
         document.getElementById("remark").innerHTML="Find where you lack and improve"
    }
    document.querySelector(".ans").style.backgroundColor="lightgreen"
}

function clearForm(){
    document.getElementById("result").innerHTML=""
    document.getElementById("remark").innerHTML=""
    document.querySelector(".ans").style.backgroundColor=""
}