## Next.js Boilerplate

Next.js を利用したアプリケーション開発を行う際の個人的なボイラープレートです。

## 基本的な構成
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [Jest](https://jestjs.io/) / [Testing Library React](https://testing-library.com/docs/react-testing-library/intro/) on TS Node
- [Storybook](https://storybook.js.org/)

## ディレクトリ構成
基本的に Next.js の構成を踏襲します。

## React エコシステム
後述するエコシステムについては、特にボイラープレートに含めていません。  
開発するアプリケーションに適するものを選択していく形になります。

### ステートマネジメント
- [ContextAPI](https://reactjs.org/docs/context.html)
- [Redux](https://redux.js.org/) + α
- [Recoil](https://recoiljs.org/)
- ...and more

### APIレスポンスのキャッシュ
- [swr](https://github.com/vercel/swr)
- [react-query](https://github.com/tannerlinsley/react-query)

### APIクライアント生成、型定義
- [openapi-generator](https://github.com/OpenAPITools/openapi-generator)
- [aspida](https://github.com/aspida/aspida)
- [typed-rest-client](https://github.com/Microsoft/typed-rest-client)
- [tRPC](https://trpc.io/)

### API モック
- [prism](https://github.com/stoplightio/prism)
- [Mock Service Worker](https://mswjs.io/)

## CI / CD
CI / CD に同様に開発体制に適したものを導入してください。
