var score=function(q1,q2,q3,q4){
  return(q1+q2+q3+q4)
};

$(document).ready(function(){
  $("#click").click(function(event){
    event.preventDefault();
    var q1 = parseInt($("input:radio[name=Q1]:checked").val());
    var q2 = parseInt($("input:radio[name=Q2]:checked").val());
    var q3 = parseInt($("input:radio[name=Q3]:checked").val());
    var q4 = parseInt($("input:radio[name=Q4]:checked").val());
    var tally=score(q1,q2,q3,q4);

    if(tally<=80&&tally>=60){
      $("#form").hide();
      display.innerHTML=("Very good, your score is: "+tally);
    }
    else if(tally<60&&tally>=40){
      $("#form").hide();
      display.innerHTML=("Pass, Your score is: "+ tally);
    }
    else if(tally<40&&tally>=0){
      $("#form").hide();
      display.innerHTML=("Poor, Your score is "+ tally);
    }
    else{
      $("#form").hide();
      display.innerHTML=("Whoops, Try again")
    }
  });
});



    // if (q1 == "20"){
    //   score =+ 20;
    // }
    // if (q2 == "20"){
    //   score =+ 20;
    // }
    // if (q3 == "20"){
    //   score =+ 20;
    // }
    // if (q4 == "20"){
    //   score =+ 20;
    // // }
    // console.log(q1,q2,q3,q4);
    // var values = [q1,q2,q3,q4];
    // values.forEach(function(value) {
    //   if(value == "20") {
    //     score+=20;
    //   }
    // })
    //
    // document.getElementById('display').innerHTML = "Your Score is: " + score + "%";
    // document.getElementById('display').style.visibility="visible";
