# Tic-tac-toe client

Interactive single session tic-tac-toe client that communicates with [Tic-tac-toe API](https://github.com/arturassolncevas/tic_tac_toe_api)

![alt text](https://i.ibb.co/V3zBX89/2021-04-25-17-31.png)

## Prerequisites

- [Node.js](https://nodejs.org/en/) v12.16.2

- [Yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable)

## Installation
Setup [Tic-tac-toe API](https://github.com/arturassolncevas/tic_tac_toe_api) 

Install dependencies

```bash
yarn install
```

## Usage
Development

```bash
yarn start:development
```
Production
```bash
yarn build
yarn start:production
```
Open in browser: 127.0.0.1:4000

## Testing
Testing UI includes combining Client and API projects together  and is yet to be implemented with the following tools:
- [Cucumber](https://github.com/cucumber/cucumber-js)
- [Puppeteer](https://github.com/puppeteer/puppeteer)
- [Test blueprint](https://github.com/patheard/cucumber-puppeteer)

## Docker
Build image (package install warnings will be resolved in next upcoming version)
```bash
docker build . -t <name>
```
Run container
```bash
docker run -p 4000:4000 -it <name>
```



## License

[MIT](https://choosealicense.com/licenses/mit/)
