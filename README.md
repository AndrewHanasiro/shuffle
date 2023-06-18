# Shuffle

A project for portfolio purpose. Build with [Next.js](https://nextjs.org/).

## Getting Started

### Run

```bash

# Local
npm ci
npm run dev 

# Docker
docker build . -t shuffle
docker run -p 3000:3000 shuffle

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## The Project

![screenshot of app](/docs/screenshot.png "Screenshot")

This project is a shuffle simulation, therefore it does contains 2 types of shuffle:

- Order: create a ordered deck starting with A to K and following the suits Spade, Hearts, Club and Diamond
- Random: use the Fisher–Yates shuffle algorithm
