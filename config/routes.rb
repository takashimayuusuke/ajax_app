Rails.application.routes.draw do
  root to: 'posts#index'
  # get "posts", to: "posts#index"より簡単にトップページへアクセスするためにルートパスに変更
  # get "posts/new", to: "posts#new"投稿完了しましたは使わないため削除
  post "posts", to: "posts#create"
  # メモのidを取得できるようにするためのルーティング設定(queryパラメーター)
  # get 'posts', to: 'posts#checked'
  # メモのidを取得できるようにするためのルーティング設定(pathパラメーター)
  get 'posts/:id', to: 'posts#checked'
end
