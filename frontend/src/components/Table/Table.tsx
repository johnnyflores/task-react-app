import { createContext, type ReactNode } from "react";

const TableContext = createContext({});

interface TableProps {
  children: ReactNode;
}

function Table({ children }: TableProps) {
  return (
    <TableContext.Provider value={{}}>
      <table className="min-w-full divide-y divide-gray-700">{children}</table>
    </TableContext.Provider>
  );
}

function Header({ children }: { children: ReactNode }) {
  return (
    <thead className="w-full min-w-max table-auto text-left">
      <tr>{children}</tr>
    </thead>
  );
}

function Body({
  data,
  render,
}: {
  data: any[];
  render: (item: any) => ReactNode;
}) {
  if (!data.length) return <span className="w-full text-center">No Data</span>;
  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {data.map(render)}
    </tbody>
  );
}

Table.Header = Header;
Table.Body = Body;

export default Table;
