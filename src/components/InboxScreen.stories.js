// src/components/InboxScreen.stories.js

import React from 'react';
import { Provider } from 'react-redux';
import { action } from '@storybook/addon-actions';
import { PureInboxScreen } from './InboxScreen';
import * as TaskListStories from './TaskList.stories';

// A super-simple mock of a redux store
const store = {
  getState: () => {
    return {
      tasks: TaskListStories.Default.args.tasks,
    };
  },
  subscribe: () => 0,
  dispatch: action('dispatch'),
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  component: PureInboxScreen,
  // Patrick help me with this syntax!
  decorators: [story => <Provider store={store}>{story()}</Provider>],
  title: 'InboxScreen',
};

const Template = args => <PureInboxScreen {...args} />;

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  error: 'Something',
};
