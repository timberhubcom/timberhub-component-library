import React from 'react';

type TableDataProps = {
  item: any;
};
export interface TableLayout {
  sections: TableLayoutSection[];
  renderHead: Record<string, React.FC | undefined>;
  renderData: Record<string, React.FC<TableDataProps>>;
}

export interface TableLayoutSection {
  id: string;
  children: TableColumn[];
  sticky?: boolean;
}

export class TableColumn {
  id: string;
  width: number;
  order?: number;
}

export function createLayout(header: string[]) {
  const layout: TableLayout = {
    sections: [
      { id: 'sticky', children: [], sticky: true },
      { id: 'main', children: [] },
    ],
    renderHead: { name: NameHead },
    renderData: {},
  };

  const [stickySection, variableSection] = layout.sections;

  stickySection.children.push({
    id: 'name',
    width: 297,
  });

  for (const c of header) {
    const id = `column-id-${c}`;
    layout.renderHead[id] = () => <TableHead name={c} />;
    variableSection.children.push({ id, width: 96 });
  }

  return layout;
}

type TableHeadProps = {
  name: string;
};
const NameHead = () => <div>{'NameHead'}</div>;
const TableHead = ({ name }: TableHeadProps) => <div>{name}</div>;
