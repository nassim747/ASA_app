# Algerian Students Association - McGill University

A modern, responsive website for the Algerian Students Association at McGill University, built with Next.js and styled with Tailwind CSS.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean, professional design with smooth animations
- **Custom Color Scheme**: Light green primary color and red secondary color
- **Smooth Navigation**: Fixed navigation with smooth scrolling between sections
- **Contact Form**: Built-in contact form for inquiries
- **Event Listings**: Dynamic event cards with details
- **Sponsorship Tiers**: Multiple sponsorship levels with benefits
- **SEO Optimized**: Proper meta tags and semantic HTML

## Sections

1. **Landing Page (Hero)**: Eye-catching hero section with call-to-action buttons
2. **Events**: Showcase of upcoming events and activities
3. **About Us**: Information about the association and its mission
4. **Contact**: Contact information and inquiry form
5. **Sponsor Us**: Sponsorship opportunities and tiers

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: TypeScript
- **Font**: Inter (Google Fonts)

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd app_asa
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page
├── components/
│   ├── Navigation.tsx       # Navigation component
│   ├── Hero.tsx             # Hero section
│   ├── Events.tsx           # Events section
│   ├── About.tsx            # About section
│   ├── Contact.tsx          # Contact section
│   └── Sponsor.tsx          # Sponsor section
```

## Customization

### Colors
The color scheme is defined in `tailwind.config.js`:
- **Primary**: Light green shades
- **Secondary**: Red shades

### Content
All content is currently placeholder text. To customize:
1. Edit component files in `src/components/`
2. Update text, images, and contact information
3. Modify event data in `Events.tsx`
4. Update sponsorship tiers in `Sponsor.tsx`

## Deployment

This project can be deployed to any platform that supports Next.js, such as:
- Vercel (recommended)
- Netlify
- AWS
- Digital Ocean

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact the ASA McGill team at contact@asamcgill.ca 