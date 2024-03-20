import { GoArrowUp, GoArrowDown } from 'react-icons/go';

import useSort from '../hooks/use-sort';
import Table from "./Table";

function SortableTable(props) {
    const { config, data } = props;

    const {
        sortOrder,
        sortBy,
        setSortColumn,
        sortedData
    } = useSort(data, config);

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column;
        } else {
            return {
                ...column,
                header: () => (
                    <th className="cursor-pointer hover:bg-gray-200" onClick={() => setSortColumn(column.label)}>
                        <div className="flex items-center">
                            {getIcons(column.label, sortBy, sortOrder)}
                            {column.label}
                        </div>
                    </th>
                )
            }
        }
    });

    return <Table {...props} config={updatedConfig} data={sortedData} />;
};

function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy) {
        return (<div>
            <GoArrowUp />
            <GoArrowDown />
        </div>);
    }

    if (sortOrder === null) {
        return (<div>
            <GoArrowUp />
            <GoArrowDown />
        </div>);
    } else if (sortOrder === 'asc') {
        return (<div>
            <GoArrowUp />
        </div>);
    } else if (sortOrder === 'desc') {
        return (<div>
            <GoArrowDown />
        </div>);
    }
}

export default SortableTable;