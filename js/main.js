// main.js
$(function(){
    /* 갤러리 기능
      1.썸네일 이미지 클릭하면 이미지 큰화면에서 보기
      힌트:클릭시 썸네일 이미지 주소 -> 큰이미지 주소
    */
   $('.galleryList a').click(function(){
       /* 버튼 이미지의 주소값 */
       var imgSrc = $(this).find('img').attr('src')
       //읽기
    //    console.log(imgSrc);
       //메인이미지에 imgSrc 쓰기
       $('#gallery figure img').attr('src', imgSrc);

       /* 기본 이벤트 해제 */
       return false;
   });


});