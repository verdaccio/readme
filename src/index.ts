import marked from 'marked';

export default function parseReadme(readme: string): string | void {
  if (readme) {
    marked.setOptions({
      renderer: new marked.Renderer(),
      sanitize: true
    });
    return marked(readme).trim();
  }

  return;
}
