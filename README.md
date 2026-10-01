# ByteSpace

ByteSpace is a learning platform concept built with Next.js. Visitors can explore a small set of sample courses, browse by topic, search by course or creator, and open sign-in or registration pages. The landing page also introduces the platform and its creator features.

Course details and most page content are sample data, so the project is currently a front-end demo rather than a complete learning service.

## What you can do

- Browse the landing page and its course, category, creator, and testimonial sections.
- Open `/course` to find courses, search by name or topic, and filter by topic.
- Open a course card to start registration with that course attached to the URL.
- Try the sign-in and registration forms, which check required fields and email format in the browser.
- View the layout on mobile, tablet, and desktop screens.

## Tech used

- Next.js 15 with the App Router
- React 19 and TypeScript
- Tailwind CSS 4
- ESLint

## Run it on your computer

You need Node.js and npm installed. From the project folder, run:

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

To make a production build and run it locally:

```bash
npm run build
npm run start
```

To check the code with ESLint:

```bash
npm run lint
```

## Pages and routes

| Route | What it shows |
| --- | --- |
| `/` | Landing page with the hero, course browser, categories, platform information, creator call to action, testimonials, and footer |
| `/course` | Course search page with the course browser |
| `/login` | Sign-in form |
| `/register` | Registration form |
| Unknown routes | A custom not-found page |

The landing page search and category links point back to the course section on `/`. The course browser reads the `q` search parameter and the `topic` filter parameter. For example, `/course?q=figma` searches for “figma”; the topic chips update the selected topic in the URL.

## Project layout

The main folders and files are:

```text
project/
|-- public/                  Images and other files served as static assets
|-- src/
|   |-- app/                  App Router pages, shared layout, styles, and API routes
|   |-- components/           Page sections, forms, course cards, and shared UI
|   |-- data/                 Sample courses, topics, categories, and page content
|   |-- fonts/                Local Satoshi font files
|   `-- lib/                  Small helpers and form validation rules
|-- package.json              Scripts and dependencies
`-- ...                       Next.js, TypeScript, Tailwind, and ESLint config
```

The main page is assembled in `src/app/page.tsx`. Reusable page sections are in `src/components/sections`, and the sample course list and its filtering helpers are in `src/data/courses.ts`.

## Course data and search

The course cards are generated from the local array in `src/data/courses.ts`; there is no course database or course-detail page yet. Search matches course titles, creator names, and topic labels. Category links select a matching topic, while “Featured” shows the full sample list.

To change the example courses, edit that data file and add any matching cover image under `public/cardImages`. The image path in each course entry should start with `/cardImages/`.

## Sign-in and registration status

The forms provide browser-side validation and send requests to these Next.js API routes:

- `POST /api/auth/register` checks that email and password are present and that the password has at least eight characters. It logs a sample signup and returns success; it does not create an account.
- `POST /api/auth/login` checks that email and password are present. The current demo accepts the password `123456` and rejects other passwords; it does not check a real account.

These endpoints are placeholders. There is no database, password storage, session, or production authentication configured. Do not use real credentials with this demo. The newsletter form also displays a local thank-you message and does not subscribe anyone to a mailing list.

## Configuration

The app does not currently require environment variables. Dependencies and available commands are listed in `package.json`.


