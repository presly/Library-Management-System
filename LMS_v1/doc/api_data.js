define({ "api": [
  {
    "type": "post",
    "url": "/books",
    "title": "Add a book to the library",
    "version": "0.0.1",
    "name": "insert_book",
    "group": "Books",
    "description": "<p>add book to the library</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>book title</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>book Author.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "publication",
            "description": "<p>book title</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "releaseDate",
            "description": "<p>book Author.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shortDescription",
            "description": "<p>book shortDescription</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "largeDescription",
            "description": "<p>book largeDescription.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imageUrl",
            "description": "<p>book imageUrl</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>book category.</p> "
          }
        ]
      }
    },
    "filename": "Routes/ListBooks.js",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthorized",
            "description": "<p>Not Authorized.</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DatabaseFailure",
            "description": "<p>Error Querying Database</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response:",
          "content": "HTTP/1.1 401 Not Authorized\nmeta: {\n  \"code\": 2001,\n  \"errorMessage\": \"NotAuthorized\"\n}",
          "type": "json"
        },
        {
          "title": "Response:",
          "content": "HTTP/1.1 500 Internal Server Error\nmeta: {\n  \"code\": 5001,\n  \"errorMessage\": \"DatabaseFailure\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "Books",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Successful",
            "description": "<p>The request was processed successfully.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response:",
          "content": "HTTP/1.1 200 OK\nmeta: {\n  \"code\": 0,\n  \"errorMessage\": \"Successful\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/books",
    "title": "list all the books",
    "version": "0.0.1",
    "name": "listBooks",
    "group": "Books",
    "description": "<p>List all the books in the library</p> ",
    "filename": "Routes/ListBooks.js",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DatabaseFailure",
            "description": "<p>Error Querying Database</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response:",
          "content": "HTTP/1.1 500 Internal Server Error\nmeta: {\n  \"code\": 5001,\n  \"errorMessage\": \"DatabaseFailure\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "Books",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Successful",
            "description": "<p>The request was processed successfully.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response:",
          "content": "HTTP/1.1 200 OK\nmeta: {\n  \"code\": 0,\n  \"errorMessage\": \"Successful\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/login",
    "title": "login to the app",
    "version": "0.0.1",
    "name": "loginApp",
    "group": "Profile",
    "description": "<p>Login to the app and use all functionalities</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>login username.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>login password.</p> "
          }
        ]
      }
    },
    "filename": "Routes/login.js",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthorized",
            "description": "<p>Not Authorized.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response:",
          "content": "HTTP/1.1 401 Not Authorized\nmeta: {\n  \"code\": 2001,\n  \"errorMessage\": \"NotAuthorized\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "Profile",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Successful",
            "description": "<p>The request was processed successfully.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response:",
          "content": "HTTP/1.1 200 OK\nmeta: {\n  \"code\": 0,\n  \"errorMessage\": \"Successful\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/logout",
    "title": "register to the app",
    "version": "0.0.1",
    "name": "registerApp",
    "group": "Profile",
    "description": "<p>Register to the app and use all functionalities</p> ",
    "filename": "Routes/login.js",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DatabaseFailure",
            "description": "<p>Error Querying Database</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response:",
          "content": "HTTP/1.1 500 Internal Server Error\nmeta: {\n  \"code\": 5001,\n  \"errorMessage\": \"DatabaseFailure\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "Profile",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Successful",
            "description": "<p>The request was processed successfully.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response:",
          "content": "HTTP/1.1 200 OK\nmeta: {\n  \"code\": 0,\n  \"errorMessage\": \"Successful\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });