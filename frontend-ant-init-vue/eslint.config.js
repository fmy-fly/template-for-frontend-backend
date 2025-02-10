import pluginVue from 'eslint-plugin-vue';
import vueTsEslintConfig from '@vue/eslint-config-typescript';
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  ...pluginVue.configs['flat/essential'],
  ...vueTsEslintConfig(),
  skipFormatting,

  // 自定义规则覆盖
  {
    name: 'app/custom-rules',
    rules: {
      // 关闭未使用变量报错
      'no-unused-vars': 'off', // 针对普通 JavaScript 文件
      '@typescript-eslint/no-unused-vars': 'warn', // 针对 TypeScript 文件
      '@typescript-eslint/no-explicit-any': 'warn', // 仅发出警告，而非报错
    },
  },
];
