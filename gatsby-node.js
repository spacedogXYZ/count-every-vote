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

  const statePageTemplate = path.resolve(`src/templates/State.Page.tsx`);
  statePages.forEach(node => {
    createPage({
      path: `/2020/${node.state}`,
      component: statePageTemplate,
      context: {
        state: node.state,
        title: node.title,
      }
    });
  });
};