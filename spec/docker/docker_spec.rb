require 'spec_helper'

if ENV['CIRCLECI']
  class Docker::Container
    def remove(options={}); end
    alias_method :delete, :remove
  end
end

describe 'nginx' do
  describe package('nginx') do
    it { should be_installed }
  end
end
