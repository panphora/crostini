# Crostini

### A super simple toast notification

```
npm install crostini
```

```javascript
import crostini from 'crostini';

// show a regular notification
crostini("Document successfully archived");

// show a notification with default error styles
crostini("Error: Can't save data", {type: "error"});

// overwrite default styles and behavior
crostini("Successfully signed up! 🎉", { 
  slideInFromTop: true, // slide in from top instead of bottom
  backgroundColor: "#4f46e5", // set a custom background color
  textColor: "#fff", // set a custom text color
  customCss: "border: 3px solid #fff; border-radius: 8px;" // overwrite the default css (on the top-level .crostini element only)
})

```

Or simply:

```html
<script src="https://cdn.jsdelivr.net/npm/crostini@1.4.0/dist/crostini.umd.js"></script>
```

<img src="assets/crostini.png" width="420" height="260">


### Original Project

This library is based on a Pen by Pierre Smith: 
https://codepen.io/kipp0/pen/pPNrrj
