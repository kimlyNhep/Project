import React from 'react';
import MaterialTable from 'material-table';

export default function MaterialTableDemo() {
    const [state, setState] = React.useState({
        columns: [
            { title: 'ID', field: 'id', editable: 'never' },
            { title: 'Title', field: 'title' },
            { title: 'Pages', field: 'pages', type: 'numeric' },
            { title: 'Category', field: 'category' },
            { title: 'Author', field: 'author' },
            { title: 'Owner', field: 'owner' },
            {
                title: 'Profile',
                field: 'profile',
                editComponent: props => <input type='file' />,
                render: rowData => console.log(rowData)
                // <img
                //     src={rowData.url}
                //     alt='profile'
                //     style={{ width: 50, borderRadius: '50%' }}
                // />
            }
        ],
        data: [
            {
                id: '001',
                title: 'Harry Poter',
                pages: 700,
                category: 'Drama',
                author: 'J.K Rolling',
                owner: 'kimly'
            },
            {
                name: 'Zerya Betül',
                surname: 'Baran',
                birthYear: 2017,
                birthCity: 34
            }
        ]
    });

    return (
        <MaterialTable
            title='Books'
            columns={state.columns}
            data={state.data}
            editable={{
                onRowAdd: newData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            setState(prevState => {
                                const data = [...prevState.data];
                                data.push(newData);
                                return { ...prevState, data };
                            });
                        }, 600);
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            if (oldData) {
                                setState(prevState => {
                                    const data = [...prevState.data];
                                    data[data.indexOf(oldData)] = newData;
                                    return { ...prevState, data };
                                });
                            }
                        }, 600);
                    }),
                onRowDelete: oldData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            setState(prevState => {
                                const data = [...prevState.data];
                                data.splice(data.indexOf(oldData), 1);
                                return { ...prevState, data };
                            });
                        }, 600);
                    })
            }}
        />
    );
}
