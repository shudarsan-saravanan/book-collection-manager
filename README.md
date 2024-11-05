# Book Collection Manager

## Overview

Book Collection Manager is a web application that manages a collection of Books. It is implement using an Angular and C# WebAPI.

## Requirements

Please refer [here](<Case%20Study%20FS%20Developer%20(1).pdf>) for the requirements.

## Features

- User can store the details of the book. (Reactive Forms).
- Details of the book include Title, Author, and Genre. (Basic validation implementation)
- The list of books can be viewed by navigating to the concerned page. (Angular Routing)
- The list of books fetched from the backend are displayed in a table. (Table view)
- The application performs a create, read, and update operations with the help of backend implementation. (C# WebAPI and SQL)

## Pre-requisites

- Node
- Angular CLI
- VS Code and Visual Studio
- Installing dependencies for C# WebAPI
- SQL Server Management Studio (SSMS)
- SQL Server
- Configuration setup

## Setup and Installation

- Clone the repository: `git clone https://github.com/username/book-collection-manager.git`

### Backend

- Open the folder in Visual Studio and navigate to the project directory: `cd backend/book-collection-manager`

- Installing dependencies - open the NuGet Package Manager and install the below dependencies

  - Microsoft.EntityFrameworkCore
  - Microsoft.EntityFrameworkCore.Tools
  - Microsoft.EntityFrameworkCore.SqlServer

- Before you start the application, please follow these [steps](#configuration-setup)

- The swagger will open in the link `http://localhost:5287/swagger/index.html` which contains all the details of the [endpoints](#api-endpoints).

- The backend will be running on `http://localhost:5287/api/Books`

### Frontend

- Open the folder in VS Code and navigate to the project directory: `cd frontend/book-collection-manager`

- Install all the package and dependencies: `npm install`

- Start the development server: `ng serve` or `npm run start`

- Open `http://localhost:4200` on your browser

## Configuration Setup

I was not able to dynamically configure the environment variables for the database connection strings because of time constraints. A more optimised approach will be part of the future improvements. For time being, I kindly request to modify the below few changes in the code before starting the application.

- Navigate to the file `appsettings.json`

- Add to the existing structure: `"ConnectionStrings": {"sqlconnectionstring": "server=server_name;Database=BookCollectionList;Trusted_Connection=true;TrustServerCertificate=true"}`

- In the above line, we specifically need to modify the `server` key. The name can be found when you install the SSMS and establish a local DB connection.

- Once this is done, open the `Package Manager Console` from the `NuGet package manager` and run the below commands
  - add-migration
  - update-database

## API Endpoints:

- GET Request: `http://localhost:5287/api/Books`
- POST Request: `http://localhost:5287/api/Books`
- PUT Request: `http://localhost:5287/api/Books/{id}`

## Future improvements:

- Dynamically setup database connection
- Add unit tests to both backend and frontend
