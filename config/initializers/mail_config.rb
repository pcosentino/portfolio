ActionMailer::Base.smtp_settings = {
	:address              => "smtp.gmail.com",
	:port                 => 587,
	:domain               => "gmail.com",
	:user_name            => 'frank.bruno88@gmail.com',
	:password             => 'greenlight',
	:authentication       => 'plain',
	:enable_starttls_auto => true  }