require "yaml"

require "sinatra"
require "sinatra/reloader"
require "tilt/erubis"

before do
  @user_data = YAML.load_file("users.yaml")
  @names = get_names(@user_data)
end

helpers do
  def get_names(hsh)
    names = []
    hsh.each do |k, v|
      names << k.to_s.capitalize
    end
    names
  end

  def get_email(hsh, name)
    hsh[name.to_sym][:email]
  end

  def get_interests(hsh, name)
    interests = hsh[name.to_sym][:interests]
    interests.first.capitalize!
    interests.join(", ")
  end

  def count_interests(hsh)
    total_interests = []

    hsh.each do |person|
      total_interests << person[1][:interests]
    end
    total_interests.flatten.size
  end
end

get "/" do
  redirect "/users"
end

get "/users" do
  erb :users
end

get "/users/:name" do
  name = params[:name]
  @email = get_email(@user_data, name)
  @interests = get_interests(@user_data, name)

  erb :data
end
