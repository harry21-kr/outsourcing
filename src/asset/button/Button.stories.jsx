import { BrowserRouter as Router } from 'react-router-dom';
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  decorators: [
    (Story) => (
      <Router>
        <Story />
      </Router>
    )
  ],
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: '버튼 내용.'
    },
    variant: {
      control: 'select',
      description: '버튼 색상.',
      options: ['default', 'secondary']
    },
    size: {
      control: 'select',
      description: '버튼 크기',
      options: ['default', 'medium']
    },
    type: {
      control: 'text',
      description: '버튼 타입<br/> (button / submit / reset)'
    },
    fullWidth: {
      control: 'boolean',
      description: '버튼 너비를 100%로 설정'
    },
    rounded: {
      control: 'boolean',
      description: '버튼 모서리<br/>💎 (boolean)'
    },
    href: {
      control: 'text',
      description: 'react-router-dom의 Link를 사용하여<br/>페이지를 이동합니다.'
    }
  },
};

export const Primary = {
  args: {
    variant: 'default',
    size: 'medium'
  }
};

export const Secondary = {
  args: {
    variant: 'secondary',
    size: 'medium'
  }
};

export const Rounded = {
  args: {
    variant: 'secondary',
    rounded: true
  }
};

export const Link = {
  args: {
    href: '/',
    variant: 'secondary',
    rounded: true
  }
};
