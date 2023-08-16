能否为 theme 属性提供函数形式来实现配置的继承。

```ts
// preset -> theme
type ThemeConfig<T> =  T | ({ extend }: ThemeCtx) => T

const theme: ThemeConfig = {
  colors,
  accentColor: ({ extend }) => ({
    //  支持函数形式
    ...extend('colors'),
    auto: 'auto',
  }),
}
```

## Why

当一个 preset 中有大量 theme 需要配置，其中有些配置在默认情况下是互相继承的。这时候使用者需要编写大量重复的配置。

如下例子中：有一个 preset 中有 colors 的配置，而 `accentColor`,`borderColor`,`fill` 都继承自 `colors` 配置。

```ts
// preset -> theme
const colors = {
  black: '#000',
  white: '#fff',
  ....
}

const theme = {
  colors: colors,
  accentColor: {
    ...colors,
    auto: 'auto',
  },
  borderColor:{
    ...colors,
    DEFAULT: colors.gray.200,
  },
  fill: {
    ...colors,
    none: 'none',
  }
}
```

当用户使用该 preset 且需要自定义配置时，需要对每一个 color 相关的配置(`accentColor`,`borderColor`,`fill`) 都写一遍

如：

```ts
// unocss.config.ts
export default defineConfig({
  theme: {
    colors: {
      color1: 'color1'
      color2: 'color2'
    },
    accentColor: {
      color1: 'color1'
      color2: 'color2',
      auto: 'auto',
    },
    borderColor:{
      color1: 'color1'
      color2: 'color2',
      DEFAULT: colors.gray.200,
    },
    fill: {
      color1: 'color1'
      color2: 'color2',
      none: 'none',
    }
  },
  presets: [
    myPreset(),
  ],
})
```

## Feat

理论上 preset 应该做到: 开发者只需要配置 `colors` 就能做到 `accentColor`,`borderColor`,`fill` 同步更改。同时也可以做到覆盖这些配置。

如：

```ts
// preset -> theme
const theme = {
  colors,
  accentColor: ({ extend }) => ({
    //  支持函数形式
    ...extend('colors'),
    auto: 'auto',
  }),
  borderColor: ({ extend }) => ({
    //  支持函数形式
    ...extend('colors'),
     DEFAULT: colors.gray.200,
  }),
}
```

```ts
// unocss.config.ts
const theme = {
  colors: {
    color1: 'color1'
    color2: 'color2'
  },
  accentColor: ({ extend }) => ({
    color1: 'color1'
    color2: 'color2'
    DEFAULT: 'transparent',
  }),
}
```

我上述的例子中默认就是使用的 `extendTheme`, `extendTheme` 只是将 theme 配置对象深度合并，还是需要更改每一个配置，并不能满足需求的。

如：

```ts
// unocss.config.ts
defineConfig({
  extendTheme:{
    colors: {
      color1: 'color1'
      color2: 'color2'
    },
    accentColor: {
      color1: 'color1'
      color2: 'color2',
      auto: 'auto',
    },
    borderColor:{
      color1: 'color1'
      color2: 'color2',
      DEFAULT: colors.gray.200,
    },
    fill: {
      color1: 'color1'
      color2: 'color2',
      none: 'none',
    }
  }
})
```

如果支持函数式的话，只需要更改 `colors` 配置, `accentColor`,`borderColor`, `fill` 这些继承自`colors` 的配置都能生效。

```ts
// unocss.config.ts
defineConfig({
  extendTheme:{
    colors: {
      color1: 'color1'
      color2: 'color2'
    },
  }
})
```
