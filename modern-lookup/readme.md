## Introduction
This is my take on a modern version of the basic Neopets lookup. Nothing fancy other than taking all those old tables and updating their look to something more current. The header and footer are also modified.

## How-To

**!!!WARNING!!!** This lookup is very code heavy and doesn't allow for much customization beyond the bio and sidebar (darn that character limit!). Also be sure to save your previous lookup code/description to your own Github repository or as a `.txt` or `.html` file on your computer before using the new one, just in case you change your mind or mess up and want to roll back.

Go to [https://www.neopets.com/userinfo.phtml](https://www.neopets.com/userinfo.phtml) and replace all contents of the **About Me** box with the code in the [modern-lookup.html](https://github.com/neekko/neopets/blob/main/modern-lookup/modern-lookup.html) file. You may make any additional changes to the code as you see fit, but please do not remove the `<i>Custom lookup by neekko!</i>` part, which credits the original author.

If you encounter any issues or find any bugs, let me know!

## Customization
Modifying the CSS is ill-advised unless you know what you're doing. If you would like to change the colors, you may Ctrl/Cmd F the following hex codes and replace them with your own:

| Hex Code | Description & Usage |
| ------------- | ------------- |
| #ffd025  | yellow; header, footer, & table header background color (you also might want to delete `url("http://imgur.com/yKT6guP.png")` since it's a background image of the same color) |
| #faa819  | dark yellow; border color in headers |
| #ffeca8  | light yellow; user info & event bar below the nav |
| #ccc  | light gray; border around table contents |
| #faf9f6  | off-white; main background color |
| #000  | black; text color |

I did not include any link colors because I am fine with the default blue, but if you want to customize the links, paste the following code before the `</style>` tag, replacing **COLORNAME** with your hex codes or color names of choice:

```css
a {color: COLORNAME}
a:hover {color: COLORNAME}
```

**Note:** Saving your profile edits will auto-format the CSS and further reduce the number of remaining available characters.

## Example

[**Live Demo**](https://www.neopets.com/userlookup.phtml?user=neekko)

!["Modern Lookup" screenshot](https://imgur.com/F6rnXai.png)