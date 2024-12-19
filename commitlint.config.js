export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-pattern': [
      44, 
      'always', 
      /^[A-Z]+-\d+ \[(feat|fix|chore)\]: .+/
    ]
  }
};