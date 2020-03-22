const { RouteTypes } = require('@scullyio/scully');

const { Blogs } = require('./plugins/blogsPlugin');


exports.config = {
  projectRoot: "./src",
  projectName: "scully-fireblogs",
  outDir: './dist/static',
  routes: {
    '/blog/:slug': {
      type: Blogs,
      url: 'http://localhost:4200/assets/blogs.json',
    }
  }
}
