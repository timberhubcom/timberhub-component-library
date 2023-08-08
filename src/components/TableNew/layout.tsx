import React from 'react';

type TableDataProps = {
  item: any;
};
export interface TableLayout {
  sections: TableLayoutSection[];
  renderHead: Record<string, React.FC | undefined>;
  renderData: Record<string, React.FC | undefined>;
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
  const stickyHeader = header.slice(0, 1)[0];
  const contentHeader = header.slice(1);

  const layout: TableLayout = {
    sections: [
      { id: 'sticky', children: [], sticky: true },
      { id: 'main', children: [] },
    ],
    renderHead: {},
    renderData: {},
  };

  const [stickySection, variableSection] = layout.sections;

  layout.renderHead[stickyHeader] = () => <TableHead name={stickyHeader} />;
  layout.renderData[stickyHeader] = () => <div>This is a name</div>;
  stickySection.children.push({
    id: stickyHeader,
    width: 300,
  });

  for (const c of contentHeader) {
    const id = `column-${c.replace(' ', '-')}`;
    layout.renderHead[id] = () => <TableHead name={c} />;
    layout.renderData[id] = () => <div>{`Data for ${c}`}</div>;
    variableSection.children.push({ id, width: 150 });
  }

  variableSection.children.push({ id: 'column-actions', width: 100 });

  return layout;
}

type TableHeadProps = {
  name: string;
};
const TableHead = ({ name }: TableHeadProps) => <div>{name}</div>;
