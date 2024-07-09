const bibleInfos = [
  { bookName: "zeroIndex", bookSeq: 0 },
  { bookName: "genesis", bookSeq: 1 },
  { bookName: "exodus", bookSeq: 2 },
  { bookName: "leviticus", bookSeq: 3 },
  { bookName: "numbers", bookSeq: 4 },
  { bookName: "deuteronomy", bookSeq: 5 },
  { bookName: "joshua", bookSeq: 6 },
  { bookName: "judges", bookSeq: 7 },
  { bookName: "ruth", bookSeq: 8 },
  { bookName: "1samuel", bookSeq: 9 },
  { bookName: "2samuel", bookSeq: 10 },
  { bookName: "1kings", bookSeq: 11 },
  { bookName: "2kings", bookSeq: 12 },
  { bookName: "1chronicles", bookSeq: 13 },
  { bookName: "2chronicles", bookSeq: 14 },
  { bookName: "ezra", bookSeq: 15 },
  { bookName: "nehemiah", bookSeq: 16 },
  { bookName: "esther", bookSeq: 17 },
  { bookName: "job", bookSeq: 18 },
  { bookName: "psalms", bookSeq: 19 },
  { bookName: "proverbs", bookSeq: 20 },
  { bookName: "ecclesiastes", bookSeq: 21 },
  { bookName: "baby", bookSeq: 22 },
  { bookName: "isaiah", bookSeq: 23 },
  { bookName: "jeremiah", bookSeq: 24 },
  { bookName: "lamentations", bookSeq: 25 },
  { bookName: "ezekiel", bookSeq: 26 },
  { bookName: "daniel", bookSeq: 27 },
  { bookName: "hosea", bookSeq: 28 },
  { bookName: "joel", bookSeq: 29 },
  { bookName: "amos", bookSeq: 30 },
  { bookName: "obadiah", bookSeq: 31 },
  { bookName: "jonah", bookSeq: 32 },
  { bookName: "micah", bookSeq: 33 },
  { bookName: "nahum", bookSeq: 34 },
  { bookName: "habakkuk", bookSeq: 35 },
  { bookName: "zephaniah", bookSeq: 36 },
  { bookName: "haggai", bookSeq: 37 },
  { bookName: "zechariah", bookSeq: 38 },
  { bookName: "malachi", bookSeq: 39 },
  { bookName: "matthew", bookSeq: 40 },
  { bookName: "mark", bookSeq: 41 },
  { bookName: "luke", bookSeq: 42 },
  { bookName: "john", bookSeq: 43 },
  { bookName: "acts", bookSeq: 44 },
  { bookName: "romans", bookSeq: 45 },
  { bookName: "1corinthians", bookSeq: 46 },
  { bookName: "2corinthians", bookSeq: 47 },
  { bookName: "galatians", bookSeq: 48 },
  { bookName: "ephesians", bookSeq: 49 },
  { bookName: "philippians", bookSeq: 50 },
  { bookName: "colossians", bookSeq: 51 },
  { bookName: "1thessalonians", bookSeq: 52 },
  { bookName: "2thessalonians", bookSeq: 53 },
  { bookName: "1timothy", bookSeq: 54 },
  { bookName: "2timothy", bookSeq: 55 },
  { bookName: "titus", bookSeq: 56 },
  { bookName: "philemon", bookSeq: 57 },
  { bookName: "hebrews", bookSeq: 58 },
  { bookName: "james", bookSeq: 59 },
  { bookName: "1peter", bookSeq: 60 },
  { bookName: "2peter", bookSeq: 61 },
  { bookName: "1john", bookSeq: 62 },
  { bookName: "2john", bookSeq: 63 },
  { bookName: "3john", bookSeq: 64 },
  { bookName: "jude", bookSeq: 65 },
  { bookName: "revelation", bookSeq: 66 },
];
const fs = require("fs");
const path = require("path");
const bibleService = {
  async get(book, chapter, locale) {
    if (!locale) locale = "ko"
    if (locale === "ko") {
      const jsonFilePath = path.join(
        "util",
        "bible",
        bibleInfos[Number(book)].bookName,
        `${chapter}.json`
      );
      const result = fs.readFileSync(jsonFilePath, "utf8")
      return JSON.parse(result)
    } else {

    }
  },
};

module.exports = bibleService;
