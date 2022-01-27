import axios from "axios";
export function  request(config){
  //1.创建axios实例
  const instance1 = axios.create({
    baseURL:'http://www.blogry.cn',
    timeout:5000
  })
  //发送并返回结果
  instance1({

  })
}
