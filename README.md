# Angular Gist RunKit

Angular Gist RunKit Module.

## Source Code

[Gist-RunKit source code ](https://github.com/kedar9444/Gist-RunKit) 

## Install

Install the package.

```sh
$ npm i -s ngx-gist-runkit
```

Add the RunKit embed library to your index page:

**`src/index.html`**
```html
<head>
    ...
    <script src="https://embed.runkit.com"></script>
    ...
</head>
```

Whitelist `angular-runkit` in your System.js config:

**`src/systemjs.config.js`** (if applicable)
```js
map: {
    ...
    'angular-runkit': 'npm:angular-runkit/dist/index.js',
    ...
}
```

Declare the component in your module:

**`src/app/app.module.ts`**
```ts
import { NgxGistRunkitModule } from 'ngx-gist-runkit'

...

@NgModule({
	...
	imports: [
		...
		NgxGistRunkitModule,
		...
	],
	...
})
```

## Usage

```html
<app-ngx-gist-runkit [gistId]="gistId" [gistFileName]="gistFileName" ></app-ngx-gist-runkit>
```


Don't forget to check out the [RunKit embed docs](https://runkit.com/docs/embed#options).

## Inputs

### source : string

Basically there are two inputs one is [gistId] and second is [gistFileName].

[gistId] : is the id present after you username when you open your gist on github.

[gistFileName] : Before creating any Gist  github asks for the filename you have to enter the same.

Please check below image for more details.

```html
<app-ngx-gist-runkit [gistId]="gistId" [gistFileName]="gistFileName" ></app-ngx-gist-runkit>
```
