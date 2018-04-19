import axios from 'axios'
import config from '../../static/config'
let gjhs=function(type,url,data){
    return new Promise(function (resolve, reject) {
        axios[type](config.baseUrl+url,{params:data})
          .then(function (response) {
            let resp = response.data;
              if(resp.code == 0){
                resolve(resp.data);
              }else{
                  alert(resp.msg);
              }
          })
          .catch(function (error) {
            console.log(error)
          });
    });
}
let http={
    get(url,data){
        return gjhs('get',...arguments);
    },
    post(url,data){
        return gjhs('post',...arguments);
    },
};
export default{
    install(Vue,Options){
        Vue.prototype.$get=http.get;
        Vue.prototype.$post=http.post;
    }
}