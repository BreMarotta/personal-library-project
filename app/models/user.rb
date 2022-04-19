class User < ApplicationRecord
    has_secure_password

    has_many :books, dependent: :destroy
    has_many :additional_quotes, through: :books

    validates :username, :password, :password_confirmation,  presence: true
    validates :username, uniqueness: true
end
