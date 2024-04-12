# [Alpha Series](https://kpanot.github.io/alphaserie/)

**Accessible on [https://kpanot.github.io/alphaserie/](https://kpanot.github.io/alphaserie/).**

A web application that has for main purpose to provide a version simplified of [Betaserie](https://www.betaseries.com/) to follow your shows.

It is mainly developed for people who would have a large amount of show and who are a bit nostalgic of the historic version of Betaserie.

(It was the perfect occasion to play a bit with [Svelte](https://svelte.dev/))

## Contributing

All contributions are always welcome.

### Setup the code locally

As prerequisite you will need to download and install the latest version of [NodeJs](https://nodejs.org/en/download).

To setup it on your local, you will need first to get the project:

```shell
git clone https://github.com/kpanot/alphaserie.git
```

Then to install it:

```shell
# prepare yarn
corepack enable

# install with yarn
yarn install
```

### Start the application

To make your application work, you will need to generate an API Key and Secret for your application first.
These can be requested on the [developer page](https://www.betaseries.com/compte/api).

> [!TIP]
> Specify the Callback URL to be your local machine: "<http://localhost:5173/>"

After receiving the API Key and Secret, you can create the file `app/.env.local` with the following content:

```
VITE_CLIENT_ID=<Your Client ID>
VITE_CLIENT_SECRET=<Your Client Secret>
VITE_REDIRECT_URI=http://localhost:5173/
```

When done, you can start your application via the following command:

```
yarn start
```
