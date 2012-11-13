class PagesController < ApplicationController

	def index
	end



	def send_email
		user_name =  "#{params[:user][:first_name]} #{params[:user][:last_name]}"
		email_address = params[:user][:email_address]
		notes = params[:user][:notes]
		UserMailer.send_email({:name => user_name, :email => email_address, :description => notes}).deliver
		respond_to :js
	end

end