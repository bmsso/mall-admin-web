import {apis} from '@/api/api.js'
let demoList = [{
  id: 1,
  name: 'zs',
  age: '23',
  job: '前端工程师'
},{
  id: 2,
  name: 'ww',
  age: '24',
  job: '后端工程师'
}]
export default {
  url:  option => {
    alert('mock生效了');
    return {
      status: 200,
      message: 'false',
      data: demoList
    };
  }
}
