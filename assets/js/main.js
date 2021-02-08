
  var vid = document.getElementById('vid');

function unmute(){
  if(vid.muted){
  vid.muted = false;
}};

  function play1(){
    vid.removeAttribute("src");
    vid.setAttribute("src",'assets/video/01.mp4');
    goback1();

  };
  function play2(){
    vid.removeAttribute("src");
    vid.setAttribute("src",'assets/video/02.mp4');
    goback2();

  };
  function play3(){
    vid.removeAttribute("src");
    vid.setAttribute("src",'assets/video/03.mp4');
    goback3();

  };
  function play4(){
    vid.removeAttribute("src");
    vid.setAttribute("src",'assets/video/04.mp4');
    goback3();

  };

  function goback1(){
  vid.removeAttribute("loop");
  vid.removeAttribute("muted");
  unmute();
  vid.onended = function() {
  vid.removeAttribute("src");
  vid.setAttribute("src",'assets/video/00.webM',);

}};
function goback2(){
vid.removeAttribute("loop");
vid.removeAttribute("muted");
unmute();
vid.onended = function() {
vid.removeAttribute("src");
vid.setAttribute("src",'assets/video/00.webM',);

}};

function goback3(){
vid.removeAttribute("loop");
vid.removeAttribute("muted");
unmute();
vid.onended = function() {
vid.removeAttribute("src");
vid.setAttribute("src",'assets/video/00.webM',);

}};

function goback4(){
vid.removeAttribute("loop");
vid.removeAttribute("muted");
unmute();
vid.onended = function() {
vid.removeAttribute("src");
vid.setAttribute("src",'assets/video/00.webM',);

}};
