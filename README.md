<div align="center">
  <h2 align="center">Anikaze</h3>

  <p align="center">
    An open-source Anime streaming site built with Nextjs 14
  </p>
</div>


# About the Project

Enjoy ad-free streaming and seamless progress tracking with AniList integration, powered by Consumet API and Anify. Built with Next.js 14, Nextui, MongoDB, and Redis, our platform offers a smooth experience. Look out for hidden features - every clickable item may hold a different surprise.


## Features

- No ads
- Fast page load
- PWA supported
- Responsive on all devices
- Multi provider support
- Recommendations
- Player Features
  - Autoplay next episode
  - Skip op/ed button
  - Autoplay Video


<!-- ROADMAP -->
## Roadmap

- [X] Add Changelog
- [ ] Download episodes
- [ ] Add Comment section from Disqus
- [ ] Create separate page for anilist users
    - [ ] To view their progress
    - [ ] Check all their details imported from anilist
- [ ] Add Scene Search in catalog page
- [ ] Add Anilist episode tracking
- [ ] Complete Watch Page
- [ ] Add Profile page.
- [ ] Add Manga Reading Support
    - [ ] Comick
    - [ ] Mangadex
    - [ ] And some more


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

```
## Redis
# If you don't want to use redis leave it empty or comment it.
REDIS_URL="get redis from upstash, litegix or aiven. They offer free tier."

## AniList
GRAPHQL_ENDPOINT=https://graphql.anilist.co
ANILIST_CLIENT_ID="get your id from here https://anilist.co/settings/developer"
ANILIST_CLIENT_SECRET="get your secret from here https://anilist.co/settings/developer"

## NextAuth Details
NEXTAUTH_SECRET='run this command in your terminal (openssl rand -base64 32)'
NEXTAUTH_URL="for development use http://localhost:3000/ and for production use your domain url"

## NextJS
NEXT_PUBLIC_PROXY_URI="Use a proxy if u wish, not mandatory"
CONSUMET_URI="host your own API from this repo https://github.com/consumet/api.consumet.org. Don't put / at the end of the url."

## MongoDB
MONGODB_URI="Your Mongodb connection String"
ANALYZE=true

## Deployment URLs
NEXT_PUBLIC_DEV_URL=http://localhost:3000  # This is the URL for your current local development environment.
NEXT_PUBLIC_PRODUCTION_URL="Your deployement URL. Don't put / at the end of the url"

## In AniList Developer console add redirect url :
# https://{your-domain}/api/auth/callback/AniListProvider

```


## Run Locally

Clone the project
```bash
  git clone https://github.com/septa-git/.git
```

Go to the project directory
```bash
  cd anikaze
```

Install dependencies
```bash
  npm install
```

Start the server

```bash
  npm run dev
```

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- CONTACT -->
## Contact

Anikaze Link: [Anikaze](https://anikaze.vercel.app/)
