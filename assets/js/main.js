
  var vid = document.getElementById('vid1');

function unmute(){
  if(vid.muted){
  vid.muted = false;
} else {
  vid.muted = true;
}};

function clear() {
  vid.setAttribute("loop");
  vid.setAttribute("muted");
}

  function play1(){
    vid.removeAttribute("src");
    vid.setAttribute("src",'assets/video/2.mp4');
    goback1();

  };

  function goback1(){
  vid.removeAttribute("loop");
  vid.removeAttribute("muted");
  unmute();
  vid.onended = function() {
  vid.removeAttribute("src");
  vid.setAttribute("src",'assets/video/LOOP1.mp4',);

}};
