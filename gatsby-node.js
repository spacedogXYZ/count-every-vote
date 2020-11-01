const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const statePages = [
    {state:"FL", title:"Florida"},
    {state:"GA", title:"Georgia"},
    {state:"MI", title:"Michigan"},
    {state:"OH", title:"Ohio"},
    {state:"PA", title:"Pennsylvania"},
    {state:"TX", title:"Texas"},
    {state:"WI", title:"Wisconsin"},
  ];

  const statePageTemplate = path.resolve(`src/templates/State.Data.tsx`);
  statePages.forEach(node => {
    let slug = node.title.replace(' ','-').toLowerCase();
    createPage({
      path: `/${slug}/data`,
      component: statePageTemplate,
      context: {
        state: node.state,
        title: node.title,
        countSlug: slug, // needs to match ghost pages
      }
    });
  });
};