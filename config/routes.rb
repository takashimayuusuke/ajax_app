Rails.application.routes.draw do
  root to: 'posts#index'
  # get "posts", to: "posts#index"より簡単にトップページへアクセスするためにルートパスに変更
  # get "posts/new", to: "posts#new"投稿完了しましたは使わないため削除
  post "posts", to: "posts#create"
end
