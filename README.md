# CMM - Private Growth Operating System

A high-conversion homepage for residential contractors built with Next.js, TypeScript, and Tailwind CSS.

## Design System

- **Colors**: Charcoal (#1a1a1a), Dark (#0a0a0a), Gold (#d4af37)
- **Typography**: Clean, authoritative, minimal
- **Spacing**: Large, generous spacing throughout
- **Animation**: Minimal - subtle transitions only
- **Approach**: Mobile-first, authority-focused

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Where to Add Your Assets

### Testimonials (Video)
- Location: `components/Testimonials.tsx`
- Replace the placeholder `testimonials` array with your actual video testimonial data
- Add video embeds (YouTube, Vimeo, etc.) where indicated

### Trustpilot Rating
- Location: `components/TrustProof.tsx`
- Update the rating number and review count
- Add Trustpilot widget/embed if needed

### Revenue Numbers & Booked Jobs
- Location: `components/TrustProof.tsx`
- Replace placeholder data in the `revenueData` array
- Add actual booked job screenshots/images in the grid section

### Client Wins / Live Pipelines
- Location: `components/ClientWins.tsx`
- Replace the `wins` array with real contractor data
- Update pipeline values and job counts

## Customization

- **Colors**: Edit `tailwind.config.js` to adjust the color palette
- **Content**: All copy is in the component files, easy to update
- **Sections**: Each section is a separate component for easy modification

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Main homepage
│   └── globals.css      # Global styles
├── components/
│   ├── Navbar.tsx       # Navigation bar
│   ├── Hero.tsx         # Hero section
│   ├── ProblemLock.tsx  # Problem section
│   ├── Solution.tsx     # System/5-pillar section
│   ├── Testimonials.tsx # Video testimonials
│   ├── TrustProof.tsx   # Trustpilot + revenue proof
│   ├── ClientWins.tsx   # Live pipelines
│   ├── WhoThisIsFor.tsx # Target audience
│   └── FinalClose.tsx   # Final CTA section
└── public/              # Static assets (create as needed)
```
