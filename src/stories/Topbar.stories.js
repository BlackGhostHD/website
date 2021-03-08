import Topbar from '../components/Topbar.vue';

export default {
  title: 'Example/Topbar',
  component: Topbar,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Topbar },
  template:
      '<topbar />',
});

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
