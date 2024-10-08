---
title: Ant Design 테마 커스터마이징 뿌시기(ConfigProvider)
date: 2024-01-13
desc: 내 멘탈을 붕괴시킨 디자인 시스템 테마 커스텀, 어떻게 헤쳐나갔나?
tags: [REACT, NEXT]
---

## 들어가며

Antd 디자인 시스템으로 기업 내부 서비스를 구축하는 과제에 투입되었다. 그 중에서도 Antd 컴포넌트 테마를 커스텀하는 것이 나의 롤이었다. 이 과제에서 테마 커스텀의 범위라고 하면, '디자인 토큰(Design Token)’으로 디자인 시스템의 테마, 스타일 등을 제어하는 것까지이고, 이 외 Antd에서 지원하지 않는 디자인 토큰은 별도 CSS를 통해 일부 반영해주어야 했다.

그러나 Antd의 디자인 토큰의 양이 워낙 방대하고, 문서에서 Token 목록을 제공하고 있지만 해당 토큰이 어떤 부분의 스타일을 담당하는지 매칭하기 쉽지 않았다. 게다가 대체 어떤 규칙을 갖고 해당 토큰을 사용하게되 되는지 규칙성을 찾을 수 없었고, 목록에 없는 토큰을 사용하는 컴포넌트도 있었다.

나는 디자인팀과 협업으로 모든 토큰 부분을 정의해야 했는데, 그야말로 모두 멘붕상태에 빠질 수 밖에 없었다. 서치를 해보아도 유사한 상황은 나오지 않아서 이 상황을 어떻게 헤쳐나갔는지 과정을 기록해보려한다.

> 참고사항
>
> - Antd에서 제공하는 피그마 파일을 활용하여 토큰, 컴포넌트의 타입별 디자인 파일을 확인 가능
> - 무료 버전은 최신 버전을 지원하지 않고 일부 컴포넌트만 제공한다는 단점
> - 개발과 디자인의 토큰과 컴포넌트의 싱크를 맞추려면 결국 유료 결제가 필요

## 1. 디자인 토큰이란?

먼저 디자인 토큰이라는 개념에 대해 깊은 이해까지는 아니더라도 간단한 이해가 필요했다. 개발의 입장에서 보면 변수라고 생각하면 이해가 쉬울 것이다. 컴포넌트의 스타일을 하나의 변수로 관리한다. 예를 들어, 컴포넌트의 스타일인 폰트, 사이즈, 컬러 등을 하나의 변수로 관리할 수 있다는 말이다.

Ant.D 에는 **Seed Token, Map Token, Alias Token,** 세 개의 계층으로 토큰이 분류되어있다. 이들의 관계는 서로 상속(파생) 관계다.

