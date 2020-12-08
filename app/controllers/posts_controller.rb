class PostsController < ApplicationController
  def index  # indexアクションを定義した
    @posts = Post.all.order(id: "DESC") # 全てのレコードを@postに代入,降順
  end

  # def new削除
  # end削除

  def create
    # メモ作成時に未読の情報を保存するように変更
    # Post.create(content: params[:content])
    post = Post.create(content: params[:content], checked: false)
    # レスポンスをJSONに変更
    # redirect_to action: :index
    render json: { post: post }
  end
  def checked
    post = Post.find(params[:id])
    if post.checked
      post.update(checked: false)
    else
      post.update(checked: true)
    end
    item = Post.find(params[:id])
    render json: { post: item }
  end

end