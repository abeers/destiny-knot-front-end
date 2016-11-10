### Destiny Knot
![Screenshot](/public/assets/images/DestinyKnot.png?raw=true "Team Member Screen")

## Technologies
Front end: Ember.js
Back end: Ruby on Rails with SQL database

## General Approach
As a lifelong Pokemon fan, I wanted to make a tool that made competitive team building easier. The vision is to take everything into account: types, abilities, stats, items, tiers, etc. and find the optimal partners to plug in holes in the team. The current iteration lays the foundation for the rest of the application.

Before I started coding, I wanted to see if I could find a resource for all of the data I would need, as inputting it all by hand may have taken a week by itself. Luckily, veekun's Pokedex had .csv files for everything I needed and more. I could not have accomplished what I did nearly as quickly without those files, so shout out to everyone associated with that project.

I quickly realized that based on the .csv files, I would need a lot of relationships. I believe the current iteration has 12 tables with at least as many relationships. Somewhat surprisingly, the relationships were not as complicated as I was initially expecting. I sketched out a quick ERD and started coding.

There was definitely a learning curve associated with getting used to Ember. I was able to build out my Rails API in about half of a day. Ember took about 3.5 days until I was even somewhat comfortable with the process, and it didn't help that my models were so deeply nested. I did eventually get the hang of it though, and I made sure I had type effectiveness down pat for this release rather than trying too hard to implement everything I wanted. With this start, I feel I can move much more quickly and start packing in features in the next week or so.

## Planning
Will link this when I get a picture of them.

## Future Features
- Individual and team defensive scores
- Abilities
- Natures and EVs
- Find Partner
- Tiers
- Items
- Moves
