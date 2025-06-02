# SwiftX Logistics Clone

A professional clone of the SwiftX Logistics website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🚀 **Modern Tech Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- 📱 **Responsive Design**: Fully responsive across all devices
- 🎨 **Professional UI**: Clean and modern design matching the original
- ⚡ **Fast Performance**: Optimized for speed and SEO
- 🔧 **Easy to Customize**: Well-structured code for easy modifications

## Services Showcased

- ✈️ **Airfreight Services**: Fast and secure air cargo solutions
- 🚛 **Landfreight Services**: Comprehensive road transport solutions
- 📦 **E-Commerce Logistics**: Specialized online business solutions
- 🌍 **Global Shipping**: International logistics services

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone <your-repo-url>
cd swiftx-logistics-clone
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

\`\`\`
swiftx-logistics-clone/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── ui/
│       └── button.tsx
├── lib/
│   └── utils.ts
├── public/
│   └── images/
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
\`\`\`

## Technologies Used

- **Next.js 14**: React framework for production
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icons
- **Radix UI**: Accessible UI components

## Deployment

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

1. Push your code to GitHub
2. Import your repository on Vercel
3. Deploy with one click

### Deploy on Netlify

1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

## Customization

### Colors

The project uses a purple and red color scheme. You can customize colors in `tailwind.config.js`:

\`\`\`js
colors: {
  purple: {
    900: '#4c1d95',
    800: '#5b21b6',
    // ... more shades
  },
  red: {
    600: '#dc2626',
    700: '#b91c1c',
    // ... more shades
  }
}
\`\`\`

### Content

Update the content in `app/page.tsx` to match your business needs:

- Company information
- Services offered
- Contact details
- Statistics and achievements

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or support, please contact:

- Email: your-email@example.com
- Website: your-website.com

## Acknowledgments

- Original design inspiration from SwiftX Logistics
- Icons by [Lucide](https://lucide.dev/)
- UI components by [Radix UI](https://www.radix-ui.com/)
