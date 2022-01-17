# devDependencies bug

**Title:** Meteor app includes `devDependencies` packages from packageA

**Steps to reproduce:**

1. `cd packageA && meteor npm i && cd ..`
2. `cd app && meteor npm i`
3. `meteor`
4. go to `http://localhost:3000`

**Result:**

console message `mobx instances count:2`

**IMPORTANT NOTE** Meteor app uses the package via `file:../packageA`
