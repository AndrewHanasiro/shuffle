# Shuffle

A project for portfolio purpose. Build with [Next.js](https://nextjs.org/).

## Getting Started

Install one of them

- [Node](https://nodejs.org/en) LTS version
- [Docker](https://docs.docker.com/engine/install/)

### Run

```bash

# Local Dev mode
npm ci # install dependencies
npm run dev # for development mode

# Local Prod mode
npm ci # install dependencies
npm run build # transpile TS to JS and other things
npm start # for production mode

# Docker
docker build . -t shuffle
docker run -p 3000:3000 shuffle

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## The Project

![screenshot of app](/docs/screenshot-back.png "Back of Card")
![screenshot of app](/docs/screenshot-squash.png "Squash view")
![screenshot of app](/docs/screenshot-extended.png "Extended view")

This project is a shuffle simulation, therefore it does contains 2 types of shuffle:

- Order: create a ordered deck starting with A to K and following the suits Spade, Hearts, Club and Diamond
- Random: use the Fisher–Yates shuffle algorithm
