# config valid only for current version of Capistrano
lock '3.4.0'

set :application, 'pawslove_landing_page'
set :repo_url, 'git@github.com:MarcinCebula/pawslove_landing_page.git'
set :scm, :git
set :branch, 'master'
set :format, :pretty
set :log_level, :debug
set :pty, true

set :rvm_ruby_version, 'ruby-2.2.3'

set :linked_dirs, %w{bin log tmp/pids tmp/cache tmp/sockets vendor/bundle public/system}


set :puma_rackup, -> { File.join(current_path, 'config.ru') }
set :puma_state, "#{shared_path}/tmp/pids/puma.state"
set :puma_pid, "#{shared_path}/tmp/pids/puma.pid"
set :puma_bind, "unix://#{shared_path}/tmp/sockets/puma.sock"
set :puma_conf, "#{shared_path}/puma.rb"
set :puma_access_log, "#{shared_path}/log/puma_error.log"
set :puma_error_log, "#{shared_path}/log/puma_access.log"
set :puma_role, :app
set :puma_env, fetch(:rack_env, fetch(:rails_env, 'production'))
set :puma_threads, [0, 16]
set :puma_workers, 0
set :puma_init_active_record, true
set :puma_preload_app, true

# Default branch is :master
# ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp

# Default deploy_to directory is /var/www/my_app_name
# set :deploy_to, '/var/www/my_app_name'

# Default value for :scm is :git
# set :scm, :git

# Default value for :format is :pretty
# set :format, :pretty

# Default value for :log_level is :debug
# set :log_level, :debug

# Default value for :pty is false
# set :pty, true

# Default value for :linked_files is []
# set :linked_files, fetch(:linked_files, []).push('config/database.yml', 'config/secrets.yml')

# Default value for linked_dirs is []
# set :linked_dirs, fetch(:linked_dirs, []).push('log', 'tmp/pids', 'tmp/cache', 'tmp/sockets', 'vendor/bundle', 'public/system')

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

# Default value for keep_releases is 5
# set :keep_releases, 5

namespace :deploy do

  task :start do
    run "#{try_sudo} /opt/nginx/sbin/nginx"
  end
  task :stop do
    run "#{try_sudo} /opt/nginx/sbin/nginx -s stop"
  end
  task :restart do
    run "#{try_sudo} /opt/nginx/sbin/nginx -s stop"
    run "#{try_sudo} /opt/nginx/sbin/nginx"
  end




  after :restart, :clear_cache do
    on roles(:web), in: :groups, limit: 3, wait: 10 do
      run "#{try_sudo} /opt/nginx/sbin/nginx -s stop"
      run "#{try_sudo} /opt/nginx/sbin/nginx"

      # Here we can do anything such as:
      # within release_path do
      #   execute :rake, 'cache:clear'
      # end
    end
  end

end