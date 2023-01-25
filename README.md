## Search Engine to CUJAE's Intranet

### Using:
* React
* Tailwind CSS

### How to install?
* clone the repo
* install all dependencies
```bash
npm install
```
#### For Develop
* configure .env file
  ```bash
  REACT_APP_API_USER=UserLDAP
  REACT_APP_API_PASS=PassLDAP
  REACT_APP_API_AUDIENCE=https://sigenu.cujae.edu.cu/sigenu-ldap-cujae/ldap
  ```
* to run on [localhost:3000](http:localhost:3000) exec:
```bash
npm start
```

#### For Production
* Add the enviroments variables on the server (if are not created)
  ```bash
  REACT_APP_API_USER=UserLDAP
  REACT_APP_API_PASS=PassLDAP
  REACT_APP_API_AUDIENCE=https://sigenu.cujae.edu.cu/sigenu-ldap-cujae/ldap
  ```
* Build the project
```bash
npm build
```
* Copy the content of the `/build` file inside `/var/www/html/buscador/`