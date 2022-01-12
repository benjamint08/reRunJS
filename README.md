# reRunJS

"A simple JavaScript file that allows you to 're-run' scripts."

##How to use it:

In your `<head>` of your HTML file, add:

`<script src="rerun.min.js></script>`

And then whenever you need to re-run a script, just use:

`rerun(document.getElementById('scriptId'));` < Doesn't have to be a getElementById, it just needs to be an Element
with the script tag.