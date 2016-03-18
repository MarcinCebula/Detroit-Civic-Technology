class DataImportsController < ApplicationController
  def all
  end
  def petfinder_organizations
    xls = Roo::Spreadsheet.open(params['datafile']['q'].tempfile.path)
    xls.each_with_index do |row, index|
      next if index == 0
      params = petfinder_organization_to_params(row)
      organization = Organization.find_or_initialize_by(
                                                             {
                                                               organization_name: params[:organization_name],
                                                               city: params[:city],
                                                               state: params[:state],
                                                               original_contact: params[:original_contact]
                                                             }
                                                             )
      organization.update_attributes(params)
    end
  end


  private
  def petfinder_organization_to_params(row)
    # row = p_row.map { |f| f.value }

    result = {
      organization_name: row[0],
      city:  row[2].split(',')[0].to_s.strip,
      state: row[2].split(',')[1].to_s.strip,
      email: nil,
      number: nil,
      original_contact: row[3]
    }
    if row[3].to_s.include?("@")
      result[:email] = row[3]
    else
      result[:number] = row[3]
    end
    result
  end
end
