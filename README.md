# Crostini

### A super simple toast notification

```
import crostini from 'crostini';

// show a regular notification
crostini("Can't save data on this page");

// show an error notification
crostini("Can't save data on this page", {type: "error"});
```