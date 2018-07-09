import FirebaseDao from '../FirebaseDao';
import config from '../config';
const dao = new FirebaseDao(config);
var keys=[];

var article = {
    user : "Genji",
    content : "겐지가 함께한다.",
    urls:[{
        url : "https://namu.wiki/w/%EA%B2%90%EC%A7%80(%EC%98%A4%EB%B2%84%EC%9B%8C%EC%B9%98)",
        title:"겐지(오버워치)",
        description : "블리자드 엔터테인먼트 사의 FPS 게임 오버워치의 영웅.기계가 되어버린 몸을 받아들여 내면의 평화를 찾은 강력한 사이보그 닌자.",
        imageUrl : "https://image-proxy.namuwikiusercontent.com/r/https%3A%2F%2Fd1u1mce87gyfbn.cloudfront.net%2Fmedia%2Fartwork%2Fgenji-concept.jpg",
        imgWidth: 640,
        imgHeight : 480,
        thumbnailUrl : "https://image-proxy.namuwikiusercontent.com/r/http%3A%2F%2Fi66.tinypic.com%2F10mpje9.jpg" ,
        thumbnailWidth : 80,
        thumbnailHeight :80
    }]
};

it('upload article', function() {
    let inserted = dao.insert(article);
    dao.getArticle(inserted.key).on('value', (snapshot) => {
        expect(snapshot.key).toEqual(inserted.key);
    });
    return inserted;
});

it('list article', function() {
   dao.list(25).once('value', (dataSnapshots)=> {
       dataSnapshots.forEach((dataSnapshot) => {
          keys.push(dataSnapshot.key);
          var article = dataSnapshot.val();
          expect(article.user).toEqual('Genji');
       });
   })
});