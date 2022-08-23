# A/B testing in Nuxt.js sample

A companion repo for **How to perform an A/B test in Nuxt.js**

## About

This is a fictional e-commerce website. It is used to demonstrate how to perform A/B test in Nuxt.js

Here is a screenshot:

![Snapshot of sample app](https://user-images.githubusercontent.com/74829200/184504007-6c2cfd9f-9d26-4133-9b59-1f47c92bffc7.png)

The red sale banner can be identified as the new variation/feature to be tested.

## How it works

Clicking on the sale banner logs an event to Amplitude. The events are then recorded in 
an analysis chart for later comparison to the previous benchmark metrics collected by the control state (a version of the site without the banner) of the site.

## Build and Run

### Prerequisites

- Node - Version 16.16.0

### Running the app

1. Clone this repository

2. Open a terminal in the root of the cloned repo and install the required npm packages:

```sh
npm install
```
3. Start the app by running:

```sh
npm run dev
```

## Learn more

Useful links to technical resources.

Example:
- [Nuxt.js Documentation](https://nuxtjs.org/) - learn about Nuxt.js features and API.

[**ConfigCat**](https://configcat.com) also supports many other frameworks and languages. Check out the full list of supported SDKs [here](https://configcat.com/docs/sdk-reference/overview/)

You can also explore other code samples for various languages, frameworks, and topics here in the [ConfigCat labs](https://github.com/configcat-labs) on GitHub.

Keep up with ConfigCat on [Twitter](https://twitter.com/configcat), [Facebook](https://www.facebook.com/configcat), [LinkedIn](https://www.linkedin.com/company/configcat/), and [GitHub](https://github.com/configcat).

## Author
[Chavez Harris](https://github.com/codedbychavez)

## Contributions
Contributions are welcome!
