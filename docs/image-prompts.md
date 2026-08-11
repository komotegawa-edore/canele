# カヌレサイト 画像生成プロンプト集

既存画像 `canele.png` の暖かみのあるイラスト風タッチに合わせ、柔らかく上品なスタイルで統一する。

## 共通指示（全画像に適用）

- **背景色**: 単色ブライトグリーン `#00FF00`（クロマキーグリーン）で塗りつぶし
  - 切り抜き（背景除去）を容易にするため、絵の中にグリーンを使わないこと
- **スタイル**: ステッカー風イラスト（くっきりした輪郭線 + 暖かい色彩）
- **対象物の周囲に十分な余白**を残すこと
- **カラーパレット（対象物）**: クリーム、キャラメルブラウン、テラコッタ、ゴールド（緑系は避ける）

### 切り抜き後の使い方
サイト上では白い縁取り（padding）+ 軽い傾き（±1.5deg）+ ドロップシャドウのステッカー演出を適用

---

## 1. bordeaux-street.png（STORY セクション）

**用途**: カヌレの起源であるボルドーの街並みイメージ

**プロンプト**:
> Sticker-style illustration of a charming Bordeaux street scene. Stone buildings with shuttered windows, a patisserie with an awning, cobblestone street, warm afternoon sunlight. Muted warm tones (cream, terracotta, soft brown). Clean outlines, illustration style suitable for a die-cut sticker. Solid bright green (#00FF00) background. No green in the illustration itself. Aspect ratio 3:2.

**サイズ**: 1200 x 800px

---

## 2. canele-cutaway.png（TEXTURE セクション）

**用途**: カヌレの断面を見せ、外カリッ中しっとりの二層構造を表現

**プロンプト**:
> Sticker-style illustration of a canelé cut in half, showing the cross-section. Dark caramelized crispy outer shell and soft, custardy interior with small air pockets. Warm lighting. Clean outlines, die-cut sticker look. Detailed texture rendering. Solid bright green (#00FF00) background. No green in the illustration itself. Aspect ratio 3:2.

**サイズ**: 1200 x 800px

---

## 3. ingredients.png（INGREDIENTS セクション）

**用途**: カヌレの材料を美しく並べたフラットレイ風イラスト

**プロンプト**:
> Sticker-style flat-lay illustration of canelé ingredients arranged neatly. Vanilla beans, egg yolks in a bowl, dark rum in a small glass, butter, flour, milk in a pitcher, sugar, and a small block of beeswax. Warm watercolor tones with clean outlines. Die-cut sticker aesthetic. Overhead view. Solid bright green (#00FF00) background. No green in the illustration itself. Aspect ratio 3:2.

**サイズ**: 1200 x 800px

---

## 4. canele-baking.png（PROCESS セクション）

**用途**: カヌレの焼き上がりの様子

**プロンプト**:
> Sticker-style illustration of freshly baked canelés in a copper mold. Golden-brown caramelized surface glistening. Steam rising gently. Clean outlines, warm inviting colors. Die-cut sticker look. Solid bright green (#00FF00) background. No green in the illustration itself. Aspect ratio 6:5.

**サイズ**: 1200 x 1000px

---

## 5. canele-coffee.png（GALLERY セクション）

**用途**: カヌレとコーヒーのペアリング

**プロンプト**:
> Sticker-style illustration of a single canelé on a small ceramic plate next to a cup of coffee. Cozy café atmosphere. Warm brown and cream tones with clean outlines. Die-cut sticker aesthetic. Solid bright green (#00FF00) background. No green in the illustration itself. Aspect ratio 3:2.

**サイズ**: 1200 x 800px

---

## 6. canele-lineup.png（GALLERY セクション）

**用途**: カヌレが美しく並んでいる様子

**プロンプト**:
> Sticker-style illustration of a row of perfectly baked canelés lined up on a wooden board. Each one with a slightly different shade of caramel. Warm golden colors with clean outlines. Die-cut sticker look. Solid bright green (#00FF00) background. No green in the illustration itself. Aspect ratio 3:2.

**サイズ**: 1200 x 800px

---

## 7. canele-table.png（GALLERY セクション）

**用途**: テーブルの上でカヌレを楽しむシーン

**プロンプト**:
> Sticker-style illustration of several canelés on a tiered stand, accompanied by flowers and a linen napkin. Afternoon tea setting. Cream and warm brown tones with clean outlines. Die-cut sticker aesthetic. Solid bright green (#00FF00) background. No green in the illustration itself. Aspect ratio 3:2.

**サイズ**: 1200 x 800px

---

## スタイルガイド

- **タッチ**: ステッカー風イラスト（くっきりした輪郭線 + 暖かい色彩）
- **カラーパレット**: クリーム、キャラメルブラウン、テラコッタ、ゴールド（緑系は避ける）
- **雰囲気**: 手作り工房のような暖かみ、ハンドクラフト感
- **背景**: `#00FF00` クロマキーグリーン（切り抜き後に透過PNGにする）
- **切り抜き手順**: `magick input.png -fuzz 10% -transparent "#00FF00" output.png`
- **既存 canele.png との調和**: 暖色系の色味とリアル寄りのタッチを意識
