## How-To

**Note:** Saving your user profile will reformat the code and decrease your remaining available characters significantly, so please ensure that you have your original lookup code saved somewhere else just in case you go over the limit. Any characters that exceed the 5000 limit will be deleted automatically!!!!


Go to [https://www.neopets.com/userinfo.phtml](https://www.neopets.com/userinfo.phtml) and paste the code at the beginning of the **About Me** box, then click the *Change Your Details* button:

```html
<style>
#bxlist {width: 100% !important; text-align: center; padding: 0; margin: 0 0 0 46px;}
#bxlist li {float: none !important; display: inline-block; margin: 10px!important;}
#bxlist img {margin-bottom: 10px;}
.bx-viewport {height: auto !important;}
.bx-wrapper {max-width: none !important;}
.bx-clone, .bx-controls, #bxlist li .medText > br, #bxlist li .medText > hr {display: none !important;}
</style>
```

The result is very basic and you may need to add your own CSS to match it with the rest of your custom lookup!

## Centering
The list of pets may appear slightly off-center if you are using a custom lookup. You may adjust the centering by locating `margin: 0 0 0 46px` and changing the last number. This setting is at the end of the second line (or Ctrl/Cmd F to find it quicker).

## "Before" Example

![Default pet display.](https://imgur.com/cV7YgHA.png)


## "After" Example

![Pet display with the above code!](https://imgur.com/MihiGW0.png)