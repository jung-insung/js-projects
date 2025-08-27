export default class Article {
  title; // 제목
  content; // 내용
  writer; // 작성자
  likeCount; //좋아요 수

  constructor() {}
  like() {
    this.like += 1;
  }
}
