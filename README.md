# Blackjack Game

A simple clock created with pure css and vanilla JavaScript. 

## My Process

### Built with

- HTML
- CSS
- JavaScript

### What I learned

I learned and practiced the following concepts:

- setInterval
- The Date object
- Data attributes

```html
<div class="hand hours" data-hour-hand></div>
```

```javascript
setInterval(getTime, 1000);

function getTime() {
    let date = new Date();
    let secondsRatio = date.getSeconds() / 60;
    let minutesRatio = (secondsRatio + date.getMinutes()) / 60;
    let hoursRatio = (minutesRatio + date.getHours()) / 12;
    setTime(secondHand, secondsRatio);
    setTime(minutesHand, minutesRatio);
    setTime(hoursHand, hoursRatio);
}
```

## Contributing
Pull requests are very welcome and you are free to fork this repository.


## License
[MIT](https://choosealicense.com/licenses/mit/)