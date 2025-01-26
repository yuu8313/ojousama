const personalPronouns = {
  // 一人称
  "私|僕|俺|あたし|アタシ|わたし|ぼく|おれ|わし|あちき|あたい|わらわ|小生|手前|拙者|某|麿|我|吾|予|余": "わたくし",
  // 二人称
  "君|きみ|おまえ|お前|てめえ|てめー|おめえ|おめー|あなた|あんた|貴様|貴殿|貴方|そなた|汝|御身|己|手前|貴下|御方": "貴方様",
  // 三人称
  "彼|彼女|あいつ": "あの方",
  "そいつ": "その方",
  "こいつ": "この方"
};
const insultWords = {
  "馬鹿": "愚か",
  "バカ": "愚か",
  "阿呆": "愚か",
  "アホ": "愚か",
  "ボケ": "愚か",
  "間抜け": "愚か",
  "マヌケ": "愚か",
  "アホウ": "愚か",
  "くそ": "お粗末",
  "クソ": "お粗末",
  "死ね": "お引き取りください",
  "うせろ": "お引き取りください",
  "うるせえ": "お静かに",
  "うるさい": "お静かに"
};
const casualExpressions = {
  "めっちゃ": "とても",
  "超": "大変",
  "すげー": "素晴らしい",
  "すごい": "素晴らしい",
  "やばい": "大変",
  "ヤバい": "大変",
  "すげぇ": "素晴らしい",
  "まじ": "本当に",
  "マジ": "本当に",
  "めっさ": "とても",
  "クッソ": "とても",
  "くっそ": "とても",
  "ちょー": "とても",
  "チョー": "とても",
  "むっちゃ": "とても",
  "激": "とても"
};
const sentenceEndings = {
  "だよ。": "ですわ。",
  "だね。": "ですわね。",
  "だわ。": "ですわ。",
  "です。": "ですわ。",
  "だ。": "ですわ。",
  "である。": "ですわ。",
  "だろう。": "でしょう。",
  "だろ。": "でしょう。",
  "じゃん。": "ですわね。",
  "なの。": "なのですわ。",
  "のよ。": "ですわ。",
  "のね。": "ですわね。",
  "わよ。": "ですわ。",
  "わね。": "ですわね。"
};
const exclamationWords = {
  "わー": "まあ",
  "うわー": "まあ",
  "わーい": "まあ素敵",
  "やった": "素晴らしい",
  "すごーい": "素晴らしい",
  "うひょー": "まあ",
  "うおー": "まあ",
  "えー": "まあ",
  "うわぁ": "まあ",
  "わぁ": "まあ"
};
const questionWords = {
  "なに": "何",
  "なん": "何",
  "どこ": "何処",
  "いつ": "何時",
  "だれ": "誰",
  "どれ": "どちら",
  "どっち": "どちら",
  "どう": "いかが",
  "どうして": "如何して",
  "なんで": "如何して"
};
const particles = {
  "けど": "けれど",
  "だけど": "ですけれど",
  "でも": "ですけれど",
  "じゃあ": "それでは",
  "だから": "そうですから",
  "なので": "そうですから",
  "だって": "といいますのも",
  "って": "とおっしゃいますが",
  "とか": "などと",
  "みたいな": "のような",
  "的な": "のような",
  "つまり": "すなわち",
  "要するに": "つまりは"
};
const greetingWords = {
  "おはよう": "おはようございますわ",
  "こんにちは": "ごきげんよう",
  "こんばんは": "おばんでございますわ",
  "さようなら": "さようでございますわ",
  "バイバイ": "さようでございますわ",
  "じゃあね": "さようでございますわ",
  "またね": "またお目にかかりましょう",
  "ありがとう": "ありがとうございますわ",
  "すみません": "申し訳ございませんわ",
  "ごめん": "申し訳ございませんわ",
  "お願い": "お願いいたしますわ",
  "頼む": "お願いいたしますわ",
  "助けて": "お助けいただけませんこと",
  "待って": "お待ちくださいませ",
  "教えて": "ご教示いただけませんこと"
};
const priorityRules = {　//最優先ルール
  "どうぞよろしくお願いいたします": "まことに、よろしくお願い申し上げますわ",
  "申し訳ございません": "大変申し訳ございませんわ",
  "ありがとうございます": "誠にありがとうございますわ",
  "おはようございます": "素敵な朝をお迎えになられましたわね",
  "こんにちは！": "ごきげんよう",
  "さようなら": "またお目にかかれる日を楽しみにしておりますわ",
  "失礼いたします": "お暇させていただきますわ",
  "お疲れ様です": "本日も誠にご苦労様でございますわ",
  "ネギに上下なんかねーだろよー！": "ネギに上下なんかねーだろよー！...ですわ",
  "ご苦労様です": "いつもお心遣い、誠にありがとうございますわ",
  "いただきます": "では、ご馳走になりますわ",
  "ごちそうさま": "誠に美味でございましたわ",
  "お願いします": "何卒よろしくお願い申し上げますわ",
  "すみません": "大変恐れ入りますが",
  "失礼します": "お邪魔させていただきますわ",
  "黙って": "お静かに",
  "部屋": "お部屋",
  "決断を下した": "決断を下させていただきましたわ",
  "全力を尽くします": "全力を尽くさせていただきますわ",
  "こんにちは、うんこしてくる。": "そのような汚らしい言葉を変換なさらないでいただきたいですわ。",
  "あら、トイレに逃げ込むとは卑怯な、お嬢様は黙って部屋": "まあ、トイレにお逃げになるとは卑怯でございますね。お嬢様は静かにお部屋にいらっしゃるべきではございませんか。",
  "アシスタントです": "アシスタントですわ"
};
const dialectWords = {
  // 関西弁
  "どす。": "でございますわ。",
  "おおきに": "ありがとうございますわ",
  "せやな": "そうでございますわね",
  "あかん": "いけませんわ",
  "ほんま": "本当",
  "めっちゃ": "とても",
  "なんでやねん": "なぜでございますの",
  "せや": "そうでございますわ",
  "ちゃう": "違いますわ",
  "あほ": "お馬鹿さんですわ",
  // 博多弁
  "やけん": "ですから",
  "ばってん": "ですけれど",
  "なんば": "何を",
  "おるばい": "おりますわ",
  "しよる": "しておりますわ",
  "なんしよっと": "何をしていらっしゃいますの",
  "むかっちゃん": "お怒りでございますわ",
  // 東北弁
  "なじょ": "いかが",
  "めんこい": "可愛らしゅうございますわ",
  "けらいん": "いらっしゃいませんわ",
  "しった": "存じ上げておりますわ",
  "えがった": "よろしゅうございますわ",
  "まいね": "ございませんわ",
  "なんだば": "何でございましょう"
};
const indigenousWords = {
  // アイヌ語由来
  "イランカラプテ": "ごきげんよう",
  "ピリカ": "素晴らしゅうございますわ",
  "イヤイライケレ": "ありがとうございますわ",
  "ソモ": "違いますわ",
  "エラマス": "わかりましたわ",
  "アプト": "雨でございますわ",
  "チュプ": "お月様",
  "カムイ": "神様",
  "ウタラ": "皆様",
  "ケセ": "毎度",
  // 琉球語
  "めんそーれ": "いらっしゃいませ",
  "にふぇーでーびる": "ありがとうございますわ",
  "うちなー": "沖縄でございますわ",
  "ゆたさるぐとぅ": "よろしくお願いいたしますわ",
  "ちゅーうがなびら": "こんにちはでございますわ",
  "くぬ": "この",
  "やいびーん": "でございますわ",
  "でーじ": "大変",
  "あんまー": "お母様",
  "あっぱー": "お父様"
};
const isWithinProcessedRange = (index, processedRanges) => {
  return processedRanges.some((range) => index >= range.start && index < range.end);
};
const convertWithWordBoundaries = (text, replacements) => {
  let result = text;
  const processedRanges = [];
  const quotedParts = [];
  let quoteMatch;
  const quoteRegex = /"([^"]+)"/g;
  while ((quoteMatch = quoteRegex.exec(text)) !== null) {
    quotedParts.push({
      text: quoteMatch[1],
      start: quoteMatch.index,
      end: quoteMatch.index + quoteMatch[0].length
    });
  }
  const sortedKeys = Object.keys(replacements).sort((a, b) => b.length - a.length);
  for (const key of sortedKeys) {
    const regex = new RegExp(key, "g");
    let match;
    while ((match = regex.exec(result)) !== null) {
      if (isWithinProcessedRange(match.index, processedRanges)) {
        continue;
      }
      const isProtected = quotedParts.some(
        (part) => match.index >= part.start && match.index < part.end
      );
      if (!isProtected) {
        const replacement = replacements[key];
        result = result.substring(0, match.index) + replacement + result.substring(match.index + match[0].length);
        processedRanges.push({ start: match.index, end: match.index + replacement.length });
        regex.lastIndex = match.index + replacement.length;
      }
    }
  }
  return [result, processedRanges];
};
const convertToLadySpeak = (text) => {
  if (!text) return "";
  let result = text;
  let processedRanges = [];
  [result, processedRanges] = convertWithWordBoundaries(result, priorityRules);
  if (processedRanges.length === 0) {
    [result, processedRanges] = convertWithWordBoundaries(result, exclamationWords);
    [result, processedRanges] = convertWithWordBoundaries(result, questionWords);
    [result, processedRanges] = convertWithWordBoundaries(result, greetingWords);
    [result, processedRanges] = convertWithWordBoundaries(result, personalPronouns);
    [result, processedRanges] = convertWithWordBoundaries(result, insultWords);
    [result, processedRanges] = convertWithWordBoundaries(result, dialectWords);
    [result, processedRanges] = convertWithWordBoundaries(result, indigenousWords);
    [result, processedRanges] = convertWithWordBoundaries(result, casualExpressions);
    [result, processedRanges] = convertWithWordBoundaries(result, particles);
    [result, processedRanges] = convertWithWordBoundaries(result, sentenceEndings);
  }
  if (!result.includes("ですわ") && !result.includes("でしょう") && !result.includes("かしら") && !result.endsWith("。")) {
    result += "ですわ。";
  }
  return result;
};
export {
  convertToLadySpeak as c
};
