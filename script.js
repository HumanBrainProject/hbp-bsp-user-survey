function start() {
    //question n°1
    $("#qs11")[0].checked=false;
    $("#qs12")[0].checked=false;
    $("#qs13")[0].checked=false;
    $("#qs14")[0].checked=false;
    $("#qs15")[0].checked=false;
    $("#qs16")[0].checked=false;

    //questio n°2
    //console.log($("#q2")[0].value);
    $("#q2")[0].value=4;
    //question n°3
    $("#qs31")[0].checked=false;
    $("#qs32")[0].checked=false;
    $("#qs33")[0].checked=false;
    $("#qs34")[0].checked=false;
    $("#c3")[0].value='';

    //question n°4
    $("#qs41")[0].checked=false;
    $("#qs42")[0].checked=false;
    $("#qs43")[0].checked=false;
    $("#qs44")[0].checked=false;
    $("#c4")[0].value='';
    //question n°5
    $("#qs51")[0].checked=false;
    $("#qs52")[0].checked=false;
    $("#qs53")[0].checked=false;
    $("#qs54")[0].checked=false;
    $("#c5")[0].value='';

    //question n°6
    $("#qs61")[0].checked=false;
    $("#qs62")[0].checked=false;
    $("#qs63")[0].checked=false;
    $("#qs64")[0].checked=false;
    $("#c6")[0].value='';

    //question n°7
    $("#qs71")[0].checked=false;
    $("#qs72")[0].checked=false;
    $("#qs73")[0].checked=false;
    $("#c7")[0].value='';


    //question n°8
    //Molecular Level
    $("#q827")[0].checked=false;
    $("#q828")[0].checked=false;
    $("#q829")[0].checked=false;
    $("#q830")[0].checked=false;
    $("#q831")[0].checked=false;
    $("#q832")[0].checked=false;

    //Subcellular Level
    $("#q826")[0].checked=false;

    //Trace Analysis
    $("#q81")[0].checked=false;
    $("#q82")[0].checked=false;
    $("#q83")[0].checked=false;
    $("#q84")[0].checked=false;

    //Morphology Analysis
    $("#q85")[0].checked=false;
    $("#q86")[0].checked=false;

    //Single Circuit Building
    $("#q87")[0].checked=false;
    $("#q88")[0].checked=false;
    $("#q89")[0].checked=false;
    $("#q810")[0].checked=false;
    $("#q811")[0].checked=false;
    $("#q812")[0].checked=false;
    $("#q813")[0].checked=false;

    //Circuit Building
    $("#qs8_1")[0].checked=false;
    $("#qs8_2")[0].checked=false;
    $("#q8_14")[0].checked=false;
    $("#q8_15")[0].checked=false;
    $("#q8_16")[0].checked=false;
    $("#q8_17")[0].checked=false;
    $("#q8_18")[0].checked=false;

    //Single Cell In Silico Experiments
    $("#q816")[0].checked=false;

    //Small Circuit In Silico Experiments
    $("#qs8_3")[0].checked=false;
    $("#q8_19")[0].checked=false;
    $("#q8_20")[0].checked=false;

    //Brain Area Circuit In Silico Experiments
    $("#qs8_4")[0].checked=false;
    $("#qs8_5")[0].checked=false;
    $("#q8_21")[0].checked=false;
    $("#q8_22")[0].checked=false;
    $("#q8_23")[0].checked=false;

    //Model Validation
    $("#q820")[0].checked=false;
    $("#q821")[0].checked=false;
    $("#q822")[0].checked=false;
    $("#q823")[0].checked=false;
    $("#q824")[0].checked=false;

    //Highly Integrated Workflows
    $("#q825")[0].checked=false;

    //question n°9
    $("#qs91")[0].checked=false;
    $("#check1")[0].checked=false;
    $("#check2")[0].checked=false;
    $("#check5")[0].checked=false;
    $("#check6")[0].checked=false;
    $("#qs92")[0].checked=false;

    //question n°10
    $("#q10")[0].value='';
    //question n°11
    $("#qs111")[0].checked=false;
    $("#qs112")[0].checked=false;
    $("#qs113")[0].checked=false;
    $("#qs114")[0].checked=false;
    $("#qs115")[0].checked=false;
    $("#qs116")[0].checked=false;
    $("#qs117")[0].checked=false;
    $("#qs118")[0].checked=false;
    $("#qs119")[0].checked=false;
    $("#qs1110")[0].checked=false;
    $("#qs1111")[0].checked=false;

    //question n°12
    $("#qs121")[0].checked=false;
    $("#qs122")[0].checked=false;

    //question n°13
    $("#q13")[0].value='';


}
function step1(){
  document.getElementById('step_bar').style.width= '7.69%';
  document.getElementById('step_bar').innerHTML= 'step 1 of 13';
  document.getElementById('step1').style.display = 'block';
  document.getElementById('step2').style.display = 'none';
  document.getElementById('step3').style.display = 'none';
}
function step2(){
  document.getElementById('step_bar').style.width= '15.38%';
  document.getElementById('step_bar').innerHTML= 'step 2 of 13';
  document.getElementById('step2').style.display = 'block';
  document.getElementById('step1').style.display = 'none';
  document.getElementById('step3').style.display = 'none';
}
function step3(){
  document.getElementById('step_bar').style.width= '23.07%';
  document.getElementById('step_bar').innerHTML= 'step 3 of 13';
  document.getElementById('step3').style.display = 'block';
  document.getElementById('step2').style.display = 'none';
  document.getElementById('step4').style.display = 'none';
}
function step4(){
  document.getElementById('step_bar').style.width= '30.76%';
  document.getElementById('step_bar').innerHTML= 'step 4 of 13';
  document.getElementById('step4').style.display = 'block';
  document.getElementById('step3').style.display = 'none';
  document.getElementById('step5').style.display = 'none';
}
function step5(){
  document.getElementById('step_bar').style.width= '38.45%';
  document.getElementById('step_bar').innerHTML= 'step 5 of 13';
  document.getElementById('step5').style.display = 'block';
  document.getElementById('step4').style.display = 'none';
  document.getElementById('step6').style.display = 'none';
}
function step6(){
  document.getElementById('step_bar').style.width= '46.14%';
  document.getElementById('step_bar').innerHTML= 'step 6 of 13';
  document.getElementById('step6').style.display = 'block';
  document.getElementById('step7').style.display = 'none';
  document.getElementById('step5').style.display = 'none';
}
function step7(){
  document.getElementById('step_bar').style.width= '53.83%';
  document.getElementById('step_bar').innerHTML= 'step 7 of 13';
  document.getElementById('step7').style.display = 'block';
  document.getElementById('step6').style.display = 'none';
  document.getElementById('step8').style.display = 'none';
}
function step8(){
  document.getElementById('step_bar').style.width= '61.52%';
  document.getElementById('step_bar').innerHTML= 'step 8 of 13';
  document.getElementById('step8').style.display = 'block';
  document.getElementById('step7').style.display = 'none';
  document.getElementById('step9').style.display = 'none';
}
function step9(){
  document.getElementById('step_bar').style.width= '69.21%';
  document.getElementById('step_bar').innerHTML= 'step 9 of 13';
  document.getElementById('step9').style.display = 'block';
  document.getElementById('step8').style.display = 'none';
  document.getElementById('step10').style.display = 'none';
}
function step10(){
  document.getElementById('step_bar').style.width= '76.9%';
  document.getElementById('step_bar').innerHTML= 'step 10 of 13';
  document.getElementById('step10').style.display = 'block';
  document.getElementById('step9').style.display = 'none';
  document.getElementById('step11').style.display = 'none';
}
function step11(){
  document.getElementById('step_bar').style.width= '84.59%';
  document.getElementById('step_bar').innerHTML= 'step 11 of 13';
  document.getElementById('step11').style.display = 'block';
  document.getElementById('step10').style.display = 'none';
  document.getElementById('step12').style.display = 'none';
}
function step12(){
  document.getElementById('step_bar').style.width= '92.28%';
  document.getElementById('step_bar').innerHTML= 'step 12 of 13';
  document.getElementById('step12').style.display = 'block';
  document.getElementById('step11').style.display = 'none';
  document.getElementById('step13').style.display = 'none';
}
function step13(){
  document.getElementById('step_bar').style.width= '100%';
  document.getElementById('step_bar').innerHTML= 'step 13 of 13';
  document.getElementById('step13').style.display = 'block';
  document.getElementById('step12').style.display = 'none';
}
/*
function end(){
  if(window == top){
    document.getElementById('outside').style.display='block';
    document.getElementById('inside').style.display='none';
  }else{
    document.getElementById('outside').style.display='none';
    document.getElementById('inside').style.display='block';}
}*/

