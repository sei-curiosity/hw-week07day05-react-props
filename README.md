[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# HW- React Props

## Task List:

1. Create a new React App.
2. Add 2 components to the React App namely:
  Heroes.js , Powers.js
3. Create two array of objects namely heroInfo and powerInfo
  
```js
  let heroinfo = [
    {
      heroName: 'Superman',
      humanName: 'Clark'
    },
    {
      heroName: 'Flash',
      humanName: 'Barry'
    },
    {
      heroName: 'Wonder Woman',
      humanName: 'Diana'
    }
  ]
```

```js
  let powerInfo = [
    {
      heroName: 'Superman',
      superpowers: ['flight', 'laser eyes', 'ice breath']
    },
    {
      heroName: 'Flash',
      superpowers: ['speed', 'lightening']
    },
    {
      heroName: 'Wonder Woman',
      superpowers: ['strength', 'lasso of truth']
    }
  ]
  ```
  4. *Heroes.js* component should take the props from the heroInfo object as props and deisgn elements. *Powers.js* should take the prop from powerInfo object as props and design elements.

  
  5. Now using Props render the Superheros with their heroName, humanName and superpowers (listed in an unordered list)

  
 *HINT: You can use Props children to display the powers.js*
  
  
