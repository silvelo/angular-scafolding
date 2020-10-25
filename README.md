# Angular Scafolding

Basic scafolding for angular:

* Angular 10
* Sidenav Layout
* i18n (@ngx-translate and @biesbjerg/ngx-translate-extract)
* Angular Material
* Flex
* Ngrx
* Fontawesome

## Download and Install

```
git clone https://github.com/silvelo/angular-scafolding.git
cd angular-scafolding
npm run install
```

## Start app
```
npm run start
```

## Deploy app
To deploy app remember change the deploy command in `package.json`:

```
"deploy": "ng build --prod --base-href='https://angular-scafolding.silvelo.com'"
```

Change the base-href for your website and edit ouputPath from `angular.json` if you want to change the output folder:
```
"outputPath": "dist/angular-scafolding"
```
## i18n
Execute the script to create the json with strings
```
npm run i18n:init
```

In the `assets` folder search `template.json` and rename to your language. Then edit file to complete the translate. To change between languages only need to set the json filename in your available language list.

This repo configure two languages Spanish and English (es.json, en.json) to change between them only set `es` or `en` on the avalaible list. Check it in `header.component.ts`

### Fontawosome Icons

This scafolding integrate fontawosome icons, to user them only need to specify the icon in `mat-icon` component

```
<mat-icon 
  fontSet="fa"
  fontIcon="fa-eye-slash"></mat-icon>

```