function checkMenu(id){
  var r81=document.getElementById(id);
  if($("#"+id).is(':checked')) {
    r81=r81.value;} 
  else {
     r81="";}
  return r81;
}

function getValueRadio(radios){
  for (var i = 0, length = radios.length; i < length; i++){
    if (radios[i].checked){
      var q1=radios[i].value;
      return q1;
      break;
    }
  }
}

function printChecked(items){
  var selectedItems=[];
  for(var i=0; i<items.length; i++){
    if(items[i].type=='checkbox' && items[i].checked==true)
      selectedItems.push(items[i].value+"\t");
    }
    return selectedItems;
}   

function myFunction() {
  window.onscroll = function() { myFunction()};
  var header = document.getElementById("myHeader");
  var sticky = header.offsetTop;
 
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");} 
  else {
    header.classList.remove("sticky");}
}

function getOption(v){
        const range = document.querySelector('input.inputImage ');
        const div = document.querySelector('.moji');
        //const mojis = ['😄 excellent','🙂 good','😐 fair','😣 bad','🤢 very bad'];
        const mojis = ['🤢 very bad','😣 bad','😐 fair','🙂 good','😄 excellent'];
        div.textContent = mojis[v.value];
        return v.value;
}
        
function show1(){
  document.getElementById('shcompany').style.display ='none';
  document.getElementById("other").value = ""; 
}

