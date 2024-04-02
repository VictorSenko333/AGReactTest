# Front-end app for dummyjson.com

## Available Scripts

In the project directory, you can run:

### `npm install`

To run project, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:5173/todoss](http://localhost:3000) to view it in the browser.

## Technical stack

<a href="https://react.dev/"><img align="left" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEVElEQVR4AWIYtADAeT1GybGEYRyv5czGurZt27Zt27bxJbaTtWLbtm1jjHDuv3OfTerM6aDz4Xd6962q561BY/w/5qNrNscL8AJex204knoGx31zf8h3UGOMOXhNay5QhvfmyMP32IAYIjrOwpc4GkaOVm2WPVdrv1fWITb/oWtV6FsKKcCtuBqvoh/imIi7ZCISGntVc2/V2piyDA751TfAVAxDPVDriALkV8MTmImtCGAWntQYc7qAI2sxVFkNvGzgBkTwNoz/p67p4z40RUqawmc38P2od5IMZd3gZQMvui3SWDa+QhRdJKpaNtxfDJleNvAeArgIe+t5PxQ5x1cQQmfUka4I7xn7hfXWGmUE8L6XDbyFIC5DDk7EdXgXa5BEBdqhA/pgB1ZrznVak6OMoDIP3lyeRhxFGICViGCXwpZiAeZiNmZhBjZjNyJYqbWFynoGzlnm0lhfGNTFy5iAFEIYgaZYhI14EMfhSNRHPamL5xDVpppgpDJSGK9s5llfbDXOwE0YhgSmIYAi+HEHAviXzWZydH33kIPm2ILb4FdGQJkJ9bhRPY3RZfUZrMdCvIojUIEpOBn9MR+nwm52ouTCyOlYgH44SRmVOBKvqcc6PO30dhbciTUYhnN1sbHPhNYI430YOQYtsFxaqGbkA61pZZ8Byj5XvdbgTqcwHEtwftpV7DxN2o1xOEI3qCx9vimbalkwmjtGa9e4ZJ+PpRhudPqw08L08zcHpQp/D0aOw0LVIdQ0ZuRV1cuQY2erVyvscP7YjjY+BuxJyEWFQr6CkROxVHXbUo0ZeU/1cmVZZ1w75LfBduePwViOi63PyXEh1iGBmTje2lg+UiLU1AhHYxJ2KePCtOyL1XOw888tWIkxuMj3c2HVpI+wFX/o+DmMnIU+CEsf1aqafKJ6cwSUxQ2KbHqo10rcYvzfd3SKj2IVluE9HIsemGT9vbiqidTG1VIbRs7FEvTCiZiC7sp5Vz1W7+n5cwdj/t9ZF6OgfkhgLkIoRnXchE1og1y4Xog0txBrcS1qoFRZcxBHf1ydpwcfLd57etTC0xiJFCKYoMZzraebU3A8jsZROA4n43NsxxS00toIUsp8Sj2Mj+dIl1fROf1m1NF6+4PYiRhWYzkWy1LV4poTVL0HOh34ZuT+Vr6tkEt17T8Gl+NVrMA2FKOJFCGpsVc19xhk4jKE8I6X54H33R5I/D8VGN3xgmpaT4pUe86nU83lgeQDLxt4ARHciPSxLHyi8RKJqJZ1gEeyl7xs4HqE8S6MS2guGiEljVSzf6xoLm+9XoyXDdTHZIzEEbAfWmriRczHJpmHFzRG8y724/0ITDnkx3KfGuFVRFGOe3Ez3sMwJDEKN8soJDBUc27SmnJlvKYX4emnmQ+fYw3iCopgMj7EETByhGqTEdHcONYow4/D+nGapcvv43gO1+O/CXHUgDujqG3KWnAZIgRVEw3Vow5LmIMWAAAHicNR32+2hQAAAABJRU5ErkJggg==" alt="Yu Shi | LinkedIn" width="21px"/>React</a>

<a href="https://react.dev/"><img align="left" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADVUlEQVR4AdXWA6xlOxQA0D5b37Zt27Zt27Zt27Zt27ZtDE5nJembnFyOcZN1vbvrNoxWj31WeChQw9gsysZswuKMTWA4JYZx2JvX+I+Y/M+r7EQXgWGefBYeIuNXHuIUDucqvqEfVzM+gWGWfHpepC/XMT8thKSO2bmXyFV0DqsKdHAzkZNpJ1CqohPzGP3ZmcBQt34j+vIQY1Ht/4vzK28zydBWoI0H+JeVCFSLaeAKIlsSGOIKzM1vPEYn1WNgdfpzDXUMcffvQORQAoMaOzlf8iZjDU0FziGyOiFpZ1W2ZuoyE7KF43mcKYe0Ag3cwT/MR6CWw/mfyEtsyEosxkyMRV1ux2we0gq08Ai/MSuBsXidWCCjD7/wJleyGRNTM6QVaOZB/mB2Am3cS0z+5HJO5VIe5nP6kvEBhzEpgeqJkxrquIH/WYyQzMudvMAeNOViWpiU1bmMH4i8wVrUUzX5jGxNHccT2YSQ00IXtZQrq545uZS/+YMDaaHigfMSbzMm6xM5lcCQDGUTG/AJfTgyfVf0x4l4nIwLaWVavuUlxqRyMpiIrdmC8QjJwrzLf+xAIORPs1OIXEkPgUZupA8rE6hUgR7uJCbX005IluEHvmJOUqAP/MDrTE7IWYs+3EonocK4z8fvxORHZiEkNRxM5ELq0w8Dv9yOQL7QLh7kfx5mP7opVYGp+IiYvMVEBeVNwrt8xcy9k+RuvmLKMuf80cSkP7uX2YI7eJjIEyxf2KDkFDK2CWlyvcqztJepwEXEnEvLFLwR//E8ExLK9NRGZJyS316fqVCBjfiLyN9sQigwFx/yN+tUmCv54/qCkJbbg3zJlJRby2tzIuukzyFnVl4gchqNZZPDbkSO7P3iWCI7Dea5X8fyvEnkRsamUkwXD/M3K/V+uSC/8D6zVV3vMDFH8xP9uY4JqnR9LXvQj7vpzu/bJ5DxMivSSijQyNTszptEfuFIemhmTGoorHAXe/AbHzMfRbvYWfzLXzzM8ezObhzD7XxFxt/cwZLUMT7n8Rpnsw2rszYH8BR9eYXFCJS8hKzLA/xGLPA3b3E2S9NGfhgf4ldikiV9+ICjKt4NcoW1MTvrszt7sBHzMza1lIprZ3Y2YF8OYReWY8Jc3KjzGABKY6329Mh/ZAAAAABJRU5ErkJggg==" alt="Yu Shi | LinkedIn" width="21px"/>Redux</a>

<a href="https://react.dev/"><img align="left" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcBAMAAACAI8KnAAAAMFBMVEVHcEwAf/8Af/8Af/8Af/8Af/8Af/8Af/8Af/8AgP8Af/8Af/8Af/8Af/8Af/8Af/86kkgXAAAAEHRSTlMAE6ElfE8w/48GsfBl3cpAzToGrwAAAKBJREFUeAGlxyEMAWEYx+EfR7iN7abPND0JNs1U/YpENeXvjlNVTU/XTFOv99GTqiv2fu/m+u5pD40MEkw0gjmw2dviMmO6s+oILJRx9upJKuveq5tCl3gVCqHdh4p1XTqqImvs5YK1t8NL6LhuqozSOrHOpK03ekFbyhMvLbiqWME7FOsdvqqbJ0PpiOtLuXRKwKWSDh/+FlJFLS5HNPQD5C4+Qq11NNEAAAAASUVORK5CYII=" alt="Yu Shi | LinkedIn" width="21px"/>Mui</a>

<a href="https://react.dev/"><img align="left" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAfBAMAAAB0eNK/AAAAMFBMVEVHcEz////////////////////////4y9r////0qcLsTor////sWZD61+LxjK/uaJnz0fPTAAAADHRSTlMAAXvT/0xQ/wb//4XrM/OJAAAAy0lEQVR4AWJgYFR2gQMjAQYGhhAXJODKwMDm4lIOBy4uCQwtLrNWwcFKFw+GLZ5rzsDBqSneDCZeZ5DAEmcGl1tg1rpXYGqtC1jgFKAyMtAAEAbC8HPXi+SSBkjn9B6bsecoFICR1jq2Zkf0G/icf3y/C+PqTspghm5bGugz2PFCPHBPwAxWA7RWUwLq+ZGsLwCnvEAyWF7MoDxsBXDhjO+zg+PrUv2jdKhKrSLW5TOYjhBzta+gFWJGYsBODcYQOxXWxS5iObGtWP8G+hwwBU8mgxgAAAAASUVORK5CYII=" alt="Yu Shi | LinkedIn" width="21px"/>React Hook Form</a>

<a href="https://react.dev/"><img align="left" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAkFBMVEX////39/fx8fHw8PD09PT5+fn6+vqHmMoNBQAYGBhERET3+f4hYeojLEYfHhkAAADT09OjtfAvZeYzVq8eGQBlZWU0aOM4bOo3NSofHx7p6em8yfQyZuKMpfK0sqwRERGGhoZQeeUiXuHj6fvT3PhmiOiPj4+kpKRujulGc+Rvb2+/v78VWeGVq+7AzPS2trZaPYizAAAA2UlEQVR4Aa1QBQ7DMAwMuBnPHTMz//91K4UT4ebi5Ugy+cdQxvNhNEIBS6ofwZhHCS4sxB134okBLB8LSoyXk2B0DaifWr3R9A0qtNXudDF1HTSRuNcfDBsjCQQ4RjIeT6YznKtcJ33RX67WuNk6ZYrcjfcHgjMUstQmj/vxiZDzBi8R8jreH3OAs5mKNe/DfnwrvvcGPiwPLUtWy/6i+KYoFwEmoPXs9yvUREzlEhR5fL3eFUrP549K9Rfv75tQcBn3BMDjmIOcZF8ruG4Brv4sGjgDYEr022TH7AlY4bdhxQAAAABJRU5ErkJggg==" alt="Yu Shi | LinkedIn" width="21px"/>Axios</a>

## Nice to improve

- Add <a href="https://styled-components.com/">styled-components</a> or <a href="https://tailwindcss.com/">tailwind</a> for styling
- Add <a href="https://styled-components.com/">yup</a> for form validation
- Add Path aliases
