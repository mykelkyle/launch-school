$(() => {
  let posts = [];
  posts.push({
    title: "Lorem ipsum dolor sit amet",
    published: "April 1, 2015",
    body: "<strong><i>Sed ut perspiciatis</i></strong> unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    tags: ["Food", "Cooking", "Vegetables"],
  });
  posts.push({
    title: "Lorem ipsum dolor sit amet",
    published: "April 2, 2015",
    body: "<strong><i>Sed ut perspiciatis</i></strong> unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    tags: [],
  });

  console.log(posts);

  let postsTemplate = Handlebars.compile($("#posts").html());
  Handlebars.registerPartial("tags", $("#tags").html());

  posts.forEach((post) => {
    $("body").append(postsTemplate(post));
  });
});
