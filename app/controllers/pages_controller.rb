class PagesController < ApplicationController

	def index
	end



	def send_email
		first_name = params[:user][:first_name]
		last_name = params[:user][:last_name]
		raise (first_name + " " + last_name).inspect
		#UserMailer.send_email(:description => ..., :first_name => ...)
	end

end
