

require "sinatra"
require "json"

set :environment, :production
enable :sessions

PRODUCTION = true

set :public_folder, File.dirname(__FILE__) + '/../www'

get "/" do
  redirect "/login" unless session[:user]
  data = []
  html = "<h1>Directories (user #{session[:user]}) | <a href='/login'>Log out</a></h1>"
  d = Dir.new(File.dirname(__FILE__) + "/../data/dirs")
  d.entries.each do |e|
    data.push(e) if (e.split(".").length == 1)
  end
  erb :dirs, :locals => {:dirs => data} 
end

get "/dir/:name" do
  redirect "/login" unless session[:user]
  name = params[:name]
  halt 404 unless (name.split(".").length == 1)

  html = "<a href='/'>BACK</a><br><h1>Directory #{name}</h1>"
  d = Dir.new(File.dirname(__FILE__) + "/../data/dirs/#{name}")
  files = []
  d.entries.each do |e|
    if ['jpg', 'jpeg', 'png'].include?(e.split(".").last)
      html += "<a href='/anotate/#{name}/#{e}'>#{e}</a><br>"
      save_path = File.dirname(__FILE__) + "/../data/dirs/#{params[:name]}/#{session[:user]}|#{e}.json"
      saved = nil
      if File.exists?(save_path)
        saved = File.new(save_path).ctime
      end
      files.push([e, saved])
    end
  end
  erb :dir, :locals => {:dir => params[:name], :files => files}
end

get "/anotate/:dir/:file" do
  redirect "/login" unless session[:user]
  if PRODUCTION
    path = "index-prod.erb"
  else
    path = "index-devel.erb"
  end
  erb File.read(File.dirname(__FILE__) + "/../www/#{path}") , :locals => {:username => session[:user], :dir => params[:dir], :file => params[:file] }, :layout => false

end

get "/login" do
  session[:user] = nil
  err = "Wrong username or password" if params[:error]
  erb :login, :locals => {:err => err} 
end

post '/login' do
  username = Help.clean(params[:username])
  path = File.dirname(__FILE__) + "/../data/users/#{username}.passwd"
  puts path
  if File.exists?(path)
    passwd = File.readlines(path).join("").chomp
    if passwd == params[:password]
      session[:user] = params[:username]
      redirect "/"
    end
  end
  redirect "/login?error=true"
end

get "/img/:dir/:file" do
  halt 404 unless session[:user]
  user = Help.clean(session[:user])
  dir = Help.clean(params[:dir])
  file = Help.clean(params[:file])

  halt 404 unless ['jpg', 'jpeg', 'png'].include?(file.split(".").last)
  send_file File.dirname(__FILE__) + "/../data/dirs/#{dir}/#{file}"
end

get "/api_get/:dir/:file" do
  halt 404 unless session[:user]
  user = Help.clean(session[:user])
  dir = Help.clean(params[:dir])
  file = Help.clean(params[:file])

  halt 404 unless ['jpg', 'jpeg', 'png'].include?(file.split(".").last)
  img_path = File.dirname(__FILE__) + "/../data/dirs/#{dir}/#{file}"
  halt 404 unless File.exists?(img_path)
  save_path = File.dirname(__FILE__) + "/../data/dirs/#{dir}/#{user}|#{file}.json"

  if File.exists?(save_path)
    data = File.read(save_path)
    data = JSON.parse(data)
    data["prevAndNext"] = Help.get_next_and_prev(dir, file)
    return data.to_json
  else
    data = {
      :dir => dir,
      :file => file,
      :user => user,
      :createdAt => Time.now.to_i,
      :savedAt => [],
      :noText => false,
      :dontUnderstandLanguage => false,
      :notes => "",
      :anotations => [],
      :prevAndNext => Help.get_next_and_prev(dir, file)
    }
    #File.open(save_path,'w') do |file|
    #  file.puts data.to_json
    #end
    return data.to_json
  end
end

post "/api_save/:dir/:file" do
  halt 404 unless session[:user]
  user = Help.clean(session[:user])
  dir = Help.clean(params[:dir])
  file = Help.clean(params[:file])

  halt 404 unless ['jpg', 'jpeg', 'png'].include?(file.split(".").last)
  img_path = File.dirname(__FILE__) + "/../data/dirs/#{dir}/#{file}"
  halt 404 unless File.exists?(img_path)
  save_path = File.dirname(__FILE__) + "/../data/dirs/#{dir}/#{user}|#{file}.json"

  doc_log_path = File.dirname(__FILE__) + "/../data/doclog/#{dir}|#{file}|#{user}|#{Time.now.to_i}.json"

  save_text = request.body.read

  save_text = JSON.parse(save_text)
  save_text["savedAt"].push(Time.now.to_i)
  save_text = save_text.to_json

  File.open(save_path,'w') do |file|
    file.puts save_text
  end

  File.open(doc_log_path,'w') do |file|
    file.puts save_text
  end

  "saved"
end

get "/help" do
  erb :help
end

not_found do
  erb :not_found
end

class Help

  def self.clean text
    text.split("/").join("")
  end

  def self.list_files(dir_name)
    dir_name = self.clean dir_name
    d = Dir.new(File.dirname(__FILE__) + "/../data/dirs/#{dir_name}")
    ret = []
    d.entries.each do |e|
      if ['jpg', 'jpeg', 'png'].include?(e.split(".").last)
        ret.push(e)
      end
    end
    return ret
  end

  def self.get_next_and_prev(dir, file)
    file = self.clean file
    entries = self.list_files(dir)
    position = entries.index(file)
    prev_pos = position - 1
    next_pos = position + 1
    prev_pos = entries.length - 1 if prev_pos < 0
    next_pos = 0 if next_pos > entries.length - 1
    return [entries[prev_pos], entries[next_pos]]
  end

end


