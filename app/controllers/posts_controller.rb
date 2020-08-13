class PostsController < ApplicationController
  def index
    @posts = Post.all  # すべてのレコードを@postsに代入
  end

  def new
  end

  def create
    Post.create(content: params[:content])
  end
end

i = i + 1

i = 0 + 1

i = 1 + 1

i = 2 + 1

colors = ["あか", "あお", "きいろ"]
element_count = colors.length

0
1
2








