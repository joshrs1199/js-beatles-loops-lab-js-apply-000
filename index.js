function theBeatlesPlay(musicians, instruments){
  var ss = [];
  for (var i = 0; i < musicians.length; i++){
    ss.push(musicians[i] + " plays " + instruments[i]);
  }
  return ss
}
