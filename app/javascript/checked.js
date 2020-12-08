// DOMの取得からエンドポイントへのリクエストなどは、すべてこのcheck関数へ記述
// checkという名前で関数を定義
function check() {
  // querySelectorAllメソッドで、postをクラス名にもつ要素を取得
  // postというクラス名を持つ要素はメモの数だけ存在
  const posts = document.querySelectorAll(".post");
  // forEachを記述して、それぞれの要素への処理を記述する場所を用意
  posts.forEach(function (post) {
    if (post.getAttribute("data-load") != null) {
      return null;
    }
    post.setAttribute("data-load", "true");
    // addEventListenerメソッドを使用し、引数にclickの指定
    post.addEventListener("click", () => {
      // ここにクリックしたときに行う『何らかの処理』を記述していく
      // ルーティングで設定したget 'posts/:id', to: 'posts#checked'により生成された/posts/:idというエンドポイントへのリクエスト処理を記述
      const postId = post.getAttribute("data-id");
      // オブジェクトを生成する必要があるので
      // const XHR = new XMLHttpRequest();のように記述
      const XHR = new XMLHttpRequest();
      // openメソッドを使用してリクエストの詳細を指定
      XHR.open("GET", `/posts/${postId}`, true);
      // responseTypeメソッドを使用して、レスポンスの形式を指定
      XHR.responseType = "json";
      // sendメソッドを記述することで、はじめてリクエストが行える
      XHR.send();
      XHR.onload = () => {
        if (XHR.status != 200) {
          alert(`Error ${XHR.status}: ${XHR.statusText}`);
          return null;
        }
        const item = XHR.response.post;
        if (item.checked === true) {
          post.setAttribute("data-check", "true");
        } else if (item.checked === false) {
          post.removeAttribute("data-check");
        }
      };
    });
  });
}
setInterval(check, 1000);
// setIntervalを使用し、check関数が1秒に1度実行されるように記述を変更
// window.addEventListener("load", check);