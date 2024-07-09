const fs = require("fs");
const path = require("path");
const bibleService = {
  async get(book, chapter, locale) {
    if (!locale) locale = "ko";
    if (locale === "ko") {
      const jsonFilePath = path.join("util", "bible", book, `${chapter}.json`);
      const result = fs.readFileSync(jsonFilePath, "utf8");
      return JSON.parse(result);
    } else {
    }
  },
};

module.exports = bibleService;
