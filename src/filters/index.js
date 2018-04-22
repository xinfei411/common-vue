import Vue from 'vue'
Vue.filter('id',function(value,startL=3,endL=3){
  let l=value.length - startL - endL;
  let star =new Array(l).fill('*').join('');
  return `${value.substr(0,startL)}${star}${value.substr(-endL)}`;
});