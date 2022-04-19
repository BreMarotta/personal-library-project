class User < ApplicationRecord
    has_secure_password

    has_many :books, dependent: :destroy

    validates :username, :password, :password_confirmation,  presence: true
    validates :username, uniqueness: true
end
