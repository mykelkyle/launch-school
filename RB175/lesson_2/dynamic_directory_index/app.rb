require "sinatra"
require "sinatra/reloader"
require "tilt/erubis"

get "/" do
  @public_files = Dir.glob("public/*").map { |f| File.basename(f) }
  @public_files.reverse! if params[:sort] == "desc"
  erb :home
end
