ActionMailer::Base.smtp_settings = {
	:address              => "smtp.gmail.com",
	:port                 => 587,
	:domain               => "gmail.com",
	:user_name            => 'pcportfolio88@gmail.com',
	:password             => 'Gr33nlights',
	:authentication       => 'plain',
	:enable_starttls_auto => true  }