import MovieItem from '../components/MovieItem.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/MovieItem',
  component: MovieItem,
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MovieItem },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<MovieItem v-bind="args" />',
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
    movie: {
        "id": 4,
        "title": "Crocodile Dundee",
        "year": "1986",
        "runtime": "97",
        "genres": [
            "Adventure",
            "Comedy"
        ],
        "director": "Peter Faiman",
        "actors": "Paul Hogan, Linda Kozlowski, John Meillon, David Gulpilil",
        "plot": "An American reporter goes to the Australian outback to meet an eccentric crocodile poacher and invites him to New York City.",
        "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg0MTU1MTg4NF5BMl5BanBnXkFtZTgwMDgzNzYxMTE@._V1_SX300.jpg"
    }
};