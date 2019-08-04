---
path: how-we-learned-to-stop-worrying-and-love-graphql
title: "How we learned to stop worrying and love GraphQL"
date: 2019-08-04T00:00:00.000Z
thumbnail: /src/static/images/1.jpg
tags:
  - graphql
  - typescript
---
This is the first part of the story of our GraphQL experiment at Revolut. 
First part will thoroughly explain, why we even started with GraphQL, how we approached proof of concept phase of the
adoption, why we did it this way and not another and surely a recipe how you can do the same in your own project.

## Reasons why

Personally, I was extremely into GraphQL since early 2017, I wrote a few small projects using it before I joined Revolut,
and my experience with it was indeed amazing. Then, in December 2017 when I joined Revolut the shape of the project I
started working on was far from perfect, so thoughts about GraphQL were far-far-far in the future. Eventually, after almost
a year use cases started to appear one after another so I decided, probably it's time to start taking GraphQL seriously into consideration.

### TypeScript Migration
The first and most important reason was our TypeScript migration. We started to struggle without strong types, at least we thought we do. (Oh boy we were right!)
Around June 2018 we decided that TypeScript got enough traction with all these news that TypeScript gets the first-class
support in Babel, as well as the ESLint, made it for us a no-brainer to select it over Flow.

So, we started, first, with a bunch of d.ts files here and there to eventually all-in into TypeScript.
One of the struggles that we immediately encountered was the lack of typing of our APIs and pretty limited or no documentation
of our half RPC half REST APIs that we had. It meant that we have plenty of manual work to do.
Problems with regular API typings were, that they are only client-side, they are static, and they don't have any runtime
validation on correctness and they are getting out of sync very quickly. At that point I thought, what about GraphQL?
Any GraphQL implementation is checking input parameters, as well as the what resolvers are resolved
(e.g. what will be returned to the client), on correctness. 
For example, if your field fullName on type User is non-nullable, but your resolver returns null, query execution will
fail with an error.
It means, that by implementing GraphQL over our REST/RPC endpoint we will be able to track down our APIs at least for
unexpected breaking changes and immediately react to them. Sounds awesome! Still, not much reason to try?
