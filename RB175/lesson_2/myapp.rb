# require 'rackup'

class MyApp
  def call(env)
    ['200', { "Content-Type" => "text/html" }, [env.to_s]]
  end
end

class FriendlyGreeting
  def initialize(app)
    @app = app
  end

  def call(env)
    body = @app.call(env).last

    [
      '200',
      { "Content-Type" => "text/plain" },
      body.prepend("A warm welcome to you!\n")
    ]
  end
end

class Wave
  def initialize(app)
    @app = app
  end

  def call(env)
    body = @app.call(env).last

    [
      '200',
      { "Content-Type" => "text/plain" },
      body.prepend("Wave from afar!\n")
    ]
  end
end

Rackup::Handler::WEBrick.run Wave.new(FriendlyGreeting.new(MyApp.new))
