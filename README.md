# Example Embed Dashboard with Node.js (using Lightdash code-snippet)

How to use a Dashboard embedding code-snippet in Node.js

## Prerequisites

- Node.js
- Cloudflare CLI
- Lightdash Project and Dashboard

## Setup

1. Clone the repository
2. Run `npm install`
3. Follow the instructions in server.js then on app.js
4. Run `PORT=4000 node server.js`
5. Use cloudflared to run the app on localhost:4000 e.g. `brew install cloudflared` and then `cloudflared tunnel run 4000`
6. Copy the url from the cloudflared output - remember, this is a temporary url so you can test the app locally with a secure embeded dashboard url
7. When you click the button, you should see the dashboard embeded in the iframe
