import MovieButton from '../components/MovieButton.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/MovieButton',
  component: MovieButton,
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MovieButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<MovieButton v-bind="args">CLICK ME</MovieButton>',
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  isActive: false,
  isSearch: false,
};

export const Active = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Active.args = {
  isActive: true,
  isSearch: false,
};

export const SearchButton = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
SearchButton.args = {
  isSearch: true,
  isActive: true,
};