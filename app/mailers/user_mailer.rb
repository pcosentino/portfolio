class UserMailer < ActionMailer::Base
  default from: "frank.bruno88@gmail.com"

  def send_email(user_info)
  	@name = user_info[:name]
    @email = user_info[:email]
    @description = user_info[:description]
    mail(:to => "frank.bruno88@gmail.com", :subject => "Welcome to My Awesome Site")
  end

end
