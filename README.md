# Crostini

### A super simple toast notification

```
npm install crostini
```

```javascript
import crostini from 'crostini';

// show a regular notification
crostini("Can't save data on this page");

// show an error notification
crostini("Can't save data on this page", {type: "error"});
```

Or simply:

```html
<script src="https://cdn.jsdelivr.net/npm/crostini@1.1.0/dist/crostini.umd.js"></script>
```

<img src="assets/crostini.png" width="420" height="260">


### Original Project

This library is based on a Pen by Pierre Smith: 
https://codepen.io/kipp0/pen/pPNrrj
