// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint'
    },
    env: {
        browser: true
    },
    extends: [
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        'plugin:vue/essential',
        // https://github.com/standard/standard/blob/master/docs/RULES-en.md
        'standard'
    ],
    // required to lint *.vue files
    plugins: [
        'vue'
    ],

    // add your custom rules here
    rules: {
        /*
            "off"或者0    //关闭规则关闭
            "warn"或者1    //在打开的规则作为警告（不影响退出代码）
            "error"或者2    //把规则作为一个错误（退出代码触发时为1）
        */
        // allow async-await
        'generator-star-spacing': 'off',

        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

        // 关闭语句强制分号结尾
        'semi': [0],

        // 缩进风格
        'indent': ["error", 4],

        // 引号类型 `` "" ''
        "quotes": [0, "single"],

        // 禁止在条件中使用常量表达式 if(true) if(1)
        "no-constant-condition": 0,

        // 大括号内是否允许不必要的空格
        "object-curly-spacing": [0, "never"],

        // 小括号里面要不要有空格
        "space-in-parens": [0, "never"],

        // 在最后以一行换行符结束
        "eol-last": 0,

        // 一行结束后面不能有空格
        "no-trailing-spaces": 2,

        // 必须使用全等
        "eqeqeq": 0,

        // 块语句中的内容不能为空
        "no-empty": 0,

        // 禁止对null使用==或!=运算符
        "no-eq-null": 0,

        // 不能用多余的空格
        "no-multi-spaces": 0,

        // 禁止非必要的括号
        "no-extra-parens": 0,

        // 禁止switch穿透
        "no-fallthrough": 0,

        // 禁止在块语句中使用声明（变量或函数）
        "no-inner-declarations": [0, "functions"],

        // 函数定义时括号前面有空格
        "space-before-function-paren": [0, "always"],

        // 禁止 else 语句内只有 if 语句
        "no-lonely-if": 0,

        // 禁止在循环中使用函数（如果没有引用外部变量不形成闭包就可以）
        "no-loop-func": 0,

        // 禁止在使用new构造一个实例后不赋值
        "no-new": 0,

        // 禁止使用new Object()
        "no-new-object": 0,

        // 禁止使用new Function
        "no-new-func": 0,

        // 禁止使用new创建包装实例，new String new Boolean new Number
        "no-new-wrappers": 0,

        // 不能调用内置的全局对象，比如Math() JSON()
        "no-obj-calls": 0,

        // 禁止使用八进制数字
        "no-octal": 0,

        // 禁止使用__proto__属性
        "no-proto": 0,

        // return 语句中不能有赋值表达式
        "no-return-assign": 0,

        // 不能使用undefined
        "no-undefined": 0,

        // 禁用var，用 let 和 const 代替
        "no-var": 2
    }
}
