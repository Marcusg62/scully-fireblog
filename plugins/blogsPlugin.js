const {registerPlugin, routeSplit, httpGetJson} = require('@scullyio/scully');

const Blogs = 'blogs';

const blogsPlugin = async(route, config) => {

  handledRoutes = [
    {route: '/blog/Popular Blog Post #2'},
    {route: '/blog/Awesome Blog Post #1'},
    {route: '/blog/Wonderful Blog Post #3'}
  ]
  return handledRoutes;
};

// no validation implemented
const blogsPluginValidator =  async () => [];

registerPlugin('router', Blogs, blogsPlugin);
exports.Blogs = Blogs;