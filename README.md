# Frontend Framework Showdown 2020

## Build an Image Search App with:
* Vanilla JS
* React.js + Hooks
* Angular 9
* Vue.js + Composition API
* Svelte
* ???? - Some lesser known framework - We will vote!

## In Scope

#### Each app will demonstrate the following concepts:
* Setup / CLI Tools
* User Input
* DOM Events
* Conditional Rendering
* API Requests
* Rendering Lists of Data

## Out of Scope

#### Will revisit these in a future showdown:
* Pagination
* Testing
* Routing
* Global State Management
* SCSS / CSS Modules

## API

* All apps will use `fetch` unless the framework has something built in.
* All apps will contact the Nature Image Search API:
  * https://nature-image-api.now.sh/search?q=
  * View the source code here: https://github.com/CodingGarden/nature-image-api

## Structure

All apps will use the following HTML:

```html
<h1>Image Search</h1>
<form>
  <label for="searchTerm">Search Term</label>
  <input class="u-full-width" type="text" id="searchTerm" name="searchTerm">
  <button type="submit">Search</button>
</form>
<img id="loadingImage" src="https://i.imgur.com/LVHmLnb.gif">
<section class="images">
<!-- images loaded dynamically here -->
</section>
```

## Styles

All apps will use the skeleton CSS framework:

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css">
```

And use these styles:

```css
body {
  width: 80%;
  margin: 2em auto 0 auto;
}

.images {
  column-count: 3;
}

img {
  width: 100%;
}

@media (max-width: 1200px) {
  .images {
    column-count: 2;
  }
}

@media (max-width: 800px) {
  .images {
    column-count: 1;
  }
}
```

---
# TODO

## Vanilla JS
---

* [ ] Setup
* [ ] User Input, DOM Events
  * [ ] Retrieve the search term from the input when the form is submitted
* [ ] Conditional Rendering
  * [ ] Show loading image when form is submitted
* [ ] API Requests
  * [ ] Request the images from the API with the given search term
* [ ] Rendering Lists of Data
  * [ ] Append the API results to the page
* [ ] Conditional Rendering
  * [ ] Hide loading image

## React.js + Hooks
---

* [ ] Setup
* [ ] User Input, DOM Events
  * [ ] Retrieve the search term from the input when the form is submitted
* [ ] Conditional Rendering
  * [ ] Show loading image when form is submitted
* [ ] API Requests
  * [ ] Request the images from the API with the given search term
* [ ] Rendering Lists of Data
  * [ ] Append the API results to the page
* [ ] Conditional Rendering
  * [ ] Hide loading image

## Angular 9
---

* [ ] Setup
* [ ] User Input, DOM Events
  * [ ] Retrieve the search term from the input when the form is submitted
* [ ] Conditional Rendering
  * [ ] Show loading image when form is submitted
* [ ] API Requests
  * [ ] Request the images from the API with the given search term
* [ ] Rendering Lists of Data
  * [ ] Append the API results to the page
* [ ] Conditional Rendering
  * [ ] Hide loading image

## Vue.js + Composition API
---

* [ ] Setup
* [ ] User Input, DOM Events
  * [ ] Retrieve the search term from the input when the form is submitted
* [ ] Conditional Rendering
  * [ ] Show loading image when form is submitted
* [ ] API Requests
  * [ ] Request the images from the API with the given search term
* [ ] Rendering Lists of Data
  * [ ] Append the API results to the page
* [ ] Conditional Rendering
  * [ ] Hide loading image

## Svelte
---

* [ ] Setup
* [ ] User Input, DOM Events
  * [ ] Retrieve the search term from the input when the form is submitted
* [ ] Conditional Rendering
  * [ ] Show loading image when form is submitted
* [ ] API Requests
  * [ ] Request the images from the API with the given search term
* [ ] Rendering Lists of Data
  * [ ] Append the API results to the page
* [ ] Conditional Rendering
  * [ ] Hide loading image

## ???? - Some lesser known framework - We will vote!
---

* [ ] Setup
* [ ] User Input, DOM Events
  * [ ] Retrieve the search term from the input when the form is submitted
* [ ] Conditional Rendering
  * [ ] Show loading image when form is submitted
* [ ] API Requests
  * [ ] Request the images from the API with the given search term
* [ ] Rendering Lists of Data
  * [ ] Append the API results to the page
* [ ] Conditional Rendering
  * [ ] Hide loading image
