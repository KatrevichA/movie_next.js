This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## By Project Structure

Концепція загального вигляду (вигляд не повинен бути такий же! Ви не верстальники.
ЦЕ КОНЦЕПЦІЯ розміщення елементів. Якщо зробите так само, то це буде овер круто):
[https://dribbble.com/shots/6461891-Media-store-idea-Movies]

1) Main actions:
- getMovies
2) - getGenres. (Accordingly, when you click on the genre - films of this genre).
3) Components:
- Header
- MoviesList (renders MoviesListCards)
- MoviesListCard (contain all movie information)
- PosterPreview (movie image)
- StarsRating
- MovieInfo (contains label, description, badges)
- GenreBadge
- UserInfo (just hardcoded small circle and name)
4) Containers:
- MoviesPage main:
5) Pagination.
6) The second (next) page with an extended description of the film (meaning routing).
   It should open if the user clicked on a card with a movie.
7) search for movies by title, or clean title. (Іee what exactly the API gives now, because it changes).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
