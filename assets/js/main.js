
  var vid = document.getElementById('vid1');

function unmute(){
  if(vid.muted){
  vid.muted = false;
} else {
  vid.muted = true;
}};

  function play1(){
    vid.removeAttribute("src");
    vid.setAttribute("src",'assets/video/muna1.mp4');
    goback1();
  };

  function goback1(){
  vid.removeAttribute("loop");
  vid.removeAttribute("muted");
  unmute();
  vid.onended = function() {
  vid.removeAttribute("src");
  vid.setAttribute("src",'assets/video/manfro1.mp4',);

}};
  
