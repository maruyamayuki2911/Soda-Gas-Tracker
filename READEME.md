
---

# Soda Gas Tracker

炭酸水メーカーの **ガス残量を管理するためのフロントエンドWebアプリ** です。
ボタン押下回数（秒数）をもとに CO₂ ガスの消費量を計算し、
**残りガス量・作成可能な炭酸水量をリアルタイムで可視化**します。

フロントエンドのみで完結し、学習・個人開発用途を想定した設計になっています。

---

## デモ

* [GitHub Pages](https://maruyamayuki2911.github.io/Soda-Gas-Tracker/)
* [GitHub Repository](https://github.com/maruyamayuki2911/Soda-Gas-Tracker)

---

## 主な機能

### ガス管理機能

* ガス注入ボタンの押下秒数を入力
* 秒数に応じた CO₂ 消費量の計算
* 残りガス量のリアルタイム更新
* ガス残量を視覚的に表示

### 炭酸水量計算

* 現在のガス残量から作成可能な炭酸水量（L）を算出
* ガス残量の減少に応じて自動更新

### 入力バリデーション

* 数値以外（NaN / 文字列 / null）の入力を拒否
* 0 未満の値をエラーとして検出
* ユーザー向けにわかりやすいエラーメッセージを表示

---

## 使用技術

| 分類      | 技術                      |
| ------- | ----------------------- |
| フロントエンド | HTML / CSS / JavaScript |
| テスト     | Jest                    |
| 状態管理    | JavaScript（変数管理）        |
| ホスティング  | GitHub Pages            |

---

## 画面構成

* メイン画面

  * ガス残量表示
  * 作成可能な炭酸水量表示
  * 秒数入力フォーム
* エラーメッセージ表示エリア

---

## ロジック設計

### 入力値検証（validateInput）

```js
export function validateInput(value, label) {
  if (!Number.isFinite(value) || value < 0) {
    throw new Error(`${label}は0以上の数値を入力してください。`);
  }
}
```

* **Number.isFinite** を使用し、NaN / Infinity / 非数値を一括排除
* ロジックと表示文言を分離するため、`label` を外部から注入

---

## エラーメッセージ定義

```js
export const ERROR_MESSAGES = {
  INVALID_NUMBER: (label) => `${label}は0以上の数値を入力してください。`,
};
```

* エラーメッセージは定数ファイルに集約
* 表示文言の変更が容易な設計

---

## テスト

### 異常系テスト（Jest）

* NaN を渡した場合にエラーになる
* 文字列を渡した場合にエラーになる
* null を渡した場合にエラーになる

```js
describe('validateInput:異常系', () => {
  test('NaNはエラーになる', () => {
    expect(() => validateInput(NaN, '秒数')).toThrow();
  });
});
```

---

## 設計の工夫

### ● ロジックと表示の分離

* validateInput は「正しい値かどうか」だけを判断
* 文言は定数で管理

### ● テスト駆動を意識

* 先に異常系テストを作成
* 最小実装 → リファクタリングの流れで実装

---

## セキュリティ・品質対策

| 対策   | 内容                       |
| ---- | ------------------------ |
| 入力検証 | NaN / null / 文字列 / 負数を排除 |
| 保守性  | エラーメッセージの定数化             |
| テスト  | Jest によるユニットテスト          |

---

## セットアップ

```bash
git clone https://github.com/maruyamayuki2911/Soda-Gas-Tracker.git
```

ブラウザで `index.html` を開くだけで動作します。

テスト実行：

```bash
npm test
```

---

## 今後の改善予定

* ガス残量を localStorage に保存
* グラフ表示（履歴管理）
* UI / UX の改善（Material Design 対応）

---