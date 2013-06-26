## Basics

Welcome to your Moovweb project! Moovweb is a great way to build a compelling front-end for a website. The files in this project describe the changes we want to make to the front end of a site. There's places in this project to add new images (assets/images/), styles (assets/stylesheets/) and even manipulate HTML (scripts/).

## Before Running This

To run this project, you must have the Moovweb SDK installed on your system. Installation is easy - just go to [the download page on the Moovweb site](http://console.moovweb.com/download) to download and install.

We have lots of informative guides, videos, live help, documentation, and even a book on how to use Moovweb. You should be able to get up and running in 30 minutes if you visit [console.moovweb.com](http://console.moovweb.com).

You might find [the page about the scripts folder](http://console.moovweb.com/learn/reference/configuration/pages) useful for starting to write Tritium, and our [documents on the stylesheets folder](http://console.moovweb.com/learn/reference/configuration/stylesheet) for information on how we structure our stylesheets.

## Launching

Typically, on Mac or Linux, just browse to this project folder in a terminal and then run the following command:

    sudo moov server --auto-hosts

Then, just browse to [mlocal.igadgetcommerce.com](http://mlocal.igadgetcommerce.com) and you are ready to start developing!

## Deployment

Moovweb uses a git-based deployment system. To deploy, just type:

    git add --all
    git commit -m 'New code'
    git push origin master

## More Info

See detailed documentation for Moovweb at [console.moovweb.com](http://console.moovweb.com).

## Domains
Remember to put all domains you're going to hit in your etc/hosts or to run your server with the `-auto-hosts=true` option.


    127.0.0.1   mlocal.igadgetcommerce.com

## jQuery Mobile Template

We've just launched Moovweb templates! This is the jQuery mobile template that comes prepackaged with jQuery mobile and helper functions and templates to get you started.

Three new functions at your disposal:

1. template()
- merge()
- placeholder()

### template()

This function is simply used to inject your template into the page.

It takes 3 parameters:

1. The name of the template
- The ID you want your template to have
- The location of where you want it injected in relation to the current scope.

The template HTML will then be injected as specified and wrapped in a div with the ID that you specified.

jQuery Mobile Templates we've provided for you:

- \_collapsible
- \_collapsible_set
- \_listview
- \_navbar
- \_panel
- \_header
- \_footer

These templates can be found and altered in the `functions/templates/jqm` folder.

More details on jQuery Mobile can be found at [http://jquerymobile.com/](http://jquerymobile.com/).

### Adding your own template

If you'd like to add your own, simply add the HTML markup to a document in the functions/templates/ folder and then add a matching to that template in the templates.ts function file all the way at the bottom inside the read_helper() function.

### merge()

This function was designed for filling in your templates (although it really could be used for anything you want).

It takes 2 parameters:

1. The xpath to the element in your template you'd like to target for the merge.
- The xpath to the element on the page that you want to merge into your template target.

The page element will then be merged into the template element keeping it's own ID. The classes and children of both the template and the page elements will be merged.

Behavior Notes:

- The attributes of the template element will clobber those of the page element.
- If there is more than one page element they will each be merged into the template element individually.
- If there is more than one template element then all the page elements will be merged into all the template elements. This may result in duplicate content but it seemed like the most intuitive behavior of the function.

### placeholder()

This function simply puts some text in the provided element.

It takes two parameters:

1. The xpath to the node where you want a placeholder
- The text to be put into the placeholder

The function will then simply insert a span with that text.

### Full Example

    template("_toggler", "my_toggler", "bottom") {
      placeholder(".//div[@class='_toggler_btn _bar_gray2']", "Category")
      merge(".//div[@class='_toggler_content']",
            "/html/body/ul[@id='list']")
      merge(".//div[@class='_bar_gray1']",
            ".//li")
    }

Please report any bugs to help@moovweb.com.
