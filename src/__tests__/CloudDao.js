// import FirebaseDao,{post} from '../FirebaseDao'
import firebase from 'firebase'
import FirebaseDao from '../FirebaseDao'
import config from '../config'
import Article from './Article';
var article1 = Article();
var dao = new FirebaseDao(config);
var keys=[];
var emailreg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

let user1 = {
    uuid :"uuid",
    email : "keen2@exam.com",
    displayName : "keen2",
    photoURL : "http://멀리.com"
}
it('Object assign', function(){
    var article2 = Object.assign({},article1);
    article2.user = "Genji";
    article2.content = "다음";
    article2.cardInfo.url = "http://www.daum.net";
    //article1의 값이 잘 전달되었는지 확인.
    expect(article1.cardInfo.imgWidth).toEqual(article2.cardInfo.imgWidth);
})
// describe('list and add user', ()=>{
//   it('add user if user exists, add user if user does not exist',()=>{
//     return dao.getUserKeyFromEmail(user1.email).then((key,user)=>{
//       if(user && user.email)
//         expect(user.email).stringMatching(emailreg);
//     }).catch(()=>{
//       dao.addUser(user1);
//     });
//   });
// });
describe('check group exists',()=>{
    let group = {
        name : '파괴왕',
        owner : "keen@exam.com",
        logoUrl : "https://www.facebook.com/photo.php?fbid=1042140589177284&set=gm.1685005005106300&type=3"
    };
    it('if group exists', ()=>{
        dao.checkGroupExists(group.name).then(function(){
            console.log("group exist");
        });
    });
    it('if group does not exists',()=>{
        dao.checkGroupExists(group.name).catch(function(){
            dao.addGroup(user1,group);
        });
    })
})

// it('list article', ()=>{
//   dao.list(25,(articles)=>{
//     articles.forEach((article)=>{
//       keys.push(article.key);
//       var article_v = article.val();
//       expect(article_v.user).toEqual("Genji");
//     })
//   });
// })
// var key;
// it('upload article and edit',async ()=>{
//   key = dao.newKey();
//   const promise1 = await dao.update( key, article1 );
//   return promise1;
// });
// it('find and delete',async ()=>{
//   const article = await dao.getArticle(key);
//   expect(article.key).toEqual(key);
//   if(article.key===key){
//     dao.remove(key);
//   }
// });

/* 동기화 문제 때문인지 제대로 동작하지 않는다.
it('remove all ', function(){
  for(let i=0;i<keys.length;i++){
    dao.remove(keys[i]);
  }
})
*/











// import FirebaseDao from '../FirebaseDao';
// import config from '../config';
// const dao = new FirebaseDao(config);
// var keys=[];
//
// var article = {
//     user : "Genji",
//     content : "겐지가 함께한다.",
//     urls:[{
//         url : "https://namu.wiki/w/%EA%B2%90%EC%A7%80(%EC%98%A4%EB%B2%84%EC%9B%8C%EC%B9%98)",
//         title:"겐지(오버워치)",
//         description : "블리자드 엔터테인먼트 사의 FPS 게임 오버워치의 영웅.기계가 되어버린 몸을 받아들여 내면의 평화를 찾은 강력한 사이보그 닌자.",
//         imageUrl : "https://image-proxy.namuwikiusercontent.com/r/https%3A%2F%2Fd1u1mce87gyfbn.cloudfront.net%2Fmedia%2Fartwork%2Fgenji-concept.jpg",
//         imgWidth: 640,
//         imgHeight : 480,
//         thumbnailUrl : "https://image-proxy.namuwikiusercontent.com/r/http%3A%2F%2Fi66.tinypic.com%2F10mpje9.jpg" ,
//         thumbnailWidth : 80,
//         thumbnailHeight :80
//     }]
// };
//
// // it('upload article', function() {
// //     let inserted = dao.insert(article);
// //     dao.getArticle(inserted.key).on('value', (snapshot) => {
// //         expect(snapshot.key).toEqual(inserted.key);
// //     });
// //     return inserted;
// // });
//
// it('list article', function() {
//    dao.list(25).once('value', (dataSnapshots)=> {
//        dataSnapshots.forEach((dataSnapshot) => {
//           keys.push(dataSnapshot.key);
//           var article = dataSnapshot.val();
//           expect(article.user).toEqual('Genji');
//        });
//    })
// });