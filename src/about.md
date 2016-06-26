---
title: About Me
layout: about.hbs
---

# Example
## Example 2
### Example 3
#### Example 4
##### Example 5
###### Example 6

*Example*
**Example**
~~Example~~

| Name | Description          |
| ------------- | ----------- |
| Help      | Display the help window|
| Close     | Closes a window     |
| Something | Does something else |

```javascript
    var EasingFunction = {
        linear: function (t) {
            return t;
        },
        easeInQuad: function (t) {
            return t * t;
        },
        easeOutQuad: function (t) {
            return t * (2 - t);
        },
        easeInOutQuad: function (t) {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        },
        easeInCubic: function (t) {
            return t * t * t;
        },
        easeOutCubic: function (t) {
            return (--t) * t * t + 1;
        },
        easeInOutCubic: function (t) {
            return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        },
        easeInQuart: function (t) {
            return t * t * t * t;
        },
        easeOutQuart: function (t) {
            return 1 - (--t) * t * t * t;
        },
        easeInOutQuart: function (t) {
            return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
        },
        easeInQuint: function (t) {
            return t * t * t * t * t;
        },
        easeOutQuint: function (t) {
            return 1 + (--t) * t * t * t * t;
        },
        easeInOutQuint: function (t) {
            return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
        }
    };
```

```html
    <html>
        <head>
            <title>Example Title</title>
        </head>
    </html>
```
> Here is some sort of
> block quote that spans over
>
> more than one paragraph
> how this will look is anybodys guess
>
> I suppose at some point i'll get around to fixing all of this


```markdown
    ## Example markdown
```

I've also encountered this same problem, as you said it is because metalsmith-templates is a dependency of metalsmith-tags. This plugin uses the metadata `template` whereas metalsmith-layouts requires the use of `layout` instead to provide the template/layout for the file. Below are a couple of solutions that I hope will help

##### 1: Editing metalsmith-tags locally
Changing its reference at [L138](https://github.com/totocaster/metalsmith-tags/blob/master/lib/index.js#L138) from `template` to `layout` has made it work perfectly fine.
```javascript
    // Generate a new file based on the filename with correct metadata.
    var page = {
      layout: opts.template,
      contents: '',
      tag: tag,
      pagination: {
        num: i + 1,
        pages: pages,
        tag: tag,
        files: pageFiles
      }
    };
```

##### 2: Writing a plugin to create a `layout` property using the `template` property.
This solution requires no messing with the plugin internals and only add a new layout field if there is not one already and a template field available.
```javascript
    .use(function (files, metalsmith, done) {
        Object.keys(files).forEach(function (file) {
            var data = files[file];

            // Only messes with metadata if there is no layout and a template
            if (!data.layout && data.template) {
                data.layout = data.template;
            }
        });
        done();
    })
```
##### 3: Updating metalsmith-tags
At the same time I also forked the plugin and made the changes to make it so that metalsmith-layouts is used instead of metalsmith-templates [brianbrewer/metalsmith-tags](https://github.com/brianbrewer/metalsmith-tags)

> Example of some sort of inner quote
> > Here?

</div>
</div>
<div class="card post">
<div class="container">

Using some very dank web html scripting pasting, i've managed to get from one page to another card. It's amazing the power of text onto a page using some sort of tempalting engine and a text editing language *cough* Metalsmith, Handlebars, Markdown *cough* Actually it's easier just to write it below:
```html
    </div>
    </div>
    <div class="card post">
    <div class="container">
```