function show2(){
  document.getElementById('shcompany').style.display = 'block';
}

function hide(){
  document.getElementById('menu').style.display ='none';
  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false;
  document.getElementById("check5").checked = false;
  document.getElementById("check6").checked = false;
}
function show_menu(){
  if($("#qs91").is(":checked")){
    $("#menu").show();
    $("#check1")[0].checked = true;
    $("#check2")[0].checked = true;
    $("#check5")[0].checked = true;
    $("#check6")[0].checked = true;
    $('#check1,#check2,#check5,#check6').on('change', function() {
      if($('#check1')[0].checked==false && $('#check2')[0].checked==false && $('#check5')[0].checked==false && $('#check6')[0].checked==false){
        $("#qs91")[0].checked=false;
        $("#qs92")[0].checked=true;
        $("#menu").hide();}
    });
  }
  else{
    $("#menu").hide();
    $("#check1")[0].checked = false;
    $("#check2")[0].checked = false;
    $("#check5")[0].checked = false;
    $("#check6")[0].checked = false;
  }
}

function ShowCellPlacement(){
  document.getElementById("CellsPlacement").style.display="block";
}
function ShowCellPlacement(){
  if($("#qs8_1").is(":checked")){
    $("#menu_CellsPlacement").show();
    $("#q8_14")[0].checked = true;
    $("#q8_15")[0].checked = true;
    $("#q8_16")[0].checked = true;
    $('#q8_14,#q8_15,#q8_16').on('change', function() {
      if($('#q8_14')[0].checked==false && $('#q8_15')[0].checked==false && $('#q8_16')[0].checked==false){
        $("#qs8_1")[0].checked=false;
        $("#menu_CellsPlacement").hide();}
    });
  }
  else{
    $("#menu_CellsPlacement").hide();
    $("#q8_14")[0].checked = false;
    $("#q8_15")[0].checked = false;
    $("#q8_16")[0].checked = false;
  }
}
function ShowConnectome(){
  if($("#qs8_2").is(":checked")){
    $("#menu_connectome").show();
    $("#q8_17")[0].checked = true;
    $("#q8_18")[0].checked = true;
    $('#q8_17,#q8_18').on('change', function() {
      if($('#q8_17')[0].checked==false && $('#q8_18')[0].checked==false){
        $("#qs8_2")[0].checked=false;
        $("#menu_connectome").hide();}
    });
    }
  else{
    $("#menu_connectome").hide();
    $("#q8_17")[0].checked = false;
    $("#q8_18")[0].checked = false;
  }
}
function ShowSmallCircuit(){
  if($("#qs8_3").is(":checked")){
    $("#menu_SmallCircuit").show();
    $("#q8_19")[0].checked = true;
    $("#q8_20")[0].checked = true;
    $('#q8_19,#q8_20').on('change', function() {
      if($('#q8_19')[0].checked==false && $('#q8_20')[0].checked==false){
        $("#qs8_3")[0].checked=false;
        $("#menu_SmallCircuit").hide();}
    });
    }
  else{
    $("#menu_SmallCircuit").hide();
    $("#q8_19")[0].checked = false;
    $("#q8_20")[0].checked = false;
  }
}
function ShowHippocampus(){
  if($("#qs8_4").is(":checked")){
    $("#menu_Hippocampus").show();
    $("#q8_21")[0].checked = true;
    $("#q8_22")[0].checked = true;
    $('#q8_21,#q8_22').on('change', function() {
      if($('#q8_21')[0].checked==false && $('#q8_22')[0].checked==false){
        $("#qs8_4")[0].checked=false;
        $("#menu_Hippocampus").hide();}
    });
    }
  else{
    $("#menu_Hippocampus").hide();
    $("#q8_21")[0].checked = false;
    $("#q8_22")[0].checked = false;
  }
}
function ShowCerebellum(){
  if($("#qs8_5").is(":checked")){
    $("#menu_cerebellum").show();
    $("#q8_23")[0].checked = true;
    $('#q8_23').on('change', function() {
      if($('#q8_23')[0].checked==false){
        $("#qs8_5")[0].checked=false;
        $("#menu_cerebellum").hide();}
    });
  }
  else{
    $("#menu_cerebellum").hide();
    $("#q8_23")[0].checked = false;
  }
}
function formSubmitted(status) {
  $('#genericForm').hide();//matches your form name or whatever you want to disappear post-submission
  $("#bottone").hide();
  $("#output").show();
  document.getElementById('output').innerHTML = status;
}

function SplashInCollab() {
  if(window != top){
    $('#collab').show();
  }
  else{
    $('#collab').hide();
  }
}


