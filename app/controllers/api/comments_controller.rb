class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      @post = @comment.post
      render "api/posts/show"
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find_by(id: params[:id])
    if @comment.destroy
      @post = @comment.post
      render "api/posts/show"
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:user_id, :post_id, :body)
  end
end
