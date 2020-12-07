class PostsController < ApplicationController

  def index  # indexアクションを定義した
    @posts = Post.all.order(id: "DESC") # 全てのレコードを@postに代入,降順
  end

  # def new削除
  # end削除

  def create
    Post.create(content: params[:content])
    redirect_to acton: :index
  end
end
