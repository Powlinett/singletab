class BlacklistedSitesController < ApplicationController
  def index
    blacklisted_json = []
    @blacklisted_sites = current_user.blacklisted_sites
    @blacklisted_sites.each do |site|
      blacklisted_json << { domain_name: site.domain_name.to_s }
    end
    render json: blacklisted_json
  end

  def new
    @blacklisted_site = BlacklistedSite.new
  end

  def create
    @blacklisted_site = BlacklistedSite.new(
      domain_name: params[:blacklisted_site][:domain_name],
      user_id: current_user.id
    )
    @blacklisted_site.save!

    redirect_to new_blacklisted_site_path
  end

  def destroy
    @blacklisted_site = BlacklistedSite.find(params[:id])
    @blacklisted_site.destroy
    redirect_to new_blacklisted_site_path
  end
end
