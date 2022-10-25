import website from '../asset/icons/website.svg';
import facebook from '../asset/icons/facebook.svg';
import instagram from '../asset/icons/instagram.svg';
import youtube from '../asset/icons/youtube.svg';
import naverBlog from '../asset/icons/naverBlog.svg';
import kakao from '../asset/icons/kakao.svg';
import twitter from '../asset/icons/twitter.svg';

export const iconRouter = (data) => {
  if(data === 'homepage'){
    return website
  } else if(data === 'facebook') {
    return facebook
  } else if(data === 'instagram') {
    return instagram
  } else if(data === 'youtube') {
    return youtube
  } else if(data === 'naver') {
    return naverBlog
  } else if(data === 'kakaotalk') {
    return kakao
  } else if(data === 'twitter') {
    return twitter
  }
}