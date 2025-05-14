# Dark Forge 🏔️⚒️

**Forge Solana meme coins with the wisdom of Gandalf in Middle Earth**

## Overview

Dark Forge is a whimsical Solana meme coin creator where users:
- Consult Gandalf AI to generate token details (name, symbol, backstory)
- "Forge" their token in the fires of Mount Doom
- Receive a complete token package ready for deployment


## Live Demo

🔗 [Explore the Forge](https://darkforge.vercel.app/)

## Local Development

### Prerequisites

- Node.js v18+
- Solana CLI (optional for full functionality)
- OpenAI API key (via OpenRouter)

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/XerxesCoder/darkforge.git
   cd dark-forge
   ```

2. Create `.env` file:
   ```env
   OPENROUTER_API_KEY=your_openrouter_key_here
   SITE_URL=need live website, no need in development
   SOLANA_RPC_URL=better to be a non-public
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run development server:
   ```bash
   npm run dev
   ```

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `OPENROUTER_API_KEY` | Yes | Your OpenRouter API key for Gandalf AI |
| `SITE_URL` | Yes | Application URL (for OpenRouter headers) |
| `SOLANA_RPC_URL` | No | Solana RPC endpoint (defaults to mainnet-beta) |

## How It Works

### 1. Consult Gandalf

The AI will generate:
- Meme coin name (2-4 words)
- Token symbol (3-5 characters)
- Humorous backstory
- Token use cases
- AI image generation prompt
- Basic tokenomics

### 2. Forge in Mount Doom

After generating token details:
- Click "Forge in Mount Doom"
- The system prepares your token package
- Receive Solana token configuration files

### 3. Deploy Your Token

Use the generated files to deploy:
- Solana SPL token
- Metadata
- Image assets

## Tech Stack

- **Frontend**: Next.js, Tailwind CSS
- **AI**: OpenRouter (GPT-4/GPT-3.5)


## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## Contact

If you have any questions or feedback, please feel free to reach out.

- **Telegram**: [@xerxescoder](https://t.me/xerxescoder)
- **Telegram Channel**: [@xerxescodes](https://t.me/xerxescodes)
- **Email**: [xerxescode@gmail.com](mailto:xerxescode@gmail.com)

## License

This project is open-source and available under the [MIT License](LICENSE).

"One Token to rule them all, One Token to find them, One Token to bring them all, and in the darkness bind them."

Made with ❤️ by Xerxes

