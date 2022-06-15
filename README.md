# Vue My Cocktails
A really simple Vue Frontend that consumes the small  [www.thecocktaildb.com.com](https://www.thecocktaildb.com) public API.

Simple project popped together over two days after work to show a friend some nice things about Vue2.
Built with Vue CLI, Bootstrap-vue ( mostly to save some time via inputs etc ), uses vuex and a nice SFC structure. Tried to follow DRY as well as time would allow.

## Install and run 
 **To Install node modules:**
	 *npm i* 

 **To Run locally:**
 *npm run serve*

## Notes / etc
- cocktails API gives us back ingredients on a drink via 'strIngredient1, strIngredient2, etc'. If I had more time I'd likely build a loop to automatically sort and show all non null values etc.
- In a real world project tests would be written alongside each SFC, especially for store items,  Via VueTestUtils etc.
- There's a persistent store via vuex-persistedstate, because this isn't hooked up to a backend, I didn't want confusion to arise when viewing a single product and refreshing. Store clears on browser close.
-  I've done some media queries for mobile @650 - but in my experience with Vue-Bootstrap items such as the dropdown / toaster notifications can be.... interesting.

- If you are wondering, my favourite cocktail is an old fashioned.

