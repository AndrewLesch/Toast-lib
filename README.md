Toast library: library to add toasts in your project
## Installation
npm i toasts-library
## Usage
import ToastContainer and add it in your App, use addToast and deleteToast to set tosts
## Settings 
You can set next params for your toasts
addToast({
    title,
    description,
    type,
    id,
    animation,
    color,
    margin,
    duration,
    position,
    toastsInSamePosition,
  })
1. Title: `Set title for toast` max symbols = 20
2. Description:  `Set description for toast ` max symbols = 150
3. Type: `Set type for toast: info, success, error, warning`
4. Id: `Set id for toast`
5. Animation: `Set animation for toast: scaleAnimation, opacityAnimation, heightAnimation`
6. Color: `Set color for toast`
7. Margin: `Set margin for toast`
8. Duration: `Set toast duration for toast in ms`
9. Postiton: `Set position for toast: topLeft, topRight, bottomLeft, bottomRight`
10. ToastsInSamePosition: `Set amount of toasts in same position, use 0 by default`