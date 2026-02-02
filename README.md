# Hyperswitch Embeddable Components Demo

This repository demonstrates how to integrate Hyperswitch embeddable components into your application using `HyperswitchProvider` and `ConnectorConfiguration` directly.

## 🎯 Embeddable Components

The embeddable components are:
- **Hook**: `app/components/useHyperswitch.ts` - Custom hook to initialize Hyperswitch
- **Components**: `HyperswitchProvider` and `ConnectorConfiguration` (from Hyperswitch SDK)
- **API Route**: `app/api/embedded/hyperswitch/route.ts` - Token generation endpoint

### Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   Create a `.env.local` file with:
   ```
   HYPERSWITCH_API_KEY=your_api_key
   HYPERSWITCH_PROFILE_ID=your_profile_id
   HYPERSWITCH_BASE_URL=https://app.hyperswitch.io
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **View the demo:**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 How to Use the Embeddable Components

### Direct Usage Pattern

Use `HyperswitchProvider` and `ConnectorConfiguration` directly with the `useHyperswitch` hook:

```tsx
'use client';

import { useHyperswitch } from './components/useHyperswitch';

export default function MyPage() {
  const { hyperswitchInstance, components, isLoading, errorMessage } = useHyperswitch();

  // Extract components for direct usage
  const HyperswitchProvider = components?.HyperswitchProvider;
  const ConnectorConfiguration = components?.ConnectorConfiguration;

  if (isLoading) {
    return <div>Loading Hyperswitch Control Center...</div>;
  }

  if (errorMessage) {
    return <div>Error: {errorMessage}</div>;
  }

  if (!HyperswitchProvider || !ConnectorConfiguration || !hyperswitchInstance) {
    return null;
  }

  return (
    <HyperswitchProvider hyperswitchInstance={hyperswitchInstance}>
      <ConnectorConfiguration url="https://app.hyperswitch.io" />
    </HyperswitchProvider>
  );
}
```

### What the Hook Provides

The `useHyperswitch` hook returns:
- `hyperswitchInstance`: The initialized Hyperswitch instance
- `components`: Object containing `HyperswitchProvider` and `ConnectorConfiguration`
- `isLoading`: Boolean indicating if the SDK is loading
- `errorMessage`: String with error message if initialization fails

## 🔧 API Configuration

The API route at `app/api/embedded/hyperswitch/route.ts` handles token generation. It requires:
- `HYPERSWITCH_API_KEY`: Your Hyperswitch API key
- `HYPERSWITCH_PROFILE_ID`: Your profile ID
- `HYPERSWITCH_BASE_URL`: Hyperswitch base URL (default: https://app.hyperswitch.io)

## 📁 Project Structure

```
app/
├── components/
│   ├── useHyperswitch.ts          # Hook to initialize Hyperswitch
│   └── HyperswitchEmbedded.tsx    # Wrapper component (for backward compatibility)
├── api/
│   └── embedded/
│       └── hyperswitch/
│           └── route.ts           # API route for token generation
├── page.tsx                        # Demo page using components directly
├── layout.tsx                      # Root layout
└── globals.css                     # Global styles
```

## 🚀 Build for Production

```bash
npm run build
npm start
```

## 📝 Notes

- The `useHyperswitch` hook handles client-side SDK loading and initialization
- The API route runs on the server and securely handles API keys
- Use `HyperswitchProvider` and `ConnectorConfiguration` directly for maximum flexibility
- All dashboard styling is preserved and ready for merchant presentation

