## About the Project

This is a portfolio website for a fictional consultant company called **PixelPerfect Innovations**. The website includes:

- a team gallery with profiles for each team member,
- a portfolio of various (fictitious) projects,
- a looping logo carousel of clients,
- an interactive map,
- and individual profile pages with personal details and a contact form.

This project was created as part of a course focused on learning and practicing Scrum and other agile methods, emphasizing teamwork, iterative development, and project management. Using tools like Jira and Figma to manage and track our progress, we followed Scrum practices such as daily stand-ups, sprint planning, sprint reviews, and retrospectives in order to deliver a MVP (Minimum Viable Product) within the given time frame of 4 weeks.

For this reason, to manage the scope and time constraints, the website is quite simple in terms of functionality. However, we still aimed for a visually appealing and responsive website that showcases our skills and creativity.

## Tech stack

[![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)](https://styled-components.com/)

[![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://www.npmjs.com/package/react-router)

[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

## Getting Started

### Prerequisites

- Git ([Download](https://git-scm.com/downloads))
- Node.js: Version 18+ ([Download](https://nodejs.org/))

### Local Development

1. Clone the repository:

```bash
git clone https://github.com/stenbumling/pixelperfect-innovations.git
```

2. Navigate to the project directory:

```bash
cd pixelperfect-innovations
```

3. Install dependencies:

```bash
npm install
```

4. (Optional) Add your Google Maps API key to the `.env` file.
> To enable the map feature on the site, you'll need a Google Maps API key. Follow these steps:
>
> 1. Obtain a Google Maps API key by visiting the [Google Cloud Console](https://console.cloud.google.com/).
> 2. Create a `.env` file in the root of the project (if it doesn't already exist).
>3. Add the API key according to the `.env.example` file.
>
> If you don't provide an API key, the map feature will not work, but the rest of the site will function normally.

5. Start the development server:

```bash
npm run dev
```

### Building and Running for Production

To build the project for production, run the following command:

```bash
npm run build
```

This will create an optimized build of the project in the `dist` directory. To run the production build locally, you can use the following command:

```bash
npm run preview
```

## Acknowledgements

This project was a collaborative effort by students at Medieinstitutet, and you can find the link to the original repo [here](https://github.com/scrum-team/scrum-project). The following people contributed to the design, development and management of the project:

- [Ellen Dahlgren](https://github.com/ellensofia)
- [Gabriel Lugo Méndez](https://github.com/gabriel-lugo)
- [Lisa Marie Andersson](https://github.com/lisamarieandersson)
- [Marcus Rosin Lindberg](https://github.com/stenbumling)
- [Tara Skoglund](https://github.com/TaraSkoglund)
