export default {
  items: [
    {
      name: 'Protected Admin',
      url: "/admin",
    },
    {
      url: null,
      name: 'Account',
      children: [
        {
          url: "/account",
          name: 'Account',
        },
        {
          url: "/account-details",
          name: 'Account details'
        },
        {
          url: "/user-manager",
          name: 'Users'
        },
      ]
    },
    {
      name: 'Macro overview',
      url: "/macro/overview",
    },
    {
      name: 'Creators',
      children: [
        {
          url: "/create-tag",
          name: 'Tag'
        },
        {
          url: "/create-inter-tag",
          name: 'Inter tag'
        },
        {
          name: 'HTML generator',
          url: "/html-generator",
        },
        {
          url: "/convert-gpt",
          name: 'Convert GPT'
        },
      ]
    },
    {
      title: true,
      name: 'Log In'
    },
    {
      url: "/login",
      name: 'Login'
    },
    {
      url: "/register",
      name: 'Register'
    },
  ]
};