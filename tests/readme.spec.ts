import parseReadme from '../src';

describe('readme', () => {
  describe('basic parsing', () => {
    test('should parse basic', () => {
      expect(parseReadme('# hi')).toEqual(`<h1 id=\"hi\">hi</h1>`);
    });

    test('should parse basic / js alert', () => {
      expect(parseReadme("[Basic](javascript:alert('Basic'))")).toEqual('<p>Basic</p>');
    });

    test('should parse basic / local storage', () => {
      expect(parseReadme('[Local Storage](javascript:alert(JSON.stringify(localStorage)))')).toEqual('<p>Local Storage</p>');
    });

    test('should parse basic / case insensitive', () => {
      expect(parseReadme("[CaseInsensitive](JaVaScRiPt:alert('CaseInsensitive'))")).toEqual('<p>CaseInsensitive</p>');
    });

    test('should parse basic / url', () => {
      expect(parseReadme("[URL](javascript://www.google.com%0Aalert('URL'))")).toEqual('<p>URL</p>');
    });

    test('should parse basic / in quotes', () => {
      expect(parseReadme('[In Quotes](\'javascript:alert("InQuotes")\')')).toEqual('<p>In Quotes</p>');
    });
  });

  describe('images', () => {
    test('should parse basic / in quotes', () => {
      expect(parseReadme('![Escape SRC - onload](https://www.example.com/image.png"onload="alert(\'ImageOnLoad\'))')).toEqual('<p><img src="https://www.example.com/image.png%22onload=%22alert(\'ImageOnLoad\')" alt="Escape SRC - onload"></p>');
    });
  });
});
