# ProStore

ProStore is an e-commerce platform built with Next.js, designed to provide a seamless shopping experience. It includes features like product listings, a shopping cart, and user authentication.

## Getting Started

Follow the steps below to set up and run the project locally.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/prostore.git
   cd prostore
   ```

1. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

1. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

1. Install new UI components:
   The installed components can be found in the `src/components/ui` directory.
   To add new components, use the following command:

   ```bash
   npx shadcn-ui@latest add [component-name]
   ```

1. Prisma Studio
   Run the Prisma studio to see the database models and data:

   ```bash
   npx prisma studio
   ```

1. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Tech Stack

This project uses the following technologies:

- **Next.js**: A React framework for building server-rendered and statically generated web applications.
- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.
- **Vercel**: Deployment platform for modern web applications.
- **Prisma**: A next-generation ORM for Node.js and TypeScript.
- **Shadcn**: A component library for building user interfaces with Tailwind CSS.
- **NextAuth.js**: Authentication for Next.js applications.

## Learn More

To learn more about the tools and frameworks used in this project, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [React Documentation](https://reactjs.org/docs/getting-started.html) - Learn about React.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Learn about Tailwind CSS.
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - Learn about TypeScript.
- [Prisma Documentation](https://www.prisma.io/docs/) - Learn about Prisma.
- [Shadcn Documentation](https://shadcn.dev/docs) - Learn about Shadcn.
- [NextAuth.js Documentation](https://next-auth.js.org/getting-started/introduction) - Learn about NextAuth.js.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
