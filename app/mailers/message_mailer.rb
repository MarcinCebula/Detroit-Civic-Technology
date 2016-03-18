class MessageMailer < ActionMailer::Base
  def send_message(message_id)
    @message = Message.find(message_id)
    mail(to: @message.email,
         reply_to: @message.email.presence,
         subject: "Client Inquery - from: #{@message.email}",
         from: Settings.first.organization_name.to_s + " Website" )
  end
end