> [Ant Design - Design Token](https://ant.design/docs/react/customize-theme)

- Seed Token:
  - 테마의 근원, 즉 베이스가 되는 토큰
  - 즉, 다른 토큰에 영향을 미치는 토큰
- Map Token:
  - Seed 토큰에서 파생되어 나오는 토큰
  - Antd의 내부 알고리즘에 따라 자동으로 계산되어 나오는 토큰
    - colorPrimary 의 값을 변경하면 colorPrimaryBg의 값도 내부 알고리즘에 따라 자동으로 계산되어 생성된다.
- Alias Token:
  - 기본적으로 Map Token 또는 특별하게 처리하기 위한 토큰인 공통 스타일을 일괄적으로 제어하는 데에 사용되는 토큰
  - 개인적으로 토큰의 역할에 따라 네이밍이 결정되는 느낌인 것 같다.
  - colorPrimary (seed) → colorPrimaryBg(map) → **controlOutline**(alias)

Ant.D에서 문서에서 이들의 라이프 사이클을 보여주는 사진을 가져왔으니 참고하면 좋을 것 같다.

<em>Ant Design - Life of Design Token</em>

## 2. 테마 커스터마이징 준비

테마를 커스텀하는 데에는 두가지 방법이 있다.

1. Antd 컴포넌트의 클래스, 속성 등을 활용하여 css에서 직접 수정하는 방법
2. Antd 의 ConfigProvider를 활용하는 방법

해당 과제에서는 2번 방법을 선택했는데, 1번이 2번 방법에 비해 사이드 이펙트가 발생할 확률이 높다고 판단했기 때문이다. 1번을 선택했다면, 아마도 이 글을 작성하고 있지 않았을 것이다.

### 2.1 ConfigProvider

테마 초기 설정 방법은 간단하다. Ant.D에서 제공하는 `ConfigProvider` 로 테마를 지정할 수 있다. theme를 관리할 수 있는 파일을 분리하여 작업했다.

```tsx:src/index.tsx
import { ConfigProvider } from 'antd';
import theme from 'styles/theme';

const App = () => (
  <ConfigProvider theme={theme}>
    ...
  </ConfigProvider>
);
```

Ant Design 테마는 글로벌 토큰과 컴포넌트 토큰으로 관리할 수 있다.

- Global Token - 모든 컴포넌트에 대하여 전역적인 토큰을 관리
- Component Token - 각 컴포넌트에 대한 컴포넌트 토큰

```tsx:src/styles/theme/index.ts
const theme = {
  token: {
    // global token
  },
  components: {
    // component token
  },
};
```

## 3. 문서 적극 활용하기

디자이너는 토큰의 사용 용도에 따라 일관적인 디자인이 필요하고, 개발은 디자인에 따라 토큰으로 커스텀이 가능한지의 범위 및 여부를 파악해야한다. 디자이너와 개발의 싱크가 특히나 중요한 업무였기 때문에 2주가량 회의실에 살다시피 했다.

### 3.1 Global Token

- [Customize Theme - Seed Token](https://ant.design/docs/react/customize-theme#seedtoken) 에서 [Seed Token, Map Token Alias Token]파트 확인
- 각 컴포넌트를 커스텀하기 전, 위 문서를 참고하여 Global Token을 먼저 정의

### 3.2 Theme Editor

[테마 에디터](https://ant.design/theme-editor)에서 Component Token과 Global Token을 시각적으로 확인할 수 있다.

- 특히 컴포넌트 탭에서 각 컴포넌트가 사용한 토큰(글로벌/컴포넌트)을 변경하면서 확인할 수 있다.
- `Comp` 태그가 붙은 토큰은 해당 컴포넌트에서만 사용할 수 있는 특수 토큰이다.
- 태그가 없는 토큰은 Global 토큰을 해당 컴포넌트에서만 변경할 수 있는 토큰이다.

  <em>Ant Design - Theme Editor</em>

- **테마 에디터 단점**:
  - 에디터에 예제 적어서 개발, 디자인팀 모두 특정 토큰이 어디에 사용되는지 확인이 어려움
  - 글로벌 토큰을 사용하고 있지만, 목록에는 없는 경우가 있어 추측으로 테스트해야하는 경우도 있다.

### 3.3 Component - Design Token

컴포넌트 페이지에서 하단의 Design Token을 확인한다. (ex.[버튼 컴포넌트 - Design Token](https://ant.design/components/button#design-token))

- 테마 에디터보다 디테일한 사용 용도를 알 수 있다.
- 해당 컴포넌트에서만 사용하는 Component Token과 Global Token을 확인
- 단점: 글로벌 토큰을 사용하지만, 목록에는 없는 경우가 있어 추측으로 테스트해야하는 경우도 있다.

## 4. 테마 커스터마이징!

> 부제: 스타일 변수로 유지보수성 높이기

토큰으로 테마를 관리하듯, 유지보수를 위해 동일한 값을 두 번 수정하는 일이 없도록 각 토큰에 대한 값을 변수로 관리하기로 했다.

### 4.1 토큰 변수 정의

변수를 관리하는 파일을 생성하여 변수를 정의한다.

```scss:src/styles/base/_variables.scss
// global
$color-primary: #0000ff;

// component
$input-padding-block: 8px;
```

다른 scss 파일에서 사용할 때는 다음처럼 사용할 수 있다.

```scss:*.scss
@import 'src/styles/base/variables';

button {
  background: $color-primary;
}
```

### 4.2 scss 변수를 테마에 적용하기

스타일 변수를 ts 파일에서 사용하려면 변수를 export 해야했고 아래 링크에서 해결 방법을 찾았다.  
https://github.com/webpack-contrib/sass-loader/issues/951#issuecomment-1139555654

핵심은 variables.**module.scss** 를 사용하는 것이다.

```scss:src/styles/variables.module.scss
@import '../base/variables';

:export {
  colorPrimary: $color-primary;
  inputPaddingBlock: $input-padding-block;
}
```

```ts:src/styles/theme/index.ts
import variables from './_variables.module.scss';

const { colorPrimary, inputPaddingBlock } = variables;

const theme = {
  token: { // global
    colorPrimary: colorPrimary,
  },
  components: { // components
    Input: {
      paddingBlock: inputPaddingBlock,
      // 각 컴포넌트에서도 글로벌 토큰을 사용할 수 있음
    },
  },
};

export default theme;
```

하나의 테마 값을 적용할 때마다 scss > module.scss > theme 세 단계를 거쳐야 한다는 번거로움이 있지만, 추후 관리가 쉬워질 것을 생각하면 괜찮은 방법같다.

## 5. 마주했던 문제들

### 5.1 디자인 테마 적용 시 레이아웃이 깨지는 경우

module.scss 파일에서 ts 파일로 export하는 과정에서 모든 스타일 값은 **string** 타입을 갖는다. 또 **'px'과 같은 단위**가 붙는 경우도 있는데 Antd에서는 토큰 값을 내부 알고리즘에 따라 자동으로 계산하는 알고리즘이 있기 때문에 간혹 입력한 값이 제대로 적용되지 않는 경우가 있다.

이런 경우를 대비하여 string 타입을 number 타입으로, 동시에 'px' 단위가 붙는다면 제거하는 함수를 추가했다.

```ts:src/styles/theme/index.ts showLineNumbers {5-6, 14}
import variables from './_variables.module.scss';

const { colorPrimary, inputPaddingBlock } = variables;

// string to number(and remove 'px'): 10px -> 10
const strintToNumber = (value: string) => Number(value.replace('px', ''));

const theme = {
  token: { // global
    colorPrimary: colorPrimary,
  },
  components: { // components
    Input: {
      paddingBlock: strintToNumber(inputPaddingBlock),
      // 각 컴포넌트에서도 글로벌 토큰을 사용할 수 있음
    },
  },
};

export default theme;
```

### 5.2 SVG 파일 임포트 타입에러

> Cannot find module 'styles/icons/ic-check-outlined.svg' or its corresponding type declarations.

```tsx
import checkOutlined from "styles/icons/ic-checkOutlined.svg";
```

tsx 파일에서 위 코드처럼 SVG 파일을 임포트했더니 에러가 발생했다. 타입 정의가 되어있지 않아 발생한 에러로
src/types 경로에 index.d.ts 파일을 생성하고 svg 파일에 대하여 타입 선언을 해주면 된다.

```ts:src/types/index.d.ts
declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default content;
}
```

d.ts 파일을 추가했으니 tsconfig.json 파일의 `typeRoots` 항목에 types/index.d.ts 파일을 추가해준다.

```json:tsconfig.json showLineNumbers {4}
{
  "compilerOptions": {
    // ...
    "typeRoots": ["./node_modules/@types", "@types", "types/index.d.ts"]
  },
}

```

### 5.2 SVG 파일 임포트 DOMException 에러

1번에러는 사라지고 새로운 에러가 발생했다. Document에서 createElement 실행을 실패했다고 한다.
리액트 컴포넌트로 사용할 수 있도록 임포트 문을 변경해줘야한다.

> Failed to execute 'createElement' on 'Document': The tag name provided ('/static/media/check-outlined.448994d4bf340098a6b4bafc8cd6fb74.svg') is not a valid name.

```tsx
import { ReactComponent as CheckOutlined } from "styles/icons/ic-check-outlined.svg";
```

아이콘을 사용하는 컴포넌트 파일에서 위처럼 사용할 수도 있지만, 나는 import용 파일을 새로 생성하여 모든 아이콘을 관리했다.

```ts:styles/icons.ts
import { ReactComponent as CheckOutlined } from 'styles/icons/ic-check-outlined.svg';
export { ReactComponent as PlusOutlined } from './icons/ic-plus-outlined.svg';
export { ReactComponent as CloseOutlined } from './icons/ic-close-outlined.svg';
...
```

이렇게 작성하면 사용하는 파일에서 일일이 임포트문을 변경할 필요가 없다.

```tsx
import { CheckOutlined, PlusOutlined, CloseOutlined } from "styles/icons";

const Component = () => {
  return (
    <div className="container">
      <CheckOutlined />
      <PlusOutlined />
      <CloseOutlined />
    </div>
  );
};

export default Component;
```

### 5.3 Ant Design Icon Customize

가장 애를 먹었던 부분이다. 해당 프로젝트에서는 기본 아이콘을 사용하지 않고 별도의 아이콘을 사용해야했다.

앤트디자인에서는 다음과 같이 컴포넌트에 `icon` 을 사용할 경우, 앤트디 고유의 디자인대로 사이즈 및 컬러가 반영되는 것을 알 수 있다. **하지만 별도의 로컬 아이콘을 사용하려고 하면 제작된 아이콘의 컬러 그대로 적용되고 앤트디 고유의 스타일이 반영되지 않는 이슈가 발생했다.**

```tsx
<Button type="primary" shape="circle" icon={<SearchOutlined />} />
```

각 아이콘의 컬러, 사이즈를 앤트디와 같이 반영하려면, 결국 scss 파일에서 직접 컬러를 변경해줘야 하는 번거로움이 있었는데 이를 해결하기 위해 앤트디에서 사용하는 svg 코드를 분석해봤다.

#### 1. Ant Design SVG Code

개발자 도구로 살펴본 앤트디자인의 svg 코드를 살펴보자.

<em>Ant Desig SVG Code</em>

- svg 태그의 `width` 와 `height` 속성이 **1em** 값을 갖는 것을 확인할 수 있다.
  - 1em 은 해당 요소의 폰트 사이즈 만큼의 사이즈를 사용한다는 의미다.
  - 즉, font-size 가 16px로 적용되어있다면 아이콘 사이즈 또한 16 x 16 사이즈가 된다.
- svg 태그의 `fill` 속성값이 **currentColor**로 적용되어있다.
  - currrentColor는 부모 또는 자기 자신 요소의 color 값을 상속받는다.

#### 2. Local SVG Code

이제 내가 사용했던 svg 파일의 코드를 살펴보자.

```html
<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="..." fill="black" fill-opacity="0.45" />
</svg>
```

Ant Design의 svg 코드와의 차이점을 찾아보면, 아래 두가지를 찾을 수 있다.

1. `width`, `height`의 값이 고정되어 있다.
2. `fill` 속성과 `fill-opacity` 속성이 svg 태그가 아닌 path 태그에 붙어있다.

1번을 해결하기 위해 css 파일에서 다음처럼 수정해줬다.

```scss
.anticon svg {
  width: 1em;
  height: 1em;
  fill: currentColor;
  fill-opacity: 1;
}
```

2번을 해결하기 위해서는 svg 코드 자체를 수정해야한다. fill과 관련된 속성들을 모두 svg 태그로 옮겨준다.

```html
<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="black"
  fill-opacity="0.45"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="..." />
</svg>
```

이렇게 수정해주면 Antd 의 스타일대로 사이즈와 컬러 값이 반영되는 것을 확인할 수 있다!

### 주의할 점

아이콘의 컬러가 필수적으로 지정되어야 하는 svg 파일의 경우, 처음 상태그대로 fill 과 관련된 속성 path, circle, rect 등의 태그에 포함되어야 한다.

## 마무리

앤트디자인을 이렇게 까지 커스텀해본적은 처음이었다. 모든 과정이 멘붕의 멘붕의 멘붕이었지만 나름 잘 헤쳐나간 것 같다는 생각이 든다. 구글링을 해봐도 나와 같은 상황을 찾을 수 없었다. 혹시나 나와 같은 상황에 처한 사람들이 있다면 이 글이 도움이 되길 바란다.
