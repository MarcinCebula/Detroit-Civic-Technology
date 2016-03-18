class NewsletterMailer < BaseMandrillMailer
  helper :application # gives access to all helpers defined within `application_helper`.
  # include Sidekiq::Mailer
  layout 'mailer_v1'

  # sidekiq_options retry: false
  default from: ''

  def pitch_v1
    # attachment example
    # attachments.inline['signupHeader.png'] = File.read("#{Rails.root}/app/assets/images/signupHeader.png")

    mail({
           to: 'marcin.k.cebula@gmail.com',
           subject: "... Thanks"
         })
  end

  def pitch_v2
    # attachment example
    # attachments.inline['signupHeader.png'] = File.read("#{Rails.root}/app/assets/images/signupHeader.png")

    mail({
           to: 'marcin.k.cebula@gmail.com',
           subject: "... Thanks"
         })
  end
end
