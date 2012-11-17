class UserMailer < ActionMailer::Base
  default from: "pcportfolio88@gmail.com"

  def send_email(user_info)
  	@name = user_info[:name]
    @email = user_info[:email]
    @description = user_info[:description]
    mail(:to => "pcportfolio88@gmail.com", :subject => "Portfolio Notification")
  end

end
