function memo() {
  const submit = document.getElementById("submit");
  submit.addEventListener("click", (e) => { //クリックしたら下記の動作をイベント発火
    const formData = new FormData(document.getElementById("form"));//FormDataとは、フォームで入力された値を取得できる
    const XHR = new XMLHttpRequest(); //XHRをXMLHttpとして作成
    XHR.open("POST", "/posts", true); //openメソッドを使ってXMLHttpを初期化する
    XHR.responseType = "json"; //XHRのレスポンスをjsonとして返却
    XHR.send(formData); //メモ投稿のフォームに入力された情報を送信
    XHR.onload = () => {
      const item = XHR.response.post;//レスポンスとして返却されたメモのレコードデータを取得
      const list = document.getElementById("list");//HTMLを描画する場所を指定 描画する親要素のlistの要素を取得
      const formText = document.getElementById("content");//formTextを取得する理由は、「メモの入力フォーム」をリセットするため
      //メモとして描画する部分のHTML
      const HTML = 
        `<div class="post" data-id=${item.id}>
          <div class="post-date">
            投稿日時：${item.created_at}
          </div>
          <div class="post-content">
          ${item.content}
          </div>
        </div>`;
      //画面に新しいHTML要素を追加する場合によく使うメソッド insertAdjacentHTML listの要素直後(afterend)に挿入
      list.insertAdjacentHTML("afterend", HTML);
      //メモの入力フォームに入力されたままの文字をリセット　正確には空文字に上書きさせている。
      formText.value = "";

      //200以外のHTTPステータスが返却された場合の処理
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
      } else {
        return null;
      }
    };
    //失敗した場合にアラートを表示
    XHR.onerror = function () {
      alert("Request failed");
    };
    //"preventDefault"は実行したイベントがキャンセル可能である場合、イベントをキャンセルするためのメソッド
    e.preventDefault();
  })
}
window.addEventListener("load", memo);