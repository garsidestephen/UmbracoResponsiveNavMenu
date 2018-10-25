# UmbracoResponsiveNavMenu
A free Umbraco Responsive Nav Menu.

It uses Font Awesome for the burger and drop down icons so you will need to include a ref in your page to:-
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous">

In your page Razor include:-
@Html.Partial("~/Views/Partials/Components/Nav.cshtml")

Also add to your pages a ref to the css and js files.  I have also included the SCSS files and es5 js if required. 


