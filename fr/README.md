# Exemple d'application du portail de développement pour le flux de code d'autorisation avec la clé de preuve pour l'échange de code (PKCE).
Cet exemple montre comment utiliser la bibliothèque openid-client avec Next.js pour :
- Authentifier un utilisateur enregistré via IBM Security Verify en utilisant le type de subvention PKCE.
- Effectuer avec succès une requête API vers le point de terminaison `userinfo` pour renvoyer les détails de l'utilisateur authentifié.

<br>

![capture d'écran](screenshot.png)

## Exécution de l'exemple d'application :
1. Créez un fichier `.env.local` à l'aide de l'extrait généré par le portail Developer. Vous pouvez vous référer au fichier `.env.example` pour connaître les variables d'environnement nécessaires à l'exécution de cet exemple d'application.
```
TENANT_URL=https://xxxxxxxxx.xxx
CLIENT_ID=xxxxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx
CLIENT_SECRET=xxxxxxxxxx
REDIRECT_URI=https://xxxxxxxxx.xxx/xxxx
RESPONSE_TYPE=code
```
2. Dans l'interface de gestion, entrez `npm install`
3. Après avoir installé node_modules avec succès, démarrez l'application d'exemple à partir de l'interface de gestion en exécutant la commande suivante `npm run dev`
4. naviguez vers `http://localhost:3000` dans votre navigateur et suivez les invites à l'écran pour authentifier votre application en utilisant le flux de code PKCE avec IBM Security Verify.

Une fois l'authentification réussie, les informations relatives à l'utilisateur authentifié sont renvoyées.

## Traitement des incidents
- L'ITC affiche `npm ERR! code E401` alors que l'on essaie d'exécuter `npm install`. Supprimez le fichier package-lock.json et relancez `npm install`.


## Licence

La licence MIT (MIT)

Copyright (c) 2023 - IBM Corp.

Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
<!-- v2.3.7 : caits-prod-app-gp_webui_20241231T141152-11_en_fr -->