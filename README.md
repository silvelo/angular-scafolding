# Angular Scafolding

Basic scafolding for angular:

* Angular 10
* Sidenav Layout
* i18n (@ngx-translate and @biesbjerg/ngx-translate-extract)
* Angular Material
* Flex

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


### Fontawosome Icons

This scafolding integrate fontawosome icons, to user them only need to specify the icon in `mat-icon` component

```
<mat-icon 
  fontSet="fa"
  fontIcon="fa-eye-slash"></mat-icon>

```