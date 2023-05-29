# Airbnb Clone

This is a clone of Airbnb website built with Next.js 13

##### The project is built using the following technologies:

Next.js 13, Tailwind, Prisma, MongoDB, NextAuth and Mapbox

To see the project in action, visit the following link:

[![vercel](https://img.shields.io/badge/vercel-230?style=for-the-badge&logo=vercel&logoColor=white)](https://airbnb-clone-ahmetenesdur.vercel.app/)

<!-- GETTING STARTED -->

## Getting Started

To get this application up and and running on your local machine follow these simple steps.

### Prerequisites

You need to have Node.js, npm or yarn and git installed on your machine.

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/ahmetenesdur/airbnb-clone.git
    ```
2.  Install Packages

    ```sh
    npm install
    ```

    or

    ```sh
    yarn install
    ```

3.  Create an `.env` file looking like this

    ```sh
    DATABASE_URL=
    NEXTAUTH_SECRET=
    GITHUB_ID=
    GITHUB_SECRET=
    GOOGLE_CLIENT_ID=
    GOOGLE_CLIENT_SECRET=
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
    ```

4.  Prisma generate

    ```sh
    npx prisma generate
    ```

    or

    ```sh
    yarn prisma generate
    ```

5.  Setup Prisma

    ```sh
    npx prisma db push
    ```

    or

    ```sh
    yarn prisma db push
    ```

6.  Run the app

    ```sh
    npm run dev
    ```

    or

    ```sh
    yarn dev
    ```

7.  Open the app in your browser

         http://localhost:3000

    <!-- USAGE EXAMPLES -->

## Usage

1.  You can sign up with your email and password or with your Google account or github account.
2.  You can search for a location and see the available listings.
3.  You can filter the listings by number of guests, price range, number of bedrooms and number of rooms.
4.  You can click on a listing to see more details about it.
5.  You can book a listing by selecting the dates and clicking on the reserve button.
6.  You can see your bookings by clicking on the my reservations button.
7.  You can see your listings by clicking on the my properties button.
8.  You can create a listing by clicking on the airbnb my home button.
9.  You can see favorite listings by clicking on the heart icon.
10. You can see your trips by clicking on the trips button.

<!-- SCREENSHOTS -->

## Screenshots

![dApp Screenshot1](https://i.imgur.com/KMqOJVP.png)
![dApp Screenshot2](https://i.imgur.com/BXa332b.png)
![dApp Screenshot3](https://i.imgur.com/CCjx9li.png)
![dApp Screenshot4](https://i.imgur.com/kktTy6F.png)
![dApp Screenshot5](https://i.imgur.com/GbvwXiz.png)

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

[![linkedin](https://img.shields.io/badge/linkedin-230?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ahmetenesdur/) [![github](https://img.shields.io/badge/github-230?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ahmetenesdur)
