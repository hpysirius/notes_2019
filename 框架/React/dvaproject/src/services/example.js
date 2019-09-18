import request from '../utils/request';

export function query() {
  return request('/api/users');
}
export const getFile = () => request('https://filewc.geeker.com.cn/jpjs/upload/voice/20190918/bfee82ba36680c50b8ae5d3691dd2305.mp3');