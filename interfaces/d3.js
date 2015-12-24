declare class _D3_TSV_CSV {
  parseRows(file: string): Array<Object>
}

declare class _D3 {
  tsv: _D3_TSV_CSV;
  csv: _D3_TSV_CSV;

  text(url: string, callback: Function): void;
  range(range: number): Array<number>;
}

declare var d3: _D3;
