import MovieList from '../components/MovieList.vue';
import movieDb from '../assets/db.json'

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/MovieList',
  component: MovieList,
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MovieList },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<MovieList v-bind="args" />',
});



export const Default = Template.bind({});
const movieList = movieDb.movies.splice(0, 10)
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  movieList: movieList
};