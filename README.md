# An Online Personal Libray

## The Back Story

For each project, I try to come up with a product that I would use in my daily life. Outside of learning to code, one of my main hobbies is reading. Therefore, I have a rather extensive library (both physical and digital). I thought it would be interesting to create an online personal library where a user could catalog their books. 

### Features
The user can:
* Signup, Login, and Logout. Each user's data is password protected using bcrypt.

#### User Library:
* See an index of all books in the their library.
* Use the search bar to filter the library by author or title.
* Add a new book to their library. (This will be reflected on the library page and the addition will persist to the backend).

#### Each Book's Showpage:
* View a showpage for each book. This page will show all relevent details for the book.
* Update book details. (These updates will display on the frontend and persist to the backend).
* Add/delete quotes.
* Delete books from the library.

#### Genres:
* Can use genre links in the navigation bar to view a filtered library of their books. This index will show only books in that genre. These links are only generated for genres in which the user has books via the many-to-many relationship in the backend.
* Can use a dropdown menu of all genres listed in the backend when adding a new book.
* Can add additional genres to the backend. These additional genres can be utilized by all users.

## Using this Repository and working in Development Mode

## Getting Started
First, fork and clone this repository into a local directory. Once you navigate into the correct file, run:

### `bundle install`
to install the required gems

### `rails s`
will run the server on port http://localhost:3000

### `npm start --prefix client`
will start the frontend on port http://localhost:4000


## Additional Information:

This project has been deployed via [heroku](https://new-personal-library.herokuapp.com/)

* Please check out the [YouTube](https://youtu.be/lXMERDRuCEE) walk through video to see a highlight of all the SPA features. 

* Also check out my [blog](https://medium.com/@bremarotta/project-4-a-personal-library-ca03dfe9a5c0) about this project. 




##
#### License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.