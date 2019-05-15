import parseReadme from '../src';

describe('readme', () => {
    test('should parse basic', () => {
			expect(parseReadme("# hi")).toEqual(`<h1 id=\"hi\">hi</h1>`);
		});

		test('should parse basic / js alert', () => {
			expect(parseReadme("[Basic](javascript:alert('Basic'))")).toEqual("<p>Basic</p>")
		});

		test('should parse basic / local storage', () => {
			expect(parseReadme("[Local Storage](javascript:alert(JSON.stringify(localStorage)))"))
				.toEqual("<p>Local Storage</p>");
		});
});