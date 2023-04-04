# Web Development Project 6 - *NBA Stat Hub*

Submitted by: **Michael Morriss**

This web app: **A statistical toolkit for data relating to the most talented offensive players in the NBA, with data powered by BasketAPI.**

Time spent: **21** hours spent in total

## Required Features

The following **required** functionality is completed:

- [ X ] **The app includes at least two unique chart developed using the fetched data that tell an interesting story**

- [ X ] **Clicking on an item in the list view displays more details about it**

- [ X ] **Clicking on an item has a direct, unique link to that item's detail view page**


The following **optional** features are implemented:

- [ X ] The site's customized dashboard contains more content that explains what is interesting about the data
- [ X ] The site allows users to toggle between different data visualizations

The following **additional** features are implemented:

* [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented user stories:

1. Bar Graph of data fetched that shows total points by position.
<img src='https://i.imgur.com/NRHMbnF.gif' />

2. Doughnut graph of data fetched that shows number of position types more detailed.
<img src='https://i.imgur.com/MllI568.gif' />

3. Clicking on the link icon in the table dynamically routes you to a page with more details about the player, check the URL for the unique id parameter.
<img src='https://i.imgur.com/FD1mhgb.gif' />

4. Stretch Feature: The user is able to toggle between either the doughnut graph or the bar graph, bar graph is shown by default.
<img src='https://i.imgur.com/JrGn98s.gif' />

5. Stretch Feature: An extra table of data relating to the graphs is shown rendered when the toggle is activated.
<img src='https://i.imgur.com/qvDV9Ep.gif' />



<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  
[ScreenToGif](https://www.screentogif.com/) for Windows


## Notes

Managing the state between components was a challenge at times, until I realised the importance of the component hierarchy and structure to my code, which made it much easier to pass the state to child components. In the future, I might consider using something like Redux to help with managing the state. Spent a lot of time on this project and learned a ton through the process, looking forward to the next one.
 
## License

    Copyright [2023] [Michael Morriss]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
