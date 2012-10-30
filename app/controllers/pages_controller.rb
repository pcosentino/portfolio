class PagesController < ApplicationController

	def index
	end



	def send_email
		first_name = params[:user][:first_name]
		last_name = params[:user][:last_name]
		email_address = params[:user][:email_address]
		notes = params[:user][:notes]
		raise (first_name + " " + last_name + " " + email_address + " " + notes).inspect
		#UserMailer.send_email(:description => ..., :first_name => ...)
	end

end
