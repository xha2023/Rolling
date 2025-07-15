import * as recipientsApi from './recipients.js';
import * as messagesApi from './messages.js';
import * as imagesApi from './images.js';

window.recipients = recipientsApi;
window.messages = messagesApi;
window.images = imagesApi;

console.log('✅ API 테스트 함수가 window 객체에 준비되었습니다.');
