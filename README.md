# E-ecommerce

A modern e-commerce web application built with [Remix](https://remix.run/), [Sanity.io](https://www.sanity.io/), and [Stripe](https://stripe.com/).

## Features
- Product management with Sanity CMS
- Shopping cart with persistent state
- Stripe checkout integration
- Responsive design with Tailwind CSS

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn
- Sanity.io account and project
- Stripe account

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/e-ecommerce.git
   cd e-ecommerce
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up Sanity Studio:**
   ```bash
   cd studio-e-ecommerce
   npm install
   npm run dev
   ```
   - Configure your Sanity project ID and dataset in `sanity.config.ts`.

4. **Set up environment variables:**
   Create a `.env` file in the root directory:
   ```env
   SANITY_PROJECT_ID=your-sanity-project-id
   SANITY_DATASET=production
   STRIPE_SECRET_KEY=your-stripe-secret-key
   ```

5. **Run the Remix app:**
   ```bash
   cd .. # back to root if in studio
   npm run dev
   ```

## Development
- The Remix app is in the `app/` directory.
- Sanity Studio is in the `studio-e-ecommerce/` directory.
- Update schemas in `studio-e-ecommerce/schemaTypes/` as needed.

## Deployment
- Deploy the Remix app to [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/), or your preferred platform.
- Deploy Sanity Studio to [Sanity Managed Hosting](https://www.sanity.io/docs/deployment).

## License

MIT
