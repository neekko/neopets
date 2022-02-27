**How-To

Go to [https://www.neopets.com/userinfo.phtml](https://www.neopets.com/userinfo.phtml) and paste the code at the beginning of the **About Me** box, then click Change Your Details. The result will disable the carousel on your user lookup and display all your pets with their info.

```
<style>
#bxlist {width: 100% !important;}
#bxlist li {float: none !important; display: inline-block;}
.bx-viewport {height: auto !important;}
.bx-wrapper {max-width: none !important;}
.bx-clone, .bx-controls {display: none !important;}
</style>
```

**Note:** Saving your user profile will reformat the code and decrease your remaining available characters significantly, so please ensure that you have your original lookup code saved somewhere else just in case you go over the limit. Any characters that exceed the 5000 limit will be deleted automatically!!!!