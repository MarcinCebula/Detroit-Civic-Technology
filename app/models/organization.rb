class Organization
  include Mongoid::Document

  field :email, type: String
  field :organization_name, type: String
  field :number, type: String
  field :address, type: String
  field :city, type: String
  field :state, type: String
  field :original_contact, type: String

  field :email_sent, type: String
  field :email_last_sent, type: String
  field :email_sent_count, type: String
  field :email_opened, type: String
  field :email_in_spam, type: String
  field :email_clicked, type: String

  field :contact_name, type: String
  field :contact_email, type: String
  field :contact_number, type: String

  field :pre_suscribed, type: String
  field :subscribed, type: String


  def self.with_emails
    Organization.where(:email.ne => nil)
  end
end